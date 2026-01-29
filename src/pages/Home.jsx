import React from 'react';
import styles from './Home.module.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentBox}>
        <p className={styles.subheading}>AUTHENTIC GROOMING</p>
        <h1 className={styles.mainHeading}>Experience Vintage Cuts</h1>
        <p className={styles.description}>
          Classic cuts, modern shaves, and a timeless atmosphere. Book an appointment with our expert barbers today.
        </p>
        <Link to="/services" className={styles.ctaButton}>BOOK NOW</Link>
      </div>
    </div>
  );
};

export default Home;
