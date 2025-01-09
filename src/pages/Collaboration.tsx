import React from 'react';
import { Users, Route, Calendar } from 'lucide-react';

const Collaboration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#0e0c96] mb-8">Logistics Collaboration Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0e0c96] bg-opacity-5 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#0e0c96] mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Available Partners
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((partner) => (
                <div key={partner} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Logistics Partner {partner}</h3>
                      <p className="text-sm text-gray-600">Route: Mumbai → Delhi</p>
                      <p className="text-sm text-gray-600">Available Capacity: 70%</p>
                    </div>
                    <button className="px-4 py-2 bg-[#0e0c96] text-white rounded-lg hover:bg-opacity-90">
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#0e0c96] bg-opacity-5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#0e0c96] mb-4 flex items-center gap-2">
                <Route className="w-5 h-5" />
                Shared Routes
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold">Mumbai → Pune → Delhi</p>
                  <p className="text-sm text-gray-600">3 partners sharing this route</p>
                  <div className="mt-2 flex gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      30% cost reduction
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0e0c96] bg-opacity-5 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#0e0c96] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Collaborations
              </h2>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold">Resource Sharing - Delhi Hub</p>
                  <p className="text-sm text-gray-600">Starting: Tomorrow, 9:00 AM</p>
                  <p className="text-sm text-gray-600">2 partners involved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;