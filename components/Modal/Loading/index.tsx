import Modal from "react-modal";

import Load from "./loading.gif";

//STYLES
import styles from "./modalload.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
  },
};

interface ModalLoadingProps {
  loading: boolean;
}

const ModalLoading = ({ loading }: ModalLoadingProps) => {
  return (
    <Modal isOpen={loading} onRequestClose={() => {}} style={customStyles}>
      <div className={styles.container}>
        <img src={Load} alt="" width="180" height="180" />
      </div>
    </Modal>
  );
};

export default ModalLoading;
