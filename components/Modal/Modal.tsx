


import React from 'react';
import styles from "./styles.module.css";

type ModalProps = {
  text: string;
  onConfirm: () => void; // Funkcija, kuri bus iškviečiama paspaudus "Yes"
  onCancel: () => void;  // Funkcija, kuri bus iškviečiama paspaudus "No"
};

const Modal = ({ text, onConfirm, onCancel }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <p>{text}</p>
      <div className={styles.btnWrapper}>
        <button onClick={onConfirm}>Yes</button> {/* Patvirtinimo mygtukas */}
        <button onClick={onCancel}>No</button>  {/* Atšaukimo mygtukas */}
      </div>
    </div>
  );
};

export default Modal;
