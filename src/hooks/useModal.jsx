import { useState, useCallback } from 'react';

import Modal from '../components/modal/modal.jsx';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ModalWrapper = useCallback(
    ({ children, title, onClose }) =>
      isOpen ? (
        <Modal title={title} onClose={onClose ?? closeModal}>
          {children}
        </Modal>
      ) : null,
    [isOpen, closeModal]
  );

  return {
    openModal,
    closeModal,
    Modal: ModalWrapper,
    isOpen,
  };
};
