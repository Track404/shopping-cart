import styles from './Card.module.css';

function Card(info) {
  return (
    <>
      <div className={styles.card}>
        <img src={info.info.image} alt="product image" />
        <h1>{info.info.title}</h1>
        <h2>{info.info.price}$</h2>
      </div>
    </>
  );
}

export default Card;
