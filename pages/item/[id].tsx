
import { useEffect, useState } from 'react';
import Item from '@/components/Item/Item';
import { Book } from '@/type/books';
import axios from 'axios';
import { useRouter } from 'next/router';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import Modal from '@/components/Modal/Modal';
import cookie from "js-cookie";



const ItemPage = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);

    // const jwt = cookie.get("book_app_jwt");

    const router = useRouter();

    const fetchBook = async () => {
     const fetchedBook = await axios.get(`${process.env.SERVER_URL}/books/${router.query.id}`
     );

     console.log(fetchedBook.data.book);
     setBook(fetchedBook.data.book);
    };
   

    useEffect(() => {
        router.query.id && fetchBook();
    }, [router.query.id]);


    const handleSignOut = () => {
      cookie.remove("book_app_jwt"); // Ištriname JWT slapuką
      router.push("/login"); // Nukreipiame vartotoją į prisijungimo puslapį
    }


  return (
    <div>
    <PageTemplate onSignOutClick={() => setModalOpen(true)}>
   
    <div>
        {book && (
        <Item
        id={book.id}
        title={book.title}
        imgUrl={book.imgUrl}
        author={book.author}
        />
        )}
    </div>
   
     </PageTemplate>
     {/* Modal, kuris pasirodys, kai vartotojas bandys atsijungti */}
     {isModalOpen && (
        <Modal
          text="Do you really want to sign out?"
          onConfirm={() => {
            handleSignOut();  // Patvirtinus, atjungiame vartotoją
            setModalOpen(false);
          }}
          onCancel={() => setModalOpen(false)}  // Jei paspaudžia "No", modal užsidaro
        />
      )}
    
    
     </div>

    
  );
};

export default ItemPage;