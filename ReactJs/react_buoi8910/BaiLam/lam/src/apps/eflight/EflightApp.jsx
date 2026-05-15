import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';
import SearchInterface from './components/SearchInterface';
import FlightResults from './components/FlightResults';
import FlightDetailsDrawer from './components/FlightDetailsDrawer';
import BookingStepper from './components/BookingStepper';

const EflightApp = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [searchParams, setSearchParams] = useState({
    from: 'New York (JFK)',
    to: 'Los Angeles (LAX)',
    dates: '12 Nov - 20 Nov',
    passengers: '1 Adult, Economy'
  });

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setIsDrawerOpen(true);
  };

  const handleBook = () => {
    setIsDrawerOpen(false);
    setIsBooking(true);
  };

  return (
    <div className="font-inter text-gray-900 bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <header className="bg-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">E-flight</span>
          </Link>
          <div className="flex gap-6 text-sm font-medium text-white/80">
            <span className="text-white cursor-pointer">Flights</span>
            <span className="hover:text-white cursor-pointer transition-colors">Hotels</span>
            <span className="hover:text-white cursor-pointer transition-colors">Manage</span>
          </div>
        </div>
        
        {/* Hero Area */}
        {!isBooking && (
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's explore the world together!</h1>
            <p className="text-secondary-100 text-lg">Find the best deals on flights and travel with peace of mind.</p>
          </div>
        )}
      </header>

      {isBooking ? (
        <BookingStepper onBack={() => setIsBooking(false)} />
      ) : (
        <>
          <SearchInterface initialParams={searchParams} onSearch={(params) => setSearchParams(params)} />
          <FlightResults onSelectFlight={handleSelectFlight} searchParams={searchParams} />
        </>
      )}

      <FlightDetailsDrawer 
        flight={selectedFlight} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onBook={handleBook}
      />
    </div>
  );
};

export default EflightApp;

