import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

import logo from "./assets/salon_logo.jpg";
import bgImage from "./assets/salon_image.jpg";
import "./App.css";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
const Header = () => (
  <header className="app-header glass">
    <div className="logo-container">
      <img src={logo} alt="Vintage Cuts Logo" className="logo" />
      <span className="brand-name">Vintage Cuts</span>
    </div>

    <nav className="main-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
      <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
    </nav>

    <div className="auth-actions">
      <NavLink to="/login" className="login-link">Login</NavLink>
      <NavLink to="/signup" className="signup-btn">Sign Up</NavLink>
    </div>
  </header>
);
const Footer = () => (
  <footer className="app-footer glass">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <NavLink to="/privacy">Privacy Policy</NavLink>
        <NavLink to="/terms">Terms of Service</NavLink>
      </div>

      <div className="footer-section">
        <h4>Social</h4>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/" target="_blank" rel="noreferrer">X</a>
      </div>
    </div>
    <div className="footer-bottom">
      © 2026 Vintage Cuts. All rights reserved.
    </div>
  </footer>
);

const AppLayout = () => (
  <div
    className="app-wrapper"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    <Header />

    <main className="app-main">
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
);
const App = () => (
  <Router>
    <ScrollToTop />
    <AppLayout />
  </Router>
);

export default App;
