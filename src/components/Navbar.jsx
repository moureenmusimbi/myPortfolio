import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <h1>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '90px',
            height: '90px',
            objectFit: 'contain'
          }}
        />
      </h1>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>
    </div>
  );
};

export default Navbar;
