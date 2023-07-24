import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

type BaseProps = Pick<
  MuiButtonProps,
  | "classes"
  | "variant"
  | "children"
  | "disabled"
  | "sx"
  | "fullWidth"
  | "startIcon"
  | "endIcon"
  | "href"
  | "ref"
  | "id"
  | "onClick"
  | "type"
>;

export interface ButtonProps extends BaseProps {
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: "extra-small" | "small" | "medium" | "large";
  /**
   * The color of the component. It supports both default and custom theme colors.
   */
  color?: "primary" | "error" | "inherit";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  return <MuiButton ref={ref} {...props} />;
});

export default Button;
