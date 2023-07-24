import MuiCheckbox from "@mui/material/Checkbox";
import type { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

type BaseProps = Pick<
  MuiCheckboxProps,
  | "classes"
  | "size"
  | "disabled"
  | "checked"
  | "defaultChecked"
  | "sx"
  | "value"
  | "onChange"
  | "inputProps"
  | "inputRef"
>;

export interface CheckboxProps extends BaseProps {
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
}

function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}

export default Checkbox;
