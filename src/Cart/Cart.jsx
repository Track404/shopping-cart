import { useContext, useState } from 'react';
import { CurrentUserContext } from '../CreateContext';
import CartCard from '../CartCard/CartCard';
import styles from './Cart.module.css';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
function Cartpage() {
  const { clickCardName, setClickCardName } = useContext(CurrentUserContext);
  const [open, setOpen] = useState(false);
  const Sum = () => {
    let sum = 0;
    if (clickCardName.length > 0) {
      sum = clickCardName.reduce((acc, current) => {
        return acc + current.price * current.number;
      }, 0);
    }

    return (
      <>
        <div className={styles.sum}>
          <h2>Total</h2>
          <div>{Math.round(sum * 100) / 100} $</div>
        </div>
      </>
    );
  };

  return (
    <>
      <Collapse in={open}>
        <Alert className={styles.alert} variant="filled" severity="success">
          Confirm Checkout
        </Alert>
      </Collapse>
      <div className={styles.board}>
        <p>item</p>
        <p>number</p>
        <p>price</p>
        <p></p>
      </div>

      {clickCardName.length > 0 ? (
        <div className={styles.container}>
          {clickCardName.map((info) => {
            return (
              <CartCard
                key={info.id}
                info={info}
                addItem={() => {
                  setClickCardName(
                    clickCardName.map((infoCard) => {
                      if (infoCard.id === info.id) {
                        return { ...infoCard, number: infoCard.number + 1 };
                      } else {
                        return infoCard;
                      }
                    })
                  );
                }}
                substractItem={() => {
                  if (info.number > 1) {
                    setClickCardName(
                      clickCardName.map((infoCard) => {
                        if (infoCard.id === info.id) {
                          return { ...infoCard, number: infoCard.number - 1 };
                        } else {
                          return infoCard;
                        }
                      })
                    );
                  } else {
                    setClickCardName(
                      clickCardName.filter((a) => a.id !== info.id)
                    );
                  }
                }}
                removeItem={() => {
                  setClickCardName(
                    clickCardName.filter((a) => a.id !== info.id)
                  );
                }}
              />
            );
          })}
        </div>
      ) : (
        <h2 className={styles.noItem}>No product in cart</h2>
      )}

      <div className={styles.checkoutContainer}>
        <Sum />

        <button
          onClick={() => {
            setOpen(true);
            setTimeout(() => {
              setOpen(false);
            }, 3000);
            setClickCardName([]);
          }}
        >
          Checkout
        </button>
        <Link to={'/shop'}>Keep Shopping</Link>
      </div>
    </>
  );
}

export default Cartpage;
