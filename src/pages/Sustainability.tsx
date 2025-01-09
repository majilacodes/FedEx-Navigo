import React from 'react';
import { Leaf, TrendingDown, BarChart3 } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#0e0c96] mb-8">Sustainability Report</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <Leaf className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Carbon Footprint</h3>
            </div>
            <p className="text-3xl font-bold text-[#0e0c96]">245.8</p>
            <p className="text-sm text-gray-600">Tons CO₂ this month</p>
            <div className="mt-2 flex items-center gap-1 text-green-600">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm">12% less than last month</span>
            </div>
          </div>
          
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <BarChart3 className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Cost Impact</h3>
            </div>
            <p className="text-3xl font-bold text-[#0e0c96]">$12,450</p>
            <p className="text-sm text-gray-600">Savings from green initiatives</p>
          </div>
          
          <div className="bg-[#0e0c96] bg-opacity-5 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#0e0c96] bg-opacity-10 rounded-full">
                <Leaf className="w-5 h-5 text-[#0e0c96]" />
              </div>
              <h3 className="font-semibold text-lg">Green Score</h3>
            </div>
            <p className="text-3xl font-bold text-[#0e0c96]">85/100</p>
            <p className="text-sm text-gray-600">Environmental performance</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-[#0e0c96] mb-4">Transport Mode Comparison</h3>
            <div className="space-y-4">
              {[
                { mode: 'Road', emissions: 45, change: -5 },
                { mode: 'Rail', emissions: 25, change: -12 },
                { mode: 'Air', emissions: 120, change: +8 },
                { mode: 'Sea', emissions: 55, change: -3 }
              ].map((mode) => (
                <div key={mode.mode} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{mode.mode}</p>
                    <p className="text-sm text-gray-600">{mode.emissions} tons CO₂</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    mode.change < 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {mode.change > 0 ? '+' : ''}{mode.change}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-[#0e0c96] mb-4">Sustainability Initiatives</h3>
            <div className="space-y-4">
              {[
                { name: 'Electric Vehicle Fleet', progress: 65 },
                { name: 'Solar-Powered Warehouses', progress: 40 },
                { name: 'Waste Reduction', progress: 85 },
                { name: 'Green Packaging', progress: 70 }
              ].map((initiative) => (
                <div key={initiative.name} className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium">{initiative.name}</p>
                    <span className="text-sm text-[#0e0c96]">{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#0e0c96] h-2 rounded-full" 
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;