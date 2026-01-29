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
      </ul>
    </main>
  );
}
export default Services;
