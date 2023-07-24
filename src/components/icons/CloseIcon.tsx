import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

const CloseIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fill="currentColor"
      fillOpacity=".6"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
    />
  </SvgIcon>
);

export default CloseIcon;
