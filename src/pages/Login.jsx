import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LogIn.module.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // -------------------- LOGIN SUBMIT --------------------
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    alert(`Logged in as ${email}`);
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Welcome Back</h1>

        {/* -------------------- LOGIN FORM -------------------- */}
        <form
          className={styles.form}
          onSubmit={handleLoginSubmit}
          autoComplete="off"
        >
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              required
              autoComplete="new-email"
              placeholder=" "
            />
            <label>Email Address</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              autoComplete="new-password"
              placeholder=" "
            />
            <label>Password</label>

            <span
              className={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>

        <p className={styles.footerText}>
          Don&apos;t have an account?{' '}
          <Link to="/signup" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
