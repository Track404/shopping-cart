/* eslint-disable react/prop-types */
import styles from './CartCard.module.css';

function CartCard({ info, removeItem, addItem, substractItem }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftCard}>
          <img src={info.image} alt="product image" />
          <h2>{info.title}</h2>
        </div>
        <div className={styles.numberCard}>
          <button id={info.id} onClick={substractItem}>
            -
          </button>
          <h2>{info.number}</h2>
          <button id={info.id} onClick={addItem}>
            +
          </button>
        </div>
        <div className={styles.cardInfo}>
          <h3>{info.price} $</h3>
        </div>
        <button className={styles.removeButton} onClick={removeItem}>
          Remove
        </button>
      </div>
    </>
  );
}

export default CartCard;
