
import React, { useState } from 'react';
import styles from "./styles.module.css";
import Button from '../Button/Button';
import cookie from "js-cookie";
import axios from 'axios';
import { useRouter } from "next/router";


const CreateItemForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const router = useRouter();

    const jwt = cookie.get(process.env.JWT_KEY as string);

    const addBook = async () => {
        try {
    const body = {
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
        year: year,
        imgUrl: imgUrl,
    };
    
    const headers = {
        authorization: jwt,
       };

       const response = await axios.post(`${process.env.SERVER_URL}/books`,body,{headers,}
       );
       if (response.status === 201) {
        router.push("/");
       }
    } catch (err) {
       console.log(err)
    }

    };

  return (
    <div className={styles.main}>

        <input value={title} 
        placeholder='title' 
        type="text"
        onChange={(e) => {
            setTitle(e.target.value);
        }} 
        />
         <input value={author} 
        placeholder='author' 
        type="text"
        onChange={(e) => {
            setAuthor(e.target.value);
        }} 
        />
         <input value={publisher} 
        placeholder='publisher' 
        type="text"
        onChange={(e) => {
            setPublisher(e.target.value);
        }} 
        />
         <input value={genre} 
        placeholder='genre' 
        type="text"
        onChange={(e) => {
            setGenre(e.target.value);
        }} 
        />
         <input value={year} 
        placeholder='year' 
        type="text"
        onChange={(e) => {
            setYear(e.target.value);
        }} 
        />
         <input value={imgUrl} 
        placeholder='imgUrl' 
        type="text"
        onChange={(e) => {
            setImgUrl(e.target.value);
        }} 
        />
        <Button isLoading={false}
        title="Add book"
        onClick={() => {
         addBook();
        }}
        />

    </div>
  );
};

export default CreateItemForm;