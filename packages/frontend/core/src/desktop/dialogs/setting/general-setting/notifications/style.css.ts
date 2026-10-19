import { cssVar } from '@lumibook/theme';
import { style } from '@vanilla-extract/css';

export const errorMessage = style({
  color: cssVar('errorColor'),
});
