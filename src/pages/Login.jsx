import React from 'react';
import styles from './LogIn.module.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Login to Vintage Cuts</h1>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input type="email" id="email" placeholder="you@example.com" className={styles.inputField} required />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" id="password" placeholder="Password" className={styles.inputField} required />
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
      <p className={styles.footerText}>
        Don't have an account? <Link to="/signup" className={styles.link}>Sign Up</Link>
      </p>
    </main>
  );
}
export default Login;
