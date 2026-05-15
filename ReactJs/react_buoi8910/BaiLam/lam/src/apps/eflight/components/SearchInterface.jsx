import { useState } from 'react';
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Search } from 'lucide-react';

const SearchInterface = ({ initialParams, onSearch }) => {
  const [params, setParams] = useState(initialParams);

  const handleChange = (field, value) => {
    setParams(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-5xl mx-auto -mt-16 relative z-10">
      <div className="flex gap-4 mb-6 border-b border-gray-100 pb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tripType" defaultChecked className="text-secondary-500 focus:ring-secondary-500" />
          <span className="text-sm font-medium">Round trip</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tripType" className="text-secondary-500 focus:ring-secondary-500" />
          <span className="text-sm font-medium">One way</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative border border-gray-200 rounded-xl p-3 hover:border-secondary-500 transition-colors group">
          <span className="text-xs text-gray-500 block mb-1">From</span>
          <div className="flex items-center gap-2">
            <PlaneTakeoff className="w-5 h-5 text-gray-400 group-hover:text-secondary-500" />
            <input 
              type="text" 
              value={params.from} 
              onChange={e => handleChange('from', e.target.value)} 
              className="w-full outline-none font-bold text-gray-900 bg-transparent" 
            />
          </div>
        </div>

        <div className="relative border border-gray-200 rounded-xl p-3 hover:border-secondary-500 transition-colors group">
          <span className="text-xs text-gray-500 block mb-1">To</span>
          <div className="flex items-center gap-2">
            <PlaneLanding className="w-5 h-5 text-gray-400 group-hover:text-secondary-500" />
            <input 
              type="text" 
              value={params.to} 
              onChange={e => handleChange('to', e.target.value)} 
              className="w-full outline-none font-bold text-gray-900 bg-transparent" 
            />
          </div>
        </div>

        <div className="relative border border-gray-200 rounded-xl p-3 hover:border-secondary-500 transition-colors group">
          <span className="text-xs text-gray-500 block mb-1">Dates</span>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-400 group-hover:text-secondary-500" />
            <input 
              type="text" 
              value={params.dates} 
              onChange={e => handleChange('dates', e.target.value)} 
              className="w-full outline-none font-bold text-gray-900 bg-transparent" 
            />
          </div>
        </div>

        <div className="relative border border-gray-200 rounded-xl p-3 hover:border-secondary-500 transition-colors group">
          <span className="text-xs text-gray-500 block mb-1">Passengers & Class</span>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-400 group-hover:text-secondary-500" />
            <input 
              type="text" 
              value={params.passengers} 
              onChange={e => handleChange('passengers', e.target.value)} 
              className="w-full outline-none font-bold text-gray-900 bg-transparent" 
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 -mb-10">
        <button 
          onClick={() => onSearch(params)}
          className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-secondary-500/30 transition-all hover:scale-105"
        >
          <Search className="w-5 h-5" />
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default SearchInterface;
