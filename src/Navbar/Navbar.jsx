import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.logo}></div>
        <div className={styles.navLink}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/shop">Cart</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
