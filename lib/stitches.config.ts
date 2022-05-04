import { createStitches, defaultThemeMap } from '@stitches/react';
import { baseColors, darkColors } from 'lib/colors';
import type * as Stitches from '@stitches/react';

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
    },
    // Utilities for css
    utils: {
      p: (value: Stitches.ScaleValue<'spacing'>) => ({
        paddingBottom: value,
        paddingTop: value,
        paddingLeft: value,
        paddingRight: value,
      }),
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

// Dark Theme
export const darkTheme = createTheme(`dark`, {
  colors: {
    ...darkColors,
  },
});

// We can declare the styles here or in pages/_app.tsx
globalCss({
  body: {
    background: `$primary`,
    color: `$secondary`,
  },
})();
