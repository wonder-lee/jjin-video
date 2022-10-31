import { Button, Modal, Text, Row, Checkbox } from "@nextui-org/react";

interface ModalCustomProps {
  visible: boolean;
  closeHandler?: () => void;
  children?: React.ReactNode;
}

const ModalCustom = ({ visible, closeHandler, children }: ModalCustomProps) => {
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      {children}
    </Modal>
  );
};

export default ModalCustom;
