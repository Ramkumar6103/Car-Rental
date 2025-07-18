import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/auth');
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
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/auth">Login / Sign Up</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
