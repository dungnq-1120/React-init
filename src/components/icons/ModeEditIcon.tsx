import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const ModeEditIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M3 17.252v3.75h3.75l11.06-11.06-3.75-3.75L3 17.252Zm17.71-10.21a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
    />
  </SvgIcon>
);

export default ModeEditIcon;
