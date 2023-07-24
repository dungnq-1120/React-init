import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default typography: https://mui.com/material-ui/customization/default-theme/?expand-path=$.typography
 *
 * createTypography: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/styles/createTypography.js
 */

/**
 * The default font size of the Material Specification.
 *
 * https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/styles/createTypography.js#L20
 */
const fontSize = 14; // px

/**
 * Tell MUI what's the font-size on the html element.
 * 16px is the default font-size used by browsers.
 *
 * https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/styles/createTypography.js#L27
 */
const htmlFontSize = 16;

/**
 * Converts px to rem
 *
 * https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/styles/createTypography.js#L44-L45
 */
const coef = fontSize / 14;
const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

const typography: ThemeOptions["typography"] = {
  /**
   * Overriding default styles - start
   */
  fontFamily: ['"Noto Sans JP"', "sans-serif"].join(","),
  fontSize,
  htmlFontSize,
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(17),
  },
  /**
   * Overriding default styles - end
   */

  /**
   * Adding variant - heading - start
   */
  heading18: {
    fontWeight: 700,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(26),
  },
  heading16: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(23),
  },
  heading14: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  heading12: {
    fontWeight: 700,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(17),
  },
  /**
   * Adding variant - heading - end
   */

  /**
   * Adding variant - text - start
   */
  text16: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(23),
  },
  text14: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  text12: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(17),
  },
  text8: {
    fontWeight: 400,
    fontSize: pxToRem(8),
    lineHeight: pxToRem(12),
  },
  /**
   * Adding variant - text - end
   */
};

export default typography;
