import React from 'react';
import './App.css'; 
import Footer from './components/Footer'; // Footer component remains separate
import logo from './assets/salon_logo.jpg'; // Import the logo image directly

const App = () => {
  return (
    <div className="App">
      
      {/* Navbar structure moved inline into App.jsx */}
      <header className="navbar-header">
        <nav className="navbar-nav">
          <img src={logo} alt="Vintage Cuts Logo" className="navbar-logo-img" />
          <h1 className="navbar-title">Vintage Cuts</h1>
          <div className="navbar-buttons">
            <button className="navbar-signin">Sign In</button>
            <button className="navbar-signup">Sign Up</button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <h2>Welcome to Vintage Cuts</h2>
        <p>Style, sophistication, and service tailored just for you.</p>
      </main>

      <Footer />
    </div>
  );
};

export default App;
