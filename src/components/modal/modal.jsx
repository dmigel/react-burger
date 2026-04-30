import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';

import ModalOverlay from '@components/modal-overlay/modal-overlay.jsx';

import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose, title }) => {
  return createPortal(
    <>
      <ModalOverlay closeModal={onClose} />
      <div className={`${styles.modalWindow} p-10`}>
        {title ? (
          <h2 className={`text text_type_main-large ${styles.modalTitle}`}>
            <span>{title}</span>
            <CloseIcon onClick={onClose} type="primary" />
          </h2>
        ) : (
          <span className={styles.closeModal}>
            <CloseIcon onClick={onClose} type="primary" />
          </span>
        )}

        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
