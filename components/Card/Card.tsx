
import React from 'react'
import styles from "./styles.module.css";
import Link from 'next/link';

type CardProps = {
    id: string;
    imgUrl: string;
    title: string;
    author: string;
    
};

const Card = ({id, imgUrl, title, author}: CardProps) => {
  return (
    <Link href={`/item/${id}`} className={styles.main}>
         <img src={imgUrl}/>
         <h3>{title}</h3>
         <h5>{author}</h5>
    </Link>
  );
};

export default Card;