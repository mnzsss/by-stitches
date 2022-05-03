import { DeepPartial } from './DeepPartial';
import { XOR } from './XOR';

export interface ThemeFont {
  family: string;
  weights: number[];
  italic: boolean;
}

export interface ThemeTypography {
  family: string;
  weight: string;
  height: number | string;
  size: number | string;
}

export type Theme = DeepPartial<ThemeBase> &
  XOR<{ $id: string }, { $path: string }>;

export interface Fonts {
  $fonts?: ThemeFont[];
}

export interface ThemeBase extends Fonts {
  $default: boolean;
  $use: string[];
  header: {
    height: number | string;
  };
  content: {
    max: number;
  };
  color: {
    primary: string;
    background: string;
    foreground: string;
    heading: string;
    subheading: string;
    body: string;
    logo: string;
    divider: string;
    icon: {
      stroke: string;
      fill: string;
    };
    siteBlindado: string;
    accent: {
      background: string;
      foreground: string;
    };
    positive: {
      background: string;
      foreground: string;
    };
    negative: {
      background: string;
      foreground: string;
    };
    footer: {
      background: string;
    };
  };
  typography: {
    heading1: ThemeTypography;
    heading2: ThemeTypography;
    heading3: ThemeTypography;
    heading4: ThemeTypography;
    heading5: ThemeTypography;
    heading6: ThemeTypography;
    subheading: ThemeTypography;
    body: ThemeTypography;
    'body-small': ThemeTypography;
    'body-x-small': ThemeTypography;
    'body-heading': ThemeTypography;
    'body-heading-small': ThemeTypography;
    caption: ThemeTypography;
    overline: ThemeTypography;
    quote: ThemeTypography;
    'quote-small': ThemeTypography;
    promo1: ThemeTypography;
    promo2: ThemeTypography;
    headline: ThemeTypography;
  };
  button: {
    typography: {
      family: string;
      size: number | string;
      weight: number | string;
    };
    color: {
      background: string;
      foreground: string;
      border: string;
      contrast: string;
      'x-contrast': string;
      'xx-contrast': string;
      'xxx-contrast': string;
      'xxxx-contrast': string;
    };
    size: {
      regular: number | string;
      small: number | string;
      'x-small': number | string;
      'xx-small': number | string;
    };
  };
  input: {
    color: {
      background: string;
      foreground: string;
      border: string;
    };
    height: number | string;
    label: {
      size: number | string;
      color: string;
    };
    radius: number | string;
  };
  'z-index': {
    header: number | string;
    popup: number | string;
    tooltip: number | string;
    notice: number | string;
  };
  radius: {
    'x-small': number | string;
    small: number | string;
    regular: number | string;
    pill: number | string;
  };
  spacing: {
    'xxxx-small': number | string;
    'xxx-small': number | string;
    'xx-small': number | string;
    'x-small': number | string;
    small: number | string;
    regular: number | string;
    large: number | string;
    'x-large': number | string;
    'xx-large': number | string;
    'xxx-large': number | string;
    'xxxx-large': number | string;
    'xxxxx-large': number | string;
    'xxxxxx-large': number | string;
    none: string;
  };
}

export type ThemeFlatted = {
  [key: string]: string;
} & Pick<ThemeBase, '$default' | '$fonts' | '$use'> &
  ({ $id: string } | { $path: string });
