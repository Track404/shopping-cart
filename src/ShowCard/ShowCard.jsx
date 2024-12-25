import DataFetching from '../dataFetching';
import Card from '../Card/Card';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import styles from './ShowCard.module.css';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { CurrentUserContext } from '../CreateContext';
function ShowCard() {
  const category = useParams();
  const { clickCardName, setClickCardName } = useContext(CurrentUserContext);

  const { data, error, loading } = DataFetching(category);

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
                        image: info.thumbnail,
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
    </>
  );
}
export default ShowCard;
