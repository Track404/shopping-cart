import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import styles from './Shoppage.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Shoppage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const url = `https://dummyjson.com/products/category-list`;
  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);
  if (loading)
    return (
      <>
        <LoadingScreen />
      </>
    );

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div className={styles.container}></div>
      {isActive ? (
        <>
          <div className={styles.containerYes}>
            <div className={styles.containerCategoryShow}>
              <Link to={'/shop'}>All Category</Link>
              {data.map((info) => {
                return (
                  <Link key={info} to={`${info}`}>
                    {info.replace('-', ' ')}
                  </Link>
                );
              })}
            </div>
            <button
              className={styles.buttonCategory}
              onClick={() => {
                setIsActive(false);
              }}
            >
              <KeyboardArrowUpIcon />
            </button>
          </div>
        </>
      ) : (
        <div
          className={styles.containerCategory}
          onClick={() => {
            setIsActive(true);
          }}
        >
          <h2>Show More Category</h2>
          <button className={styles.buttonCategoryShow}>
            <KeyboardArrowDownIcon />
          </button>
        </div>
      )}

      <Outlet />
    </>
  );
}
export default Shoppage;
