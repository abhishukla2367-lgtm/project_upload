import React from 'react';
import styles from './LegalPage.module.css';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className={styles.legalContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <p className={styles.lastUpdated}>
        Last Updated: {currentDate}
      </p>

      <section className={styles.section}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you create an
          account, such as your name and email address. We also collect technical
          data like your IP address to ensure site security.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. How We Use Your Information</h2>
        <p>
          Your data is used to manage your account, provide grooming services,
          and communicate updates about your appointments. We do not sell your
          personal information to third parties.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Data Security</h2>
        <p>
          We implement industry-standard encryption to protect your personal
          data from unauthorised access. However, no method of transmission over
          the internet is 100% secure.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information at any time by contacting us through your account
          settings.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
