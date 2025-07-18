import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>HYUNDAI</h2>
          <p>© 2025 HYUNDAI.</p>
        </div>

        <div className="footer-contact">
          <div>
            <FaMapMarkerAlt /> <strong>Office</strong><br />
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </div>
          <div>
            <FaEnvelope /> <strong>Email</strong><br />
            info@example.io
          </div>
          <div>
            <FaPhone /> <strong>Phone</strong><br />
            +(378) 555-0108
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>WHAT WE DO</h4>
            <ul>
              <li>Intercity Rides</li>
              <li>24/7 Road Assistant</li>
              <li>Chauffeur Services</li>
              <li>Long-Term Leasing</li>
              <li>Airport Transfers</li>
              <li>Business Travel Packages</li>
            </ul>
          </div>

          <div>
            <h4>HOME</h4>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Car Fleet</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h4>RESOURCES</h4>
            <ul>
              <li>Reviews</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cancellation Policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Designed by <a href="#">Crompton</a>. Powered by <a href="#">Life</a>.</p>
        <div className="social-links">
          <button>Facebook</button>
          <button>Instagram</button>
          <button>Twitter</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
