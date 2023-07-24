import type { FormEventHandler } from "react";

import Button from "~/components/atoms/Button";

import type { ModalProps } from "../Modal/Modal";
import Modal from "../Modal/Modal";
import ModalActions from "../Modal/ModalActions";
import type { ModalContentProps } from "../Modal/ModalContent";
import ModalContent from "../Modal/ModalContent";
import type { ModalTitleProps } from "../Modal/ModalTitle";
import ModalTitle from "../Modal/ModalTitle";

export type FormModalProps = {
  open: ModalProps["open"];
  onClose: ModalTitleProps["onClose"];
  size?: ModalProps["size"];
  title: ModalTitleProps["children"];
  children: ModalContentProps["children"];
  onSubmit?: FormEventHandler<HTMLFormElement>;
  /**
   * The text of cancel button
   * @default 'キャンセル'
   */
  closeText?: string;
  /**
   * The text of submit button
   * @default 'OK'
   */
  submitText?: string;
};

function FormModal({
  open,
  size,
  title,
  children,
  onSubmit,
  onClose,
  closeText = "キャンセル",
  submitText = "OK",
}: FormModalProps) {
  return (
    <Modal open={open} size={size}>
      <ModalTitle onClose={onClose}>{title}</ModalTitle>
      <form onSubmit={onSubmit}>
        <ModalContent>{children}</ModalContent>
        <ModalActions>
          <Button variant="outlined" onClick={onClose}>
            {closeText}
          </Button>
          <Button type="submit">{submitText}</Button>
        </ModalActions>
      </form>
    </Modal>
  );
}

export default FormModal;
