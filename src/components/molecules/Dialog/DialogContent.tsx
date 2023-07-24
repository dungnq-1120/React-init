import type { DialogContentProps as MuiDialogContentProps } from "@mui/material/DialogContent";
import MuiDialogContent from "@mui/material/DialogContent";

export type DialogContentProps = MuiDialogContentProps;

function DialogContent({ sx, ...rest }: DialogContentProps) {
  return (
    <MuiDialogContent
      sx={{
        p: 3,
        ...(Array.isArray(sx) ? sx : [sx]),
      }}
      dividers
      {...rest}
    />
  );
}

export default DialogContent;
