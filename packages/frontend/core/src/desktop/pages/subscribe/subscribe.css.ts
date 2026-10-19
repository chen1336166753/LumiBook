import { cssVar } from '@lumibook/theme';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
  lineHeight: 4,
  color: cssVar('--affine-text-secondary-color'),
});
