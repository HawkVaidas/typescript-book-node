
import { FC } from 'react'
import styles from './styles.module.css';
import { LinkProps } from '../../types/link';
import Link from 'next/link';
import { useRouter } from "next/router";
import cookie from "js-cookie";

type HeaderProps = {
  // logo: string | number;
  isUserLoggedIn: boolean;
  // links: LinkProps[];
  // logOut: () => void;
}

const Header: FC<HeaderProps> = ({ isUserLoggedIn }) => {
  const router = useRouter();

  const singOutUser = () => {
    cookie.remove(process.env.JWT_KEY as string);
    router.push("/login");
  };
 
  return (
    <div className={styles.header}>
       <Link href="/"className={styles.logo}>Books Story
       </Link>
       {isUserLoggedIn && (
      <div className={styles.linksWrapper}>
        <ul>
              <li>
                <Link href="/createItem">Create Book</Link>
              </li>
        </ul>
        <button onClick={singOutUser}>Sing out</button>
      </div>
      )}
    </div>
  )
}

export default Header;