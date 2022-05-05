/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import produce, { Draft } from 'immer';
import {
  createContext,
  ElementType,
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { ObjectWith } from '../interfaces/ObjectWith';

import { Theme, ThemeFlatted, ThemeFont } from '../interfaces/Theme';

type ThemeContextType = {
  themes: ThemeFlatted[];
  groups: ThemeFlatted[];
  update: (theme: Theme | Theme[]) => void;
  reset: (theme: Theme | Theme[]) => void;
};

export function flatTheme(theme: Theme, path: string[] = []): ThemeFlatted {
  const themeFlatted: ThemeFlatted = {} as ThemeFlatted;

  for (const key in theme) {
    // @ts-ignore
    const value = theme[key];

    if (value == null) {
      continue;
    }

    if (key.startsWith(`$`)) {
      themeFlatted[key] = value;
      continue;
    }

    if (Array.isArray(value)) {
      themeFlatted[key] = `Array is not suported`;
      continue;
    }

    if (typeof value === `object`) {
      Object.assign(
        themeFlatted,
        flatTheme(value, ([] as string[]).concat(path, key)),
      );
      continue;
    }

    const variable = [...path, key].join(`-`);

    themeFlatted[variable] =
      typeof value === `number`
        ? `${value}px`
        : typeof value === `string` && value.startsWith(`--`)
        ? `var(${value})`
        : value;
  }

  return themeFlatted;
}

export const ThemeContext = createContext<ThemeContextType>({
  themes: [],
  groups: [],
  update: () => null,
  reset: () => null,
});

export type ThemeState = {
  themes: ThemeFlatted[];
  groups: ThemeFlatted[];
  history: { [key: string]: ThemeFlatted };
};

export const INITIAL_THEME_STATE: ThemeState = {
  themes: [],
  groups: [],
  history: {},
};

type ReducerAction =
  | {
      type: 'UPDATE';
      theme: Theme | Theme[];
    }
  | {
      type: 'RESET';
    };

type ReducerFunction = (
  prevState: ThemeState,
  action: ReducerAction,
) => ThemeState;

// This method needs to be separated so we can call it when initializing
// the reducer state in order for the Theme to be Server Side Rendered.
function updateTheme(theme: Theme | Theme[], draft: Draft<ThemeState>) {
  const themes = ([] as Theme[]).concat(theme);

  for (const theme of themes) {
    const flatted = flatTheme(theme);
    flatted.$default = flatted.$default || false;

    if (`$id` in flatted) {
      // Find an active group for $id
      const groupOnTheme = draft.groups.find(
        (group) => group.$id === flatted.$id,
      );

      if (groupOnTheme == null) {
        draft.groups.push(flatted);
      }

      continue;
    }

    // Find an active theme for $path
    const pathOnTheme = draft.themes.find(
      (currentTheme) => currentTheme.$path === flatted.$path,
    );

    if (pathOnTheme == null) {
      draft.themes.push(flatted);
      continue;
    }

    // If the new theme is $default we need to apply it before saving
    // the history so it's also saved.
    if (flatted.$default) {
      Object.assign(pathOnTheme, flatted);
    }

    // When the active theme is $default we save it on the history
    // so it can be restored and we flag the new theme as non $default.
    if (pathOnTheme.$default && flatted.$default === false) {
      draft.history[pathOnTheme.$path] = { ...pathOnTheme };
      pathOnTheme.$default = false;
    }

    Object.assign(pathOnTheme, flatted);
  }
}

function reducer(state: ThemeState, action: ReducerAction) {
  return produce(state, (draft: Draft<ThemeState>) => {
    if (action.type === `RESET`) {
      // We only keep the $default themes. We also look for the $path in the
      // history so it can be restored.
      draft.themes = draft.themes
        .map((currentTheme) =>
          currentTheme.$path in draft.history
            ? draft.history[currentTheme.$path]
            : currentTheme,
        )
        .filter((currentTheme) => currentTheme.$default === true);

      draft.history = {};
    }

    if (action.type === `UPDATE`) {
      updateTheme(action.theme, draft);
    }
  });
}

/**
 * Generates the Google Fonts' URL for the font
 */
function getFontUrl(font: ThemeFont): string {
  const importString = [
    font.family.replace(/\s/g, `+`),
    `:`,
    font.italic ? `ital,` : ``,
    `wght@`,
  ].concat(
    font.weights
      .map((weight) => `${font.italic ? `0,` : ``}${weight}`)
      .concat(font.italic ? font.weights.map((weight) => `1,${weight}`) : [])
      .join(`;`),
  );

  return importString.join(``);
}

function getUniqueFonts(themes: ThemeFlatted[]): ThemeFont[] {
  const fonts: Map<string, ThemeFont> = new Map();

  for (const theme of themes) {
    for (const font of theme.$fonts || []) {
      if (fonts.has(font.family)) {
        continue;
      }

      fonts.set(font.family, font);
    }
  }

  return Array.from(fonts.values());
}

const DefaultContainer = (props: any) => <div {...props} />;

export function initializeThemeState(themes: Theme | Theme[]): ThemeState {
  return produce(
    {
      history: {},
      groups: [],
      themes: [],
    },
    (draft) =>
      updateTheme(
        ([] as Theme[]).concat(themes).map((theme) => ({
          ...theme,
          $default: true,
        })),
        draft,
      ),
  );
}

interface ThemeProviderProps {
  theme: Theme[];
  themeState: ThemeState;
  children: ReactNode;

  /**
   * Component to render the Theme's variables
   */
  container?: ElementType;

  /**
   * Component to render the Theme's fonts
   */
  fontsContainer?: ElementType;
}

export function ThemeProvider({
  children,
  theme,
  themeState,
  fontsContainer: FontsContainer = DefaultContainer,
}: ThemeProviderProps) {
  const [state, send] = useReducer<ReducerFunction>(
    reducer,
    themeState || initializeThemeState(theme),
  );

  // const themeStoraged = localStorage.getItem(`theme`);

  // useEffect(() => {
  //   document.body.classList.toggle(`dark`, themeStoraged === `dark`);
  // }, [themeStoraged]);

  const update = useCallback(
    (theme: Theme | Theme[]) => send({ type: `UPDATE`, theme }),
    [send],
  );

  const reset = useCallback(() => send({ type: `RESET` }), [send]);

  const fonts = useMemo(() => getUniqueFonts(state.themes), [state.themes]);

  const context = useMemo(
    () => ({
      themes: state.themes,
      groups: state.groups,
      update,
      reset,
    }),
    [state, update, reset],
  );

  return (
    <ThemeContext.Provider value={context}>
      <FontsContainer>
        {fonts.map((font) => {
          const url = getFontUrl(font);

          return (
            <link
              key={font.family}
              href={`https://fonts.googleapis.com/css2?family=${url}&display=swap`}
              rel="stylesheet"
            />
          );
        })}
      </FontsContainer>

      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(theme?: Theme | Theme[]) {
  const { update, reset } = useContext(ThemeContext);

  useEffect(() => {
    const isArray = Array.isArray(theme) && theme.length > 0;

    if (theme != null || isArray) {
      update(theme!);
    }

    return () => {
      if (theme != null) {
        reset(theme);
      }
    };
  }, [reset, theme, update]);
}

export interface WithThemeKeyProps {
  theme?: 'dark' | 'light';
  'data-theme-key'?: string;
}

/**
 * Adds states to a ThemeKey
 *
 * Usage:
 * ```
 * composeThemeKey('.Button', 'primary', { hovered: true }) -> '.Button:primary:hovered'
 * ```
 */
export function composeThemeKey(
  props: ObjectWith<WithThemeKeyProps> | string,
  ...states: (string | { [state: string]: boolean })[]
) {
  const activeStates = clsx(...states)
    .split(` `)
    .filter(Boolean)
    .map((state) => `:` + state)
    .join(``);

  const key = typeof props === `string` ? props : props[`data-theme-key`] ?? ``;

  return (`.` + key).replace(/\.+/g, `.`) + activeStates;
}

export function withThemeKey<P>(
  Component: FunctionComponent<P & WithThemeKeyProps>,
  name: string,
): FunctionComponent<P & WithThemeKeyProps> {
  Component.displayName = name;

  // eslint-disable-next-line react/display-name
  return (props) => {
    const themeKey = [props[`data-theme-key`], name];

    return <Component {...props} data-theme-key={themeKey.join(`.`)} />;
  };
}
