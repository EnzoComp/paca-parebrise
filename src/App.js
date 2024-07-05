import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Formation from "./components/Formation";

const AppContent = () => {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  const location = useLocation();

  return (
    <div id="top" className="overflow-hidden">
      {location.pathname !== "/formation" && (
        <Header setNavMobile={setNavMobile} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div
                className={`${
                  navMobile ? "right-0" : "-right-full"
                } fixed z-10 top-0 h-full transition-all duration-200`}
              >
                <NavMobile setNavMobile={setNavMobile} />
              </div>
              <Stats />
              <Why />
              <Trade />
              <Features />
              <Newsletter />
            </>
          }
        />
        <Route path="/formation" element={<Formation />} />
      </Routes>
      {location.pathname !== "/formation" && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
