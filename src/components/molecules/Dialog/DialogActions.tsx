import MuiDialogActions from "@mui/material/DialogActions";
import type { DialogActionsProps as MuiDialogActionsProps } from "@mui/material/DialogActions";

export type DialogActionsProps = MuiDialogActionsProps;

function DialogActions({ sx, ...rest }: DialogActionsProps) {
  return (
    <MuiDialogActions
      sx={{
        p: 2,
        ...(Array.isArray(sx) ? sx : [sx]),
      }}
      {...rest}
    />
  );
}

export default DialogActions;
