import React from 'react';
import './Navbar.css'; // Import the dedicated CSS file

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <h1 className="navbar-logo">Vintage Cuts</h1>
        <div className="navbar-buttons">
          <button className="navbar-signin">Sign In</button>
          <button className="navbar-signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
