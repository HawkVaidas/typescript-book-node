
import { useEffect, useState} from 'react'
// import { LinkProps } from '@/types/link';
import Modal from '@/components/Modal/Modal';
import axios from 'axios';
import cookie from "js-cookie";
import CardsWrapper from '@/components/CardsWrapper/CardsWrapper';
import { Book } from "@/type/books"
import { useRouter } from 'next/router';
import PageTemplate from '@/components/PageTemplate/PageTemplate';


export default function Home () {

  const router = useRouter();
  // const [links] = useState<LinkProps[]> ([
  //   {title: "About", href: "#"},
  //   {title: "Portfolio", href: "#"},
  //   {title: "Contacts", href: "#"},
  // ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const userId = cookie.get("user_id");

  const jwt = cookie.get("book_app_jwt");

//   const logOut = () => {
//     setModalOpen(true);
//  };


 

  const fetchBooks = async () => {
     try {
      const headers = {
        authorization: jwt,
       };
    const response = await axios.get(`${process.env.SERVER_URL}/books/user`,{headers,}
    );
    setBooks(response.data.book);
    console.log(response.data.book);
     } catch (err) {
      console.log(err)
     }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login")
    }
   
    fetchBooks();
  }, []);


  return (
    <div>
      <PageTemplate>
      <CardsWrapper books={books}/>
      </PageTemplate>
      {isModalOpen && (
      <Modal text="Do yuo really want to sing out?"
      onModalClose={() => {
        setModalOpen(false)
      }}
      />
      )}
    </div>
    
  );
}

