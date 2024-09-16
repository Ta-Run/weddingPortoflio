import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/home.jsx';
import Portfolio from './componenets/portfolio.jsx';
import Service from './componenets/service.jsx';
import AboutUs from './componenets/aboutUs.jsx';
import Footer from './componenets/footer.jsx';
import Header from './componenets/header.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
