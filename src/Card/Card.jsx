import styles from './Card.module.css';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Card(info) {
  return (
    <>
      <div className={styles.card}>
        <img src={info.info.thumbnail} alt="product image" />
        <div className={styles.cardInfo}>
          <h2>{info.info.title}</h2>

          <Rating
            name="text-feedback"
            value={info.info.rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />

          <h3>{info.info.price} $</h3>
        </div>

        <button>Add To Cart</button>
      </div>
    </>
  );
}

export default Card;
