import { Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick, searchQuery, setSearchQuery }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="text-xl font-bold font-playfair text-primary-500">Chefify</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes..."
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full w-64 focus:ring-2 focus:ring-primary-500 outline-none text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/chefify" className="hover:text-primary-500 transition-colors">Home</Link>
          <Link to="/chefify" className="hover:text-primary-500 transition-colors">Recipes</Link>
          <Link to="/chefify" className="hover:text-primary-500 transition-colors">About</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={onLoginClick}
          className="text-sm font-medium text-gray-600 hover:text-primary-500 hidden sm:block transition-colors"
        >
          Login
        </button>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
          Subscribe
        </button>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
