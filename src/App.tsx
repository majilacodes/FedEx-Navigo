import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DriverBehavior from './pages/DriverBehavior';
import Collaboration from './pages/Collaboration';
import Sustainability from './pages/Sustainability';
import DriverRanking from './pages/DriverRanking';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#e6fcff]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver-behavior" element={<DriverBehavior />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/driver-ranking" element={<DriverRanking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;