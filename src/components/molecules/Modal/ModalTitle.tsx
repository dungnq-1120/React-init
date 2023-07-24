import type { DialogTitleProps as MuiDialogTitleProps } from "@mui/material/DialogTitle";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { CloseIcon } from "~/components/icons";

type BaseProps = Pick<MuiDialogTitleProps, "children">;

export interface ModalTitleProps extends BaseProps {
  onClose?(): void;
}

function ModalTitle({ children, onClose }: ModalTitleProps) {
  return (
    <MuiDialogTitle
      sx={{
        px: 3,
        py: 2,
        lineHeight: 1.5,
      }}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          <CloseIcon sx={{ fontSize: 24 }} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
}

export default ModalTitle;
