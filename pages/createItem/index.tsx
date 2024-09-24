
import { useState } from 'react';
import CreateItemForm from '@/components/CreateItemForm/CreateItemForm';
import PageTemplate from '@/components/PageTemplate/PageTemplate';
import React from 'react';
import Modal from '@/components/Modal/Modal';
import cookie from "js-cookie";
import { useRouter } from 'next/router';


const CreateItemPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // const jwt = cookie.get("book_app_jwt");

  const router = useRouter();

  const handleSignOut = () => {
    cookie.remove("book_app_jwt"); 
    router.push("/login");
  }
  return (
    <>
    <PageTemplate onSignOutClick={() => setModalOpen(true)}>
    <CreateItemForm/>
    </PageTemplate>
     {isModalOpen && (
      <Modal
        text="Do you really want to sign out?"
        onConfirm={() => {
          handleSignOut();  
          setModalOpen(false);
        }}
        onCancel={() => setModalOpen(false)}  
        />
    )}
     </>
  
    
    
    
     
  );
};

export default CreateItemPage;