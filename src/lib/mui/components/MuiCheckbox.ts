import type { CSSInterpolation, ThemeOptions } from "@mui/material/styles";

/**
 * Default Checkbox MUI style: https://github.com/mui/material-ui/blob/v5.10.15/packages/mui-material/src/Checkbox/Checkbox.js
 */

const MuiCheckbox: NonNullable<ThemeOptions["components"]>["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const { size } = ownerState;

      const baseStyles: CSSInterpolation = {};

      const baseSvgIconStyles: CSSInterpolation = {};

      const withSizeStyles: CSSInterpolation = {
        ...(size === "small" && {
          padding: 10,
        }),
        ...(size === "medium" && {
          padding: 10.5,
        }),
        ...(size === "large" && {
          padding: 11,
        }),
      };

      const svgIconWithSizeStyles: CSSInterpolation = {
        ...(size === "small" && {
          fontSize: theme.typography.pxToRem(12),
        }),
        ...(size === "medium" && {
          fontSize: theme.typography.pxToRem(15),
        }),
        ...(size === "large" && {
          fontSize: theme.typography.pxToRem(18),
        }),
      };

      return {
        ...baseStyles,
        ...withSizeStyles,

        "& .MuiSvgIcon-root": {
          ...baseSvgIconStyles,
          ...svgIconWithSizeStyles,
        },
      };
    },
  },
};

export default MuiCheckbox;
