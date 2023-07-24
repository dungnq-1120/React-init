import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default FormControlLabel MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/FormControlLabel/FormControlLabel.js
 */

const MuiFormControlLabel: NonNullable<
  ThemeOptions["components"]
>["MuiFormControlLabel"] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      marginLeft: 0,
      marginRight: 0,
    },
    label: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
  },
};

export default MuiFormControlLabel;
