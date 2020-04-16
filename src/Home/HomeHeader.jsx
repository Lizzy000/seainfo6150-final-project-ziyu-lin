import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./HomeHeader.module.css";


const HomeHeader = props => {
  
  return (
    <header>
      <div>
        <nav className={styles.nav}>
          <img className={styles.pic} src="/images/girl.jpg" alt="avatar" />
          <ul>
            <li className={styles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.item}>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className={styles.item}>
              <Link to="/photo">Photo</Link>
            </li>
            <li className={styles.item}>
              <Link to="/comment">Comment</Link>
            </li>
          </ul>
        </nav>
      </div>
  </header>
    
  );
};

export default HomeHeader;

