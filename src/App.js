// App.jsx
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componenets/home.jsx";
import Portfolio from "./componenets/portfolio.jsx";
import Service from "./componenets/service.jsx";
import AboutUs from "./componenets/aboutUs.jsx";
import Footer from "./componenets/footer.jsx";
import Header from "./componenets/header.jsx";
import "./App.css";

function App() {
  const footerRef = useRef(null); // Reference for the footer

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header footerRef={footerRef} /> {/* Pass footerRef to Header */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer ref={footerRef} /> {/* Attach ref to Footer */}
      </div>
    </Router>
  );
}

export default App;
