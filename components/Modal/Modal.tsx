
import React from 'react'
import styles from "./styles.module.css"

type ModalProps = {
    text: string;
    onModalClose: () => void;
}

const Modal = ({text, onModalClose}: ModalProps) => {
  return (
    <div className={styles.modal}>{text}
    <button onClick={() => onModalClose()}>X</button>
    </div>
  )
}

export default Modal;