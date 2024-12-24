import DataFetching from '../dataFetching';
import Card from '../Card/Card';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import styles from './ShowCard.module.css';
import { useState } from 'react';

function ShowCard() {
  const [clickCardName, setClickCardName] = useState([]);
  const { data, error, loading } = DataFetching();

  function cardClick(e) {
    let theId = e.currentTarget.id;
    if (clickCardName.includes(theId)) {
      setClickCardName([]);
    } else {
      setClickCardName([...clickCardName, theId]);
    }
  }

  if (loading) return <LoadingScreen />;

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.container}>
        <h1>All Category</h1>
        <div className={styles.containerCard}>
          {data.map((info) => {
            return <Card key={info.id} info={info} />;
          })}
        </div>
      </div>
    </>
  );
}
export default ShowCard;
