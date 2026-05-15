import { X, CheckCircle2, ChevronRight, Briefcase, Plane, Info } from 'lucide-react';

const FlightDetailsDrawer = ({ flight, isOpen, onClose, onBook }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-bold">Flight Details</h2>
          <button onClick={onClose} className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {flight && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">{flight.logo}</div>
                <div>
                  <p className="font-bold">{flight.airline}</p>
                  <p className="text-xs text-gray-500">Flight {flight.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-bold text-secondary-500">{flight.duration}</p>
              </div>
            </div>

            <div className="relative pl-6 pb-8 border-l-2 border-dashed border-gray-200 ml-4 mb-8">
              <div className="absolute top-0 -left-[11px] w-5 h-5 bg-white border-4 border-secondary-500 rounded-full shadow-sm"></div>
              <div className="-mt-1">
                <h3 className="font-bold text-lg">{flight.departure.time}</h3>
                <p className="text-sm font-medium">{flight.departure.city}</p>
                <p className="text-xs text-gray-500 mt-1">Terminal 4, Gate A12</p>
              </div>
            </div>

            <div className="relative pl-6 ml-4 mb-8">
              <div className="absolute top-0 -left-[11px] w-5 h-5 bg-secondary-500 border-4 border-white rounded-full shadow-sm"></div>
              <div className="-mt-1">
                <h3 className="font-bold text-lg">{flight.arrival.time}</h3>
                <p className="text-sm font-medium">{flight.arrival.city}</p>
                <p className="text-xs text-gray-500 mt-1">Terminal 2</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 mb-8">
              <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4 text-gray-400" /> Baggage Included</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 1 Personal item (Purse, small backpack)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 1 Carry-on bag (Max 10kg)</li>
              </ul>
            </div>
          </div>
        )}

        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">Total Price</span>
            <span className="text-2xl font-bold">${flight?.price}</span>
          </div>
          <button 
            onClick={onBook}
            className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors"
          >
            Book Now <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightDetailsDrawer;
