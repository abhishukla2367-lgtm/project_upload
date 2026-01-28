import React from 'react';
import './Footer.css'; // Import the dedicated CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">©2026 All rights reserved. Vintage Cuts.</p>
      <div className="footer-links">
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
