import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <main className={styles.container}>
      <h1 className={styles.aboutHeading}>About Vintage Cuts</h1>
      <p className={styles.missionStatement}>
        Vintage Cuts is dedicated to providing timeless style, sophistication, and personalized service. 
        We blend classic barbering techniques with modern trends to ensure every client leaves feeling confident and refined.
      </p>
    </main>
  );
}

export default AboutUs;
