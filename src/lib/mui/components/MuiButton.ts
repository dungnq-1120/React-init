// Import { buttonClasses } from "@mui/material/Button";
import type {
  ComponentsPropsList,
  CSSInterpolation,
  ThemeOptions,
} from "@mui/material/styles";

/**
 * Default Button MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Button/Button.js
 */

const commonIconStyles = ({ size }: ComponentsPropsList["MuiButton"]) => ({
  ...(size === "extra-small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 17,
    },
  }),
  ...(size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 18,
    },
  }),
  ...(size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 20,
    },
  }),
  ...(size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 22,
    },
  }),
});

const MuiButton: NonNullable<ThemeOptions["components"]>["MuiButton"] = {
  defaultProps: {
    disableElevation: false,
    variant: "contained",
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { size } = ownerState;

      const baseStyles: CSSInterpolation = {
        minWidth: "initial",
      };

      const withSizeStyles: CSSInterpolation = {
        ...(size === "extra-small" && {
          height: 20,
          padding: "0 8px",
          fontSize: theme.typography.pxToRem(12),
        }),
        ...(size === "small" && {
          height: 24,
        }),
        ...(size === "medium" && {
          height: 36,
        }),
        ...(size === "large" && {
          height: 40,
        }),
      };

      return {
        ...baseStyles,
        ...withSizeStyles,
      };
    },
    startIcon: ({ ownerState }) => ({
      marginRight: 5,
      ...commonIconStyles(ownerState),
    }),
    endIcon: ({ ownerState }) => ({
      marginLeft: 5,
      ...commonIconStyles(ownerState),
    }),
  },
};

export default MuiButton;
