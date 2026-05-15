import { Link } from 'react-router-dom';
import { ChefHat, Plane, LayoutDashboard } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-playfair font-bold mb-6 text-gray-900">
          Welcome to the App Suite
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-manrope">
          Select an application below to get started with our beautiful, modern interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chefify Card */}
          <Link 
            to="/chefify"
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#f44b87]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ChefHat className="w-8 h-8 text-[#f44b87]" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Chefify</h2>
            <p className="text-gray-500 text-center text-sm">
              Discover vibrant, friendly recipes and cooking inspiration.
            </p>
          </Link>

          {/* E-flight Card */}
          <Link 
            to="/eflight"
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2b80ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Plane className="w-8 h-8 text-[#2b80ff]" />
            </div>
            <h2 className="text-2xl font-bold mb-3">E-flight</h2>
            <p className="text-gray-500 text-center text-sm">
              Clean, trustworthy, and seamless flight bookings.
            </p>
          </Link>

          {/* Dashboard Card */}
          <Link 
            to="/dashboard"
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <LayoutDashboard className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Dashboard</h2>
            <p className="text-gray-500 text-center text-sm">
              Analytical and actionable admin insights panel.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
