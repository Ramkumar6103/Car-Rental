import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Vehicle from './component/Vechicle';
import About from './component/About';
import ScrollToTopButton from './component/ScrollToTopButton';
import Footer from './component/Footer';
import Auth from './Page/Auth'; // login/signup

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
      </Routes>
    </Router>
  );
};

export default App;
