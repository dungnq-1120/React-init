import type { ThemeOptions } from "@mui/material/styles";

/**
 * Default CssBaseline MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/CssBaseline/CssBaseline.js
 */

const scrollBar = {
  track: "#F7F7F7",
  thumb: "#B6B6B6",
  active: "#CCCCCC",
};

const MuiCssBaseline: NonNullable<
  ThemeOptions["components"]
>["MuiCssBaseline"] = {
  styleOverrides: {
    body: {
      letterSpacing: 0,

      /**
       * Custom Scrollbars - start
       */
      scrollbarColor: `${scrollBar.thumb} ${scrollBar.track}`,
      "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        backgroundColor: scrollBar.track,
        width: 10,
      },
      "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        borderRadius: 1,
        backgroundColor: scrollBar.thumb,
        minHeight: 20,

        "&:focus": {
          backgroundColor: scrollBar.active,
        },
        "&:active": {
          backgroundColor: scrollBar.active,
        },
        "&:hover": {
          backgroundColor: scrollBar.active,
        },
      },
      "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
        backgroundColor: scrollBar.track,
      },
      /**
       * Custom Scrollbars - end
       */
    },
  },
};

export default MuiCssBaseline;
