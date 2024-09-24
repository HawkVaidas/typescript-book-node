

import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
import { validateUser as validateUserApi } from '@/apiCalls/user';

type PageTemplateProps = {
  children: ReactNode;
  onSignOutClick: () => void; // Pridedame funkciją, kuri bus perduota iš pagrindinio komponento
};

const PageTemplate = ({ children, onSignOutClick }: PageTemplateProps) => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

  const validateUser = async () => {
    try {
      const response = await validateUserApi();
      if (response.status !== 200) {
        router.push("/login");
      }
      setUserLoggedIn(true);
    } catch (err) {
      router.push("/login");
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header isUserLoggedIn={isUserLoggedIn} onSignOutClick={onSignOutClick} /> {/* Perduodame funkciją */}
      <div className={styles.main}>{children}</div>
      <Footer copyringTitle="Copyring" />
    </div>
  );
};

export default PageTemplate;
