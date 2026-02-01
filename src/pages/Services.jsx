import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <main className={styles.container}>
      <h1 className={styles.servicesHeading}>Our Services</h1>
      <ul className={styles.servicesList}>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Classic Haircut</span> - Precision cuts with hot towel finish.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Beard Trim & Shape</span> - Expert grooming and shaping.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Luxury Shave</span> - Traditional straight razor shave experience.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Hair Coloring</span> - Modern color techniques, highlights, and balayage.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Facial Treatments</span> - Deep cleansing, hydration, and skin rejuvenation.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Hair Spa</span> - Nourishing hair therapy for shine and strength.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Scalp Treatment</span> - Anti-dandruff, soothing, and stimulating scalp care.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Hot Towel & Steam Therapy</span> - Relaxing treatment to rejuvenate skin and hair.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Children’s Haircuts</span> - Gentle and precise haircuts for kids.
        </li>
        <li className={styles.serviceItem}>
          <span className={styles.serviceName}>Eyebrow & Facial Hair Grooming</span> - Shape and style with care.
        </li>
      </ul>
    </main>
  );
}

export default Services;
