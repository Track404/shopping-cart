import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav>
        <div className={styles.logo}></div>
        <div className={styles.navLink}>
          <a href="">Home</a>
          <a href="">Shop</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
