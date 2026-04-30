import styles from './modal-overlay.module.css';

const ModalOverlay = ({ closeModal }) => (
  <div onClick={closeModal} className={styles.modalOverlay} />
);

export default ModalOverlay;
