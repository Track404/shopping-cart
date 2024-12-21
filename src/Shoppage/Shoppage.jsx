import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import styles from './Shoppage.module.css';
function Shoppage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Navbar />
      <div className={styles.containerCard}>
        {data.map((info) => {
          return <Card key={info.id} info={info} />;
        })}

        <div className="Container"></div>
        <div className="checkout"></div>
      </div>
    </>
  );
}
export default Shoppage;
