
import { useEffect, useState } from 'react';
import Item from '@/components/Item/Item';
import { Book } from '@/type/books';
import axios from 'axios';
import { useRouter } from 'next/router';
import PageTemplate from '@/components/PageTemplate/PageTemplate';


const ItemPage = () => {
    const [book, setBook] = useState<Book | null>(null);

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


  return (
    <PageTemplate>
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
  );
};

export default ItemPage;