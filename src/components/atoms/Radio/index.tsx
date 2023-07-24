import MuiRadio from "@mui/material/Radio";
import type { RadioProps as MuiRadioProps } from "@mui/material/Radio";

export type BaseProps = Pick<
  MuiRadioProps,
  | "classes"
  | "size"
  | "disabled"
  | "checked"
  | "defaultChecked"
  | "sx"
  | "value"
  | "onChange"
  | "inputProps"
  | "name"
  | "inputRef"
>;

export interface RadioProps extends BaseProps {
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
}

function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}

export default Radio;
