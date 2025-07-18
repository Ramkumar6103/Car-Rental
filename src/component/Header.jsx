import React, { useState } from "react";
import "./Header.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">HYUNDAI</div>
      <nav className="nav-links">
        <a href="#fleet">Car Fleet</a>
        
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#contact us">Contact us</a>
        <Link to="/">Home</Link>
        <Link to="/auth">Login / Sign Up</Link>
  

       
      </nav>
    </header>
  );
}

export default Header;
