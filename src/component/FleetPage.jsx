import React from "react";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    name: "E-Tron GT",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=600",
    type: "Sedan",
    price: 160,
    currency: "USD",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "S5 Sportback",
    image: "https://images.pexels.com/photos/170782/pexels-photo-170782.jpeg?auto=compress&w=600",
    type: "Sports",
    price: 145,
    currency: "USD",
    seats: 5,
    doors: 3,
    transmission: "Manual",
    fuel: "Diesel"
  },
  {
    name: "Lancer Cedia",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&w=600",
    type: "Luxury",
    price: 110,
    currency: "USD",
    seats: 4,
    doors: 2,
    transmission: "Auto",
    fuel: "Diesel"
  }
];

const FleetPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#f7f8fa", minHeight: "100vh", padding: "40px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 30 }}>
          <div style={{ color: "#222", fontSize: 16, fontWeight: 500, letterSpacing: 1 }}>CHOOSE YOUR CAR</div>
          <h1 style={{ fontSize: 56, fontWeight: 700, margin: 0 }}>Our Vehicle Fleet</h1>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 32 }}>
          {cars.map((car, idx) => (
            <div key={idx} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.07)", padding: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={car.image}
                alt={car.name}
                style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: 12, marginBottom: 18, cursor: "pointer" }}
                onClick={() => navigate(`/fleet/${idx}`)}
              />
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 600 }}>{car.name}</div>
                <span style={{ background: "#f2f4fa", color: "#222", fontSize: 14, borderRadius: 8, padding: "2px 14px", fontWeight: 500 }}>{car.type}</span>
              </div>
              <div style={{ display: "flex", gap: 18, margin: "18px 0 10px 0", color: "#444", fontSize: 15 }}>
                <span>👤 {car.seats}</span>
                <span>🚪 {car.doors}</span>
                <span>{car.transmission}</span>
                <span>⛽ {car.fuel}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
                ${car.price} {car.currency} <span style={{ fontWeight: 400, fontSize: 15, color: "#444" }}>/Per Day</span>
              </div>
              <button style={{ marginTop: 10, background: "#220cac", color: "#fff", border: "none", borderRadius: 50, padding: "10px 18px", fontWeight: 600, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetPage; 