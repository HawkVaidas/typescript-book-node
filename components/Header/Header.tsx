
import { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type HeaderProps = {
  isUserLoggedIn: boolean;
  onSignOutClick: () => void; // Pridedame funkciją, kuri bus perduota iš pagrindinio komponento
};

const Header: FC<HeaderProps> = ({ isUserLoggedIn, onSignOutClick }) => {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>Books Story</Link>
      {isUserLoggedIn && (
        <div className={styles.linksWrapper}>
          <ul>
            <li>
              <Link href="/createItem">Create Book</Link>
            </li>
          </ul>
          <button onClick={onSignOutClick}>Sign out</button> {/* Sign out mygtukas */}
        </div>
      )}
    </div>
  );
};

export default Header;
