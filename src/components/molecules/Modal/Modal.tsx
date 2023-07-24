import MuiDialog, { dialogClasses as baseClasses } from "@mui/material/Dialog";
import type { DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";
import type { TransitionProps } from "@mui/material/transitions";
import type { ReactElement, Ref } from "react";
import { forwardRef } from "react";

type BaseProps = Pick<
  MuiDialogProps,
  "open" | "onClose" | "scroll" | "children" | "disableEscapeKeyDown"
>;

export type ModalSize = "medium" | "large";

export interface ModalProps extends BaseProps {
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: ModalSize;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: ReactElement },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} timeout={{ enter: 300, exit: 400 }} />;
});

const StyledModal = styled(MuiDialog, {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: ModalSize }>(({ size }) => ({
  [`& .${baseClasses.paper}`]: {
    maxWidth: {
      medium: "480px",
      large: "760px",
    }[size],
  },
}));

function Modal({ scroll = "paper", size = "medium", ...rest }: ModalProps) {
  return (
    <StyledModal
      fullWidth
      scroll={scroll}
      maxWidth={false}
      size={size}
      TransitionComponent={Transition}
      disableRestoreFocus
      {...rest}
    />
  );
}

export default Modal;
