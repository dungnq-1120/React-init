import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const DeleteIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="currentColor"
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z"
    />
  </SvgIcon>
);

export default DeleteIcon;
