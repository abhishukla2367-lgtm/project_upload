import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Account Created:', formData);
    // Add your signup logic here (e.g., API call)
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Join Vintage Cuts</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username" className={styles.label}>Full Name</label>
        <input 
          type="text" id="username" placeholder="John Doe" 
          className={styles.inputField} required onChange={handleChange} 
        />

        <label htmlFor="email" className={styles.label}>Email Address</label>
        <input 
          type="email" id="email" placeholder="you@example.com" 
          className={styles.inputField} required onChange={handleChange} 
        />
        
        <label htmlFor="password" className={styles.label}>Password</label>
        <input 
          type="password" id="password" placeholder="Min 8 characters" 
          className={styles.inputField} required onChange={handleChange} 
        />

        <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
        <input 
          type="password" id="confirmPassword" placeholder="Repeat password" 
          className={styles.inputField} required onChange={handleChange} 
        />
        
        <button type="submit" className={styles.submitButton}>Create Account</button>
      </form>
      <p className={styles.footerText}>
        Already have an account? <Link to="/signin" className={styles.link}>Sign In</Link>
      </p>
    </main>
  );
}

export default SignUp;
