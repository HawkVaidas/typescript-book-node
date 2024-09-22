

import styles from "./styles.module.css";
import Button from '../Button/Button';
import { useRouter } from "next/router";
import axios from 'axios';
import cookie from "js-cookie";

type ItemProps = {
    id: string;
    imgUrl: string;
    title: string;
    author: string;
}

const Item = ({ id, imgUrl, title, author}:ItemProps) => {

  const router = useRouter();

  const jwt = cookie.get(process.env.JWT_KEY as string);

  const deleteBook = async () => {
      try {
  
  
  const headers = {
      authorization: jwt,
     };

     const response = await axios.delete(`${process.env.SERVER_URL}/books/${id}`,{headers,}
     );
     if (response.status === 200) {
      router.push("/");
     }
  } catch (err) {
     console.log(err);
  }

  };

  return (
    <div className={styles.main}>
        <div className={styles.imgWrapper}>
            <img className={styles.img}src={imgUrl}/>
        </div>
        <div className={styles.itemInfo}>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <Button title="Delete book"
              onClick={() => deleteBook()}
              isLoading={false}
              type="DANGER"
              />
        </div>
    </div>
  );
};

export default Item;