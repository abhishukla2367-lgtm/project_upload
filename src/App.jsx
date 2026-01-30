import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

import logo from './assets/salon_logo.jpg';
import './App.css';

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logo} alt="Vintage Cuts salon logo" className="logo" />
      <h1>Vintage Cuts</h1>
    </div>

    <nav className="main-nav">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/services">SERVICES</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>

    <div className="auth-buttons">
      <Link to="/login" className="login-link">LOGIN</Link>
      <Link to="/signup" className="signup-btn">SIGN UP</Link>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <div className="footer-content">

      <div className="footer-shortcuts">
        <h4>Quick Links</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>

      <div className="footer-legal">
        <h4>Legal</h4>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          📸 Instagram
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          📘 Facebook
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
          𝕏 X
        </a>
      </div>

    </div>

    <p className="footer-copy">
      &copy; {new Date().getFullYear()} Vintage Cuts. All rights reserved.
    </p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
