import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Home.css";

import bgVideo from "../assets/carv.mp4"; // Use your actual video path

function Home() {
  // Booking form state
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [driverAgeConfirm, setDriverAgeConfirm] = useState(false);
  const [returnSameLoc, setReturnSameLoc] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost/project/Project/api/book.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          pickup_date: pickupDate,
          dropoff_date: dropoffDate,
          driver_age_confirm: driverAgeConfirm ? 1 : 0,
          return_same_loc: returnSameLoc ? 1 : 0,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage("Booking successful! Your booking ID: " + data.booking_id);
        setDestination("");
        setPickupDate("");
        setDropoffDate("");
        setDriverAgeConfirm(false);
        setReturnSameLoc(false);
      } else {
        setMessage(data.error || "Booking failed.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  // Fetch bookings on mount and after new booking
  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const response = await fetch("http://localhost/project/Project/api/book.php");
      const data = await response.json();
      if (data.success) {
        setBookings(data.bookings);
      }
    } catch (err) {
      // Optionally handle error
    }
    setLoadingBookings(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Update bookings after successful booking
  useEffect(() => {
    if (message && message.includes('Booking successful')) {
      fetchBookings();
    }
    // eslint-disable-next-line
  }, [message]);

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
          <form className="form-grid" onSubmit={handleBookingSubmit}>
            <div className="input-group">
              <label>Your Destination</label>
              <input
                type="text"
                placeholder="Add your location..."
                value={destination}
                onChange={e => setDestination(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Pick-up Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={e => setPickupDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Drop-off Date</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={e => setDropoffDate(e.target.value)}
                required
              />
            </div>
            <button className="book-btn" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book A Car ↗"}
            </button>
          </form>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={driverAgeConfirm}
                onChange={e => setDriverAgeConfirm(e.target.checked)}
              /> Drivers age between 25 - 75.
            </label>
            <label>
              <input
                type="checkbox"
                checked={returnSameLoc}
                onChange={e => setReturnSameLoc(e.target.checked)}
              /> Return car to a same location.
            </label>
          </div>
          {message && <div style={{ marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>{message}</div>}
        </div>

        {/* Bookings Table */}
        <div style={{ marginTop: 40 }}>
          <h2>All Bookings</h2>
          {loadingBookings ? (
            <div>Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div>No bookings found.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Destination</th>
                    <th>Pick-up Date</th>
                    <th>Drop-off Date</th>
                    <th>Driver Age 25-75</th>
                    <th>Return Same Location</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id}>
                      <td>{b.id}</td>
                      <td>{b.destination}</td>
                      <td>{b.pickup_date}</td>
                      <td>{b.dropoff_date}</td>
                      <td>{b.driver_age_confirm === "1" || b.driver_age_confirm === 1 ? "Yes" : "No"}</td>
                      <td>{b.return_same_loc === "1" || b.return_same_loc === 1 ? "Yes" : "No"}</td>
                      <td>{b.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default Home;
