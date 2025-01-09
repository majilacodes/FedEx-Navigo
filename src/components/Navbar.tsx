import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-[#0e0c96]" />
            <span className="text-2xl font-bold text-[#0e0c96]">Navify</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/driver-behavior" className="text-[#0e0c96] hover:text-opacity-80">
              Driver Behavior
            </Link>
            <Link to="/collaboration" className="text-[#0e0c96] hover:text-opacity-80">
              Collaboration
            </Link>
            <Link to="/sustainability" className="text-[#0e0c96] hover:text-opacity-80">
              Sustainability
            </Link>
            <Link to="/driver-ranking" className="text-[#0e0c96] hover:text-opacity-80">
              Driver Ranking
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;