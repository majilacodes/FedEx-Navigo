import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const Home = () => {
  const [destinations, setDestinations] = useState([{ location: '', priority: 'cost' }]);

  const addDestination = () => {
    setDestinations([...destinations, { location: '', priority: 'cost' }]);
  };

  const removeDestination = (index: number) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#0e0c96] mb-8">Route Optimization</h1>
        
        {/* Source Input */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Source Location</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent"
            placeholder="Enter source location"
          />
        </div>

        {/* Destinations */}
        {destinations.map((dest, index) => (
          <div key={index} className="mb-6 flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Destination {index + 1}</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent"
                placeholder="Enter destination"
              />
            </div>
            <div className="w-48">
              <label className="block text-gray-700 mb-2">Priority</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent"
              >
                <option value="cost">Cost of Route</option>
                <option value="emissions">Carbon Emissions</option>
                <option value="time">Time Taken</option>
              </select>
            </div>
            {index > 0 && (
              <button
                onClick={() => removeDestination(index)}
                className="mt-8 p-2 text-red-500 hover:text-red-700"
              >
                <Minus className="w-6 h-6" />
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addDestination}
          className="mb-8 flex items-center text-[#0e0c96] hover:text-opacity-80"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Destination
        </button>

        {/* Vehicle Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 mb-2">Vehicle Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent">
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="car">Car</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Fuel Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent">
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
              <option value="electric">Electric</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Mileage (km/l)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e0c96] focus:border-transparent"
              placeholder="Enter mileage"
            />
          </div>
        </div>

        <button className="w-full bg-[#0e0c96] text-white py-3 rounded-lg hover:bg-opacity-90 flex items-center justify-center">
          <Search className="w-5 h-5 mr-2" /> Generate Routes
        </button>
      </div>
    </div>
  );
}

export default Home;