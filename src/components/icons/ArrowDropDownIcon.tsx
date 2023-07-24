import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const ArrowDropDownIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path fill="currentColor" d="m7 10 5 5 5-5H7Z" />
  </SvgIcon>
);

export default ArrowDropDownIcon;
