import { createStitches, defaultThemeMap } from '@stitches/react';
import { baseColors, darkColors } from 'lib/colors';

// Setup Default Theme
export const { styled, getCssText, createTheme, globalCss, css } =
  createStitches({
    // Theme Options
    theme: {
      // Default Colors
      colors: {
        ...baseColors,
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
        'x-small': 4,
        small: 8,
        regular: 16,
        large: 24,
        pill: 48,
      },
      // Spacing Sizes
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
    // Utilities for css
    utils: {
      mx: (value: number) => ({ marginLeft: value, marginRight: value }),
      my: (value: number) => ({ marginTop: value, marginBottom: value }),
    },
    // Media Query
    media: {
      desktop: `(min-width: 900px)`,
      mobile: `(max-width: 900px)`,
    },
    // Rewrite the object theme options for css prop
    themeMap: {
      ...defaultThemeMap,
      gap: `spacing`,
      gridGap: `spacing`,
      columnGap: `spacing`,
      gridColumnGap: `spacing`,
      rowGap: `spacing`,
      gridRowGap: `spacing`,
      inset: `spacing`,
      insetBlock: `spacing`,
      insetBlockEnd: `spacing`,
      insetBlockStart: `spacing`,
      insetInline: `spacing`,
      insetInlineEnd: `spacing`,
      insetInlineStart: `spacing`,
      margin: `spacing`,
      marginTop: `spacing`,
      marginRight: `spacing`,
      marginBottom: `spacing`,
      marginLeft: `spacing`,
      marginBlock: `spacing`,
      marginBlockEnd: `spacing`,
      marginBlockStart: `spacing`,
      marginInline: `spacing`,
      marginInlineEnd: `spacing`,
      marginInlineStart: `spacing`,
      padding: `spacing`,
      paddingTop: `spacing`,
      paddingRight: `spacing`,
      paddingBottom: `spacing`,
      paddingLeft: `spacing`,
      paddingBlock: `spacing`,
      paddingBlockEnd: `spacing`,
      paddingBlockStart: `spacing`,
      paddingInline: `spacing`,
      paddingInlineEnd: `spacing`,
      paddingInlineStart: `spacing`,
      scrollMargin: `spacing`,
      scrollMarginTop: `spacing`,
      scrollMarginRight: `spacing`,
      scrollMarginBottom: `spacing`,
      scrollMarginLeft: `spacing`,
      scrollMarginBlock: `spacing`,
      scrollMarginBlockEnd: `spacing`,
      scrollMarginBlockStart: `spacing`,
      scrollMarginInline: `spacing`,
      scrollMarginInlineEnd: `spacing`,
      scrollMarginInlineStart: `spacing`,
      scrollPadding: `spacing`,
      scrollPaddingTop: `spacing`,
      scrollPaddingRight: `spacing`,
      scrollPaddingBottom: `spacing`,
      scrollPaddingLeft: `spacing`,
      scrollPaddingBlock: `spacing`,
      scrollPaddingBlockEnd: `spacing`,
      scrollPaddingBlockStart: `spacing`,
      scrollPaddingInline: `spacing`,
      scrollPaddingInlineEnd: `spacing`,
      scrollPaddingInlineStart: `spacing`,
      top: `spacing`,
      right: `spacing`,
      bottom: `spacing`,
      left: `spacing`,
      borderRadius: `radius`,
      borderTopLeftRadius: `radius`,
      borderTopRightRadius: `radius`,
      borderBottomRightRadius: `radius`,
      borderBottomLeftRadius: `radius`,
      zIndex: `z-index`,
    },
  });

// Dark Theme Definitions
export const darkTheme = createTheme(`dark`, {
  colors: {
    ...darkColors,
  },
});

// We can declare the styles here or in pages/_app.tsx
globalCss({
  body: {
    background: `$secondary`,
    color: `$primary`,
  },
})();
