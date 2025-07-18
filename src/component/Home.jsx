import React from "react";
import Header from "./Header";
import "./Home.css";

import bgVideo from "../assets/carv.mp4"; // Use your actual video path

function Home() {
  return (
    <div className="home-section">
        
      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  

      {/* Hero Content */}
      <div className="hero-section">
        <h1>Life is a journey,Enjoy the ride!</h1>
        <p>
          Discover the ease of car rentals designed to fit your lifestyle.
          Whether you're planning a quick city drive, a weekend getaway, or a
          long-term journey.
        </p>
        <div className="hero-buttons">
          <button className="book-btn">Booking Now ↗</button>
          
          <button className="see-btn">See All Cars ↗</button>
        </div>

        <div className="booking-form">
          <h2>Need to rent a luxury car ?</h2>
          <form className="form-grid">
            <div className="input-group">
              <label>Your Destination</label>
              <input type="text" placeholder="Add your location..." />
            </div>
            <div className="input-group">
              <label>Pick-up Date</label>
              <input type="date" />
            </div>
            <div className="input-group">
              <label>Drop-off Date</label>
              <input type="date" />
            </div>
            <button className="book-btn" type="submit">Book A Car ↗</button>
          </form>
          <div className="checkboxes">
            <label>
              <input type="checkbox" /> Drivers age between 25 - 75.
            </label>
            <label>
              <input type="checkbox" /> Return car to a same location.
            </label>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
