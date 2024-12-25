import Card from '../Card/Card';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import styles from './ShowCategory.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ShowCategory() {
  const category = useParams();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://dummyjson.com/products/category/${category.category}`;
  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setData(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);
  if (loading) return <LoadingScreen />;

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.container}>
        <h1>{category.category.replace('-', ' ')}</h1>
        <div className={styles.containerCard}>
          {data.map((info) => {
            return (
              <Card
                key={info.id}
                info={info}
                clickCart={() => {
                  alert('bonjour');
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ShowCategory;
