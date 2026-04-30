import { useState, useCallback, useEffect } from 'react';

import Modal from '../components/modal/modal.jsx';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

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
