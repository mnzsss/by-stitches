import { createStitches } from '@stitches/react';
import {
  baseColors,
  baseStitchesVariables,
  darkColors,
  darkStitchesVariables,
} from './colors';
import { themeMap } from './shared/themeMap';
import { utils } from './web/utils';

// Setup Default Theme
export const { styled, getCssText, createTheme, globalCss, css } =
  createStitches({
    // Theme Options
    theme: {
      // Default Colors
      colors: {
        ...baseColors,
        ...baseStitchesVariables,
      },
      // Z-Index's
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
      // Border Radius Sizes
      radius: {
        'x-small': `4px`,
        small: `8px`,
        regular: `16px`,
        large: `24px`,
        pill: `48px`,
      },
      // Spacing Sizes
      spacing: {
        'xxxx-small': `4px`,
        'xxx-small': `8px`,
        'xx-small': `12px`,
        'x-small': `16px`,
        small: `20px`,
        regular: `24px`,
        large: `32px`,
        'x-large': `40px`,
        'xx-large': `48px`,
        'xxx-large': `56px`,
        'xxxx-large': `64px`,
        'xxxxx-large': `72px`,
        'xxxxxx-large': `80px`,
      },
      fonts: {
        body: `Barlow Condensed`,
      },
      fontSizes: {
        body: `16px`,
      },
      lineHeights: {
        body: `24px`,
      },
      fontWeights: {
        normal: `400`,
      },
      sizes: {
        vw: `100vw`,
        vh: `100vh`,
        full: `100%`,
      },
    },
    // Utilities for css
    utils,
    // Media Query
    media: {
      desktop: `(min-width: 900px)`,
      mobile: `(max-width: 900px)`,
    },
    // Rewrite the object theme options for css prop
    themeMap,
  });

// Dark Theme
export const darkTheme = createTheme(`dark`, {
  colors: {
    ...darkColors,
    ...darkStitchesVariables,
  },
});

// We can declare the styles here or in pages/_app.tsx
globalCss({
  'html body': {
    width: `$full`,
    margin: 0,
    padding: 0,
    scrollBehavior: `smooth`,
    scrollPaddingTop: `calc($large + $large)`,
  },
  body: {
    minHeight: `100vh`,
    height: `100vh`,
    background: `$background`,
    color: `$body`,
    fontFamily: `$body`,
    fontSize: `$body`,
    fontWeight: `$normal`,
    lineHeight: `$body`,
  },
  '@font-face': [
    {
      fontFamily: `Barlow Condensed`,
      fontStyle: `normal`,
      fontWeight: `400`,
      fontDisplay: `block`,
      src: `local('Barlow Condensed Regular'), local('BarlowCondensed-Regular'), url(https://beyoung.com.br/fonts/s/barlowcondensed/v4/HTx3L3I-JCGChYJ8VI-L6OO_au7B6xHT2g.woff2), format('woff2')`,
      unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
    },
  ],
})();
