import type * as Stitches from '@stitches/react';
import { ConfigType } from '@stitches/react/types/config';

export const utils: ConfigType.Utils<Record<string, any>> = {
  p: (value: Stitches.ScaleValue<'spacing'>) => ({
    padding: value,
  }),
  px: (value: Stitches.ScaleValue<'spacing'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Stitches.ScaleValue<'spacing'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: Stitches.ScaleValue<'spacing'>) => ({
    margin: value,
  }),
  mx: (value: Stitches.ScaleValue<'spacing'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Stitches.ScaleValue<'spacing'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
};
