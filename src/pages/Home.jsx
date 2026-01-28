import React from 'react';
import styles from './Home.module.css'; // Make sure this import is correct

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Welcome to Vintage Cuts</h1>
      <p className={styles.subtitle}>Classic style for the modern gentleman.</p>
    </div>
  );
};

export default Home;
