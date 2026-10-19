import { cssVar } from '@lumibook/theme';
import { style } from '@vanilla-extract/css';

export const createTips = style({
  color: cssVar('textSecondaryColor'),
  fontSize: 12,
  lineHeight: '20px',
});
