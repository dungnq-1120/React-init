import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default Typography MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Typography/Typography.js
 */

const MuiTypography: NonNullable<ThemeOptions["components"]>["MuiTypography"] =
  {
    defaultProps: {
      variantMapping: {
        heading18: "h3",
        heading16: "h4",
        heading14: "h5",
        heading12: "h6",
        text16: "p",
        text14: "p",
        text12: "p",
        text8: "p",
      },
    },
  };

export default MuiTypography;
