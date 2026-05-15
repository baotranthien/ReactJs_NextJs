import { useState } from 'react';
import { Star } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters }) => {
  const [localTypes, setLocalTypes] = useState(filters.types);
  const [localTime, setLocalTime] = useState(filters.maxTime);
  const [localRatings, setLocalRatings] = useState(filters.ratings);

  const toggleType = (type) => {
    setLocalTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const toggleRating = (rating) => {
    setLocalRatings(prev => prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]);
  };

  const handleApply = () => {
    setFilters({
      types: localTypes,
      maxTime: localTime,
      ratings: localRatings
    });
  };

  return (
    <div className="w-full md:w-64 shrink-0 p-6 bg-white border border-gray-100 rounded-3xl h-fit sticky top-6">
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-4 font-playfair">Recipe Type</h3>
        <div className="space-y-3">
          {['Healthy', 'Sweet', 'Breakfast', 'Dinner', 'Snacks'].map(type => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  checked={localTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="peer appearance-none w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500/20 checked:bg-primary-500 checked:border-primary-500 transition-colors" 
                />
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg mb-4 font-playfair">Time</h3>
        <div className="px-2">
          <input 
            type="range" min="5" max="120" 
            value={localTime}
            onChange={(e) => setLocalTime(parseInt(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" 
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>5m</span>
            <span>{localTime}m</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-lg mb-4 font-playfair">Rating</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2].map(rating => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  checked={localRatings.includes(rating)}
                  onChange={() => toggleRating(rating)}
                  className="peer appearance-none w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500/20 checked:bg-primary-500 checked:border-primary-500 transition-colors" 
                />
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex text-accent-star">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      <button onClick={handleApply} className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-bold transition-colors">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
