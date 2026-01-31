import React from 'react';
import styles from './LegalPage.module.css';

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className={styles.legalContainer}>
      <h1 className={styles.title}>Terms of Service</h1>

      <p className={styles.lastUpdated}>
        Last Updated: {currentDate}
      </p>

      <section className={styles.section}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing Vintage Cuts, you agree to be bound by these terms. If you
          do not agree, please do not use our services.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Appointment & Cancellation</h2>
        <p>
          Appointments must be scheduled through our booking system. We require
          at least 24 hours&apos; notice for cancellations to avoid potential fees.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. User Conduct</h2>
        <p>
          Users must provide accurate information and refrain from any behavior
          that disrupts our services or harasses staff and other clients.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Limitation of Liability</h2>
        <p>
          Vintage Cuts is provided &quot;as is.&quot; We are not liable for indirect
          damages arising from your use of the website or our grooming services.
        </p>
      </section>
    </main>
  );
};

export default TermsOfService;
