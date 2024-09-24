

import { useEffect, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import axios from 'axios';
import cookie from "js-cookie";
import CardsWrapper from '@/components/CardsWrapper/CardsWrapper';
import { Book } from "@/type/books";
import { useRouter } from 'next/router';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export default function Home () {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const jwt = cookie.get("book_app_jwt");

  const fetchBooks = async () => {
    try {
      const headers = { authorization: jwt };
      const response = await axios.get(`${process.env.SERVER_URL}/books/user`, { headers });
      setBooks(response.data.book);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }
    fetchBooks();
  }, []);

  // Funkcija atsijungimui
  const handleSignOut = () => {
    cookie.remove("book_app_jwt"); // Ištriname JWT slapuką
    router.push("/login"); // Nukreipiame vartotoją į prisijungimo puslapį
  };

  return (
    <div>
      <PageTemplate onSignOutClick={() => setModalOpen(true)}> {/* Pridėtas onSignOutClick */}
        <CardsWrapper books={books} />
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
}
