import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import MuiTypography from "@mui/material/Typography";
import type { ElementType } from "react";

type BaseProps = Pick<
  MuiTypographyProps,
  | "sx"
  | "classes"
  | "align"
  | "noWrap"
  | "children"
  | "marginTop"
  | "marginBottom"
  | "marginY"
  | "color"
>;

type CustomizeVariant =
  | "heading18"
  | "heading16"
  | "heading14"
  | "heading12"
  | "text16"
  | "text14"
  | "text12"
  | "text8";

export interface TypographyProps extends BaseProps {
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?: MuiTypographyProps["variant"] | CustomizeVariant;
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: ElementType;
}

function Typography(props: TypographyProps) {
  return <MuiTypography {...props} />;
}

export default Typography;
