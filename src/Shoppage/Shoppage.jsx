import DataFetching from '../dataFetching';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import { OrbitProgress } from 'react-loading-indicators';
import styles from './Shoppage.module.css';

function Shoppage() {
  const { data, error, loading } = DataFetching();

  if (loading)
    return (
      <>
        <div>
          <Navbar />
          <div className={styles.loadingScreen}>
            <OrbitProgress
              variant="disc"
              dense
              color="#335ccb"
              size="large"
              text=""
              textColor=""
            />
          </div>
        </div>
      </>
    );

  if (error) return <p>A network error was encountered</p>;
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.containerCard}>
          {data.map((info) => {
            return <Card key={info.id} info={info} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Shoppage;
