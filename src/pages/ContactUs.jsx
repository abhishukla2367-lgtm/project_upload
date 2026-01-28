import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <main className={styles.container}>
      <h1 className={styles.contactHeading}>Contact Us</h1>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" className={styles.inputField} />
        <input type="email" placeholder="Your Email" className={styles.inputField} />
        <textarea placeholder="Your Message" rows="4" className={styles.inputField}></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </main>
  );
}

export default ContactUs;
