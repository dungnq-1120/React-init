import common from "@mui/material/colors/common";
import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default palette: https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
 *
 * createPalette: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.js
 */

const palette: ThemeOptions["palette"] = {
  mode: "light",
  primary: {
    main: "#F09123",
    contrastText: common.white,
  },
  error: {
    main: "#D32F2F",
    contrastText: common.white,
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
  },

  // The colors used to style the action elements.
  action: {
    active: "rgba(0, 0, 0, 0.54)",
  },

  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
};

export default palette;
