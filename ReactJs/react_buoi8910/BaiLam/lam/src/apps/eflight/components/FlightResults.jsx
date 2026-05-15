import { Clock, Briefcase, ChevronRight } from 'lucide-react';
import { eflightFlights } from '../../../data/mockData';

const FlightResults = ({ onSelectFlight, searchParams }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Available Flights</h2>
          <p className="text-gray-500 text-sm">Showing {eflightFlights.length} flights for {searchParams?.from || 'New York'} to {searchParams?.to || 'Los Angeles'}</p>
        </div>
        <div className="text-sm font-medium text-gray-500">
          Sort by: <span className="text-secondary-500 cursor-pointer">Best (Recommended)</span>
        </div>
      </div>

      <div className="space-y-4">
        {eflightFlights.map(flight => (
          <div 
            key={flight.id} 
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-secondary-500/30 transition-all cursor-pointer group"
            onClick={() => onSelectFlight(flight)}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl">
                  {flight.logo}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{flight.airline}</h4>
                  <span className="text-xs text-gray-500">{flight.id}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 flex-1 w-full md:w-auto px-4">
                <div className="text-right">
                  <h3 className="font-bold text-xl">{flight.departure.time}</h3>
                  <span className="text-xs text-gray-500">{flight.departure.city}</span>
                </div>
                
                <div className="flex-1 flex flex-col items-center px-4 relative">
                  <span className="text-xs text-gray-400 mb-1 flex items-center gap-1"><Clock className="w-3 h-3"/> {flight.duration}</span>
                  <div className="w-full h-[2px] bg-gray-200 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-secondary-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">Non-stop</span>
                </div>

                <div>
                  <h3 className="font-bold text-xl">{flight.arrival.time}</h3>
                  <span className="text-xs text-gray-500">{flight.arrival.city}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:flex-col md:items-end w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 gap-2">
                <div className="text-2xl font-bold text-gray-900">${flight.price}</div>
                <button className="bg-secondary-500/10 text-secondary-600 hover:bg-secondary-500 hover:text-white px-6 py-2 rounded-xl font-bold transition-colors flex items-center gap-2">
                  Select <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;
