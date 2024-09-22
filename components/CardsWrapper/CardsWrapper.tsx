

// import styles from "./styles.module.css";
// import { Book } from "@/type/books";
// import Card from "../Card/Card";

// type CardsWrapperProps = {
//    books: Book[];
// };

// const CardsWrapper = ({ books }: CardsWrapperProps) => {
//   return (
//     <div className={styles.main}>
//         {books.map((b) => {
//             return (
//             <Card
            
//             key={b.id} 
//             imgUrl={b.imgUrl}
//             title={b.title}
//             />
//             );
//         })}

//     </div>
//   );
// };

// export default CardsWrapper;


//===================================================================


import styles from "./styles.module.css";
import { Book } from "@/type/books";
import Card from "../Card/Card";

type CardsWrapperProps = {
   books: Book[];
};

const CardsWrapper = ({ books = [] }: CardsWrapperProps) => {  // numatytoji reikšmė knygoms
  return (
    <div className={styles.main}>
      {books.length > 0 ? ( // Patikrina, ar yra knygų
        books.map((b) => (
          <Card
            id={b.id}
            key={b.id}
            imgUrl={b.imgUrl}
            title={b.title}
            author={b.author}
          />
        ))
      ) : (
        <p>Neturima knygų</p> // Rodo pranešimą, kai nėra knygų
      )}
    </div>
  );
};

export default CardsWrapper;
