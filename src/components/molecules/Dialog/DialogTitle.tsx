import type { DialogTitleProps as MuiDialogTitleProps } from "@mui/material/DialogTitle";
import MuiDialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { CloseIcon } from "~/components/icons";

type BaseProps = Pick<MuiDialogTitleProps, "sx" | "children">;

export interface DialogTitleProps extends BaseProps {
  onClose?(): void;
}

function DialogTitle({ children, sx, onClose }: DialogTitleProps) {
  return (
    <MuiDialogTitle
      sx={{
        px: 3,
        py: 2,
        lineHeight: 1.5,
        ...(Array.isArray(sx) ? sx : [sx]),
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

export default DialogTitle;
