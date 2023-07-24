import MuiDialogActions from "@mui/material/DialogActions";
import type { DialogActionsProps as MuiDialogActionsProps } from "@mui/material/DialogActions";

export type ModalActionsProps = Pick<MuiDialogActionsProps, "children">;

function ModalActions(props: ModalActionsProps) {
  return (
    <MuiDialogActions
      sx={{
        p: 2,
      }}
      {...props}
    />
  );
}

export default ModalActions;
