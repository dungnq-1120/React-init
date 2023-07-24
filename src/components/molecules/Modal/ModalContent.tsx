import type { DialogContentProps as MuiDialogContentProps } from "@mui/material/DialogContent";
import MuiDialogContent from "@mui/material/DialogContent";

export type ModalContentProps = Pick<MuiDialogContentProps, "children">;

function ModalContent(props: ModalContentProps) {
  return (
    <MuiDialogContent
      sx={{
        p: 3,
      }}
      dividers
      {...props}
    />
  );
}

export default ModalContent;
