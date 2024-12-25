import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { CurrentUserContext } from '../context';
import styles from './Cart.module.css';
function Cartpage() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {currentUser.map((info) => {
          return (
            <div key={info.id}>
              {info.title}
              {info.price}X{info.number}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cartpage;
