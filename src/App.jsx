import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Vehicle from './component/Vechicle';
import About from './component/About';
import ScrollToTopButton from './component/ScrollToTopButton';
import Footer from './component/Footer';
import Auth from './Page/Auth'; // login/signup
import FleetPage from './component/FleetPage';
import CarDetailPage from './component/CarDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Vehicle />
              <About />
              <ScrollToTopButton/>
              <Footer />
            </>
          }
        />

        {/* Auth Route */}
        <Route path="/auth" element={<Auth />} />

        {/* Fleet Route */}
        <Route path="/fleet" element={<FleetPage />} />

        {/* Car Detail Route */}
        <Route path="/fleet/:carId" element={<CarDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
