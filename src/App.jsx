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
        <img src={logo} alt="Vintage Cuts Logo" className="logo" />
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
    <p>&copy; {new Date().getFullYear()} Vintage Cuts. All rights reserved.</p>
    <nav>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
    </nav>
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
