import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import salonLogo from './images/salon_logo.jpg'; 
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar logoSrc={salonLogo} salonName="Vintage Cuts" />
      
      <main className="main-content">
        <section id="home" className="hero-section">
          <h1>Welcome to Vintage Cuts</h1>
          <p>Style, sophistication, and service tailored just for you.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
