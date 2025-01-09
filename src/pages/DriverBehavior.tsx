import React from 'react';
import { User } from 'lucide-react';

interface Driver {
  name: string;
  license: string;
  status: string;
  speed: number;
  distance: number;
  timeActive: string;
}

const drivers: Driver[] = [
  {
    name: 'John Doe',
    license: 'ABC123',
    status: 'On Duty',
    speed: 65,
    distance: 120,
    timeActive: '4h 30m'
  },
  {
    name: 'Jane Smith',
    license: 'XYZ789',
    status: 'Off Duty',
    speed: 0,
    distance: 85,
    timeActive: '2h 15m'
  }
];

const DriverBehavior = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#0e0c96] mb-8">Driver Behavior Monitoring</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                  <User className="w-6 h-6 text-[#0e0c96]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#0e0c96]">{driver.name}</h3>
                  <p className="text-gray-600 text-sm">License: {driver.license}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  driver.status === 'On Duty' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {driver.status}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 border-t pt-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Speed</p>
                  <p className="font-semibold text-[#0e0c96]">{driver.speed} km/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Distance</p>
                  <p className="font-semibold text-[#0e0c96]">{driver.distance} km</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Time Active</p>
                  <p className="font-semibold text-[#0e0c96]">{driver.timeActive}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverBehavior;