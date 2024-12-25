import DataFetching from '../dataFetching';
import Card from '../Card/Card';
import Cartpage from '../Cart/Cart';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import styles from './ShowCard.module.css';
import { useState } from 'react';
import { CurrentUserContext } from '../context';
function ShowCard() {
  const [clickCardName, setClickCardName] = useState([]);
  const { data, error, loading } = DataFetching();

  if (loading) return <LoadingScreen />;

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.container}>
        <h1>All Category</h1>
        <div className={styles.containerCard}>
          {data.map((info) => {
            return (
              <Card
                key={info.id}
                info={info}
                clickCart={(e) => {
                  let theId = e.currentTarget.id;

                  if (clickCardName.some((findInfo) => findInfo.id === theId)) {
                    setClickCardName(
                      clickCardName.map((infoCard) => {
                        if (infoCard.id === theId) {
                          return { ...infoCard, number: infoCard.number + 1 };
                        } else {
                          return infoCard;
                        }
                      })
                    );
                  } else {
                    setClickCardName([
                      ...clickCardName,
                      {
                        id: theId,
                        title: info.title,
                        price: info.price,
                        number: 1,
                      },
                    ]);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
      <CurrentUserContext.Provider value={clickCardName}>
        <Cartpage />
      </CurrentUserContext.Provider>
    </>
  );
}
export default ShowCard;
