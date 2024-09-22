
import React from 'react'
import styles from "./styles.module.css"

type FooterProps = {
  copyringTitle: string;
};

const Footer = ({ copyringTitle }: FooterProps) => {
  return (
    <div className={styles.footer}>{copyringTitle}</div>
  )
}

export default Footer;