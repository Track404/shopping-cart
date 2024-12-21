import Navbar from '../Navbar/Navbar';
import styles from './Homepage.module.css';
function Homepage() {
  return (
    <>
      <Navbar />
      <div className={styles.homepageBackground}>
        <div className={styles.titleHomepage}>
          <h1>The Start of a new journey</h1>
          <h2>The new products are now available in the shop !</h2>
        </div>

        <button>Shop Now</button>
      </div>
    </>
  );
}
export default Homepage;
