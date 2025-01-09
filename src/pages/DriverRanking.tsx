import React from 'react';
import { Trophy, Star, TrendingUp, Award } from 'lucide-react';

interface Driver {
  name: string;
  score: number;
  deliveries: number;
  emissions: number;
  distance: number;
  rating: number;
}

const drivers: Driver[] = [
  {
    name: 'John Doe',
    score: 95,
    deliveries: 128,
    emissions: 12.5,
    distance: 1850,
    rating: 4.8
  },
  {
    name: 'Jane Smith',
    score: 92,
    deliveries: 115,
    emissions: 13.2,
    distance: 1720,
    rating: 4.7
  },
  {
    name: 'Mike Johnson',
    score: 88,
    deliveries: 98,
    emissions: 14.8,
    distance: 1550,
    rating: 4.5
  }
];

const DriverRanking = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#0e0c96] mb-8">Driver Rankings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <Trophy className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Top Performer</h3>
            </div>
            <p className="text-2xl font-bold text-[#0e0c96]">{drivers[0].name}</p>
            <p className="text-sm text-gray-600">Score: {drivers[0].score}/100</p>
          </div>
          
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <Star className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Average Rating</h3>
            </div>
            <p className="text-2xl font-bold text-[#0e0c96]">4.7/5.0</p>
            <p className="text-sm text-gray-600">Based on all drivers</p>
          </div>
          
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <TrendingUp className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Total Deliveries</h3>
            </div>
            <p className="text-2xl font-bold text-[#0e0c96]">341</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliveries</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emissions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {drivers.map((driver, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {index === 0 && <Award className="w-5 h-5 text-yellow-400 mr-2" />}
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{driver.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-[#0e0c96] font-semibold">{driver.score}/100</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{driver.deliveries}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{driver.emissions} tons CO₂</td>
                    <td className="px-6 py-4 whitespace-nowrap">{driver.distance} km</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {driver.rating}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverRanking;