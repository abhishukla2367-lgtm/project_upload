import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsOfService from './pages/TermsOfService'; 
import './App.css'; 

// --- Import your logo image here ---
// Assuming your logo is named 'logo.png' and is in the src/assets folder
import logo from './assets/salon_logo.jpg'; 
// If it's in the public folder, you might use: const logo = '/logo.png';

// Updated Header component with classNames and the logo
const Header = () => (
  <header>
    <div className="logo-container">
        {/* Added the <img> tag using the imported 'logo' variable */}
        <img src={logo} alt="Vintage Cuts Logo" className="logo-icon" />
        <h1>Vintage Cuts</h1>
    </div>
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
    <div className="auth-buttons">
        <Link to="/signin" className="sign-in-link">Sign In</Link>
        <Link to="/signup" className="sign-up-button">Sign Up</Link>
    </div>
  </header>
);

// Assuming you have a basic Footer component with links
const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} All rights reserved. Vintage Cuts</p>
    <nav>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
    </nav>
  </footer>
);

function App() {
  return (
    <Router>
      {/* Header and Footer are outside of Routes so they appear on every page */}
      <Header />
      <main>
        {/* Define which component renders for which path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
