import { LayoutDashboard, Users, CreditCard, Settings, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`px-4 py-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-colors ${isActive
        ? 'bg-white/10 text-white'
        : 'hover:bg-white/5 text-gray-400 hover:text-white'
      }`}
  >
    <Icon className="w-5 h-5" />
    {label}
  </div>
);

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col fixed left-0 top-0">
      <div className="flex items-center gap-3 mb-10 px-2 mt-4">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
          D
        </div>
        <span className="text-xl font-bold tracking-tight">Admin Dash</span>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem icon={LayoutDashboard} label="Overview" isActive={activeTab === 'Overview'} onClick={() => setActiveTab('Overview')} />
        <NavItem icon={Users} label="Users" isActive={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
        <NavItem icon={CreditCard} label="Transactions" isActive={activeTab === 'Transactions'} onClick={() => setActiveTab('Transactions')} />
        <NavItem icon={Settings} label="Settings" isActive={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
      </nav>

      <div className="mt-auto border-t border-white/10 pt-4">
        <Link to="/" className="px-4 py-3 hover:bg-white/5 rounded-xl flex items-center gap-3 text-gray-400 hover:text-white font-medium cursor-pointer transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Apps
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
