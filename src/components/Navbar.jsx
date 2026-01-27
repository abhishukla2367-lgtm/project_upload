import React from 'react';
import './Navbar.css';

const Navbar = ({ logoSrc, salonName }) => {
  return (
    <header className="navbar"> {/* Using <header> as in your first snippet for better HTML semantics */}
      <div className="logo-container">
        <img src={logoSrc} alt={`${salonName} Logo`} className="salon-logo" />
        <span className="salon-name">{salonName}</span>
      </div>
      <div>
              <button className="sign-in">Sign In</button>
              <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
