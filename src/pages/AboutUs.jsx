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

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Story</h2>
        <p>
          Founded in 2010, Vintage Cuts began as a small neighborhood barber shop with a passion for classic grooming. 
          Over the years, we’ve grown into a trusted destination for clients seeking both traditional and contemporary styles, while keeping our welcoming, personal touch intact.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Team</h2>
        <p>
          Our team of skilled barbers and stylists bring years of experience, creativity, and dedication to every appointment. 
          Each member of our team is trained in the latest trends while honoring the art of classic barbering.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Philosophy</h2>
        <p>
          At Vintage Cuts, we believe that a haircut is more than just a style – it’s an experience. 
          We focus on attention to detail, personalized consultations, and creating an atmosphere where clients feel comfortable, confident, and inspired.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subHeading}>Why Choose Us</h2>
        <ul className={styles.list}>
          <li>Expert barbers trained in both classic and modern techniques</li>
          <li>High-quality grooming products for lasting results</li>
          <li>Relaxing, stylish environment designed for comfort</li>
          <li>Personalized approach tailored to each client’s needs</li>
          <li>Commitment to timeless style and attention to detail</li>
        </ul>
      </section>
    </main>
  );
}

export default AboutUs;
