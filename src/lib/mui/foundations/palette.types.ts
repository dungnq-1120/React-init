/**
 * Reference: https://mui.com/material-ui/customization/palette/#adding-new-colors
 */
declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette {}

  // Allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions {}
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ButtonPropsColorOverrides {}
}

export {};
