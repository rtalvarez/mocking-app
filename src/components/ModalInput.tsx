import { Modal } from '@bigcommerce/big-design';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose(output: number): void;
}

export const ModalInput: React.FC<Props> = ({ isOpen, onClose }) => {
  function onClick() {
    const output = Math.ceil(100 * Math.random());

    onClose(output);
  }

  return (
    <Modal
      actions={[
        {
          text: 'Submit',
          onClick,
        },
      ]}
      header="Some modal input"
      isOpen={isOpen}
    >
      Hello world
    </Modal>
  );
};
