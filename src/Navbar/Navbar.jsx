import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.logo}></div>
        <div className={styles.navLink}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">
            <LocalMallRoundedIcon color="black" fontSize="large" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
