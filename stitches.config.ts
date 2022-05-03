import { createStitches, defaultThemeMap } from '@stitches/react';
import { baseColors, darkColors } from 'lib/colors';

export const { styled, getCssText, createTheme, globalCss, css } =
  createStitches({
    theme: {
      colors: {
        ...baseColors,
      },
      'z-index': {
        popup: `99998`,
        modal: `40`,
        header: `30`,
        snackbar: `99999`,
        productNavLink: `11`,
        tooltip: `10`,
        btnWhatHasChanged: `9`,
        footer: `0`,
        notice: `100000`,
      },
      radius: {
        'x-small': 4,
        small: 8,
        regular: 16,
        large: 24,
        pill: 48,
      },
      spacing: {
        'xxxx-small': 4,
        'xxx-small': 8,
        'xx-small': 12,
        'x-small': 16,
        small: 20,
        regular: 24,
        large: 32,
        'x-large': 40,
        'xx-large': 48,
        'xxx-large': 56,
        'xxxx-large': 64,
        'xxxxx-large': 72,
        'xxxxxx-large': 80,
      },
    },
    utils: {
      mx: (value: number) => ({ marginLeft: value, marginRight: value }),
      my: (value: number) => ({ marginTop: value, marginBottom: value }),
    },
    media: {
      desktop: `(min-width: 900px)`,
      mobile: `(max-width: 900px)`,
    },
    // Rewrite the object theme options for css prop
    themeMap: {
      ...defaultThemeMap,
      margin: `spacing`,
      borderRadius: `radius`,
      zIndex: `z-index`,
    },
  });

export const darkTheme = createTheme(`dark`, {
  colors: {
    ...darkColors,
  },
});

const GlobalStyles = globalCss({
  body: {
    background: `$secondary`,
    color: `$primary`,
  },
});

// We can declare the styles here or in pages/_app.tsx
GlobalStyles();
