import { Users, DollarSign, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import { dashboardStats } from '../../../data/mockData';

const StatCard = ({ title, value, trend, icon: Icon, isPositive }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-700">
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        {trend}
      </div>
    </div>
    <span className="text-gray-500 text-sm font-medium mb-1">{title}</span>
    <h3 className="text-3xl font-bold text-gray-900">
      {typeof value === 'number' && title.includes('Revenue') ? `$${value.toLocaleString()}` : value.toLocaleString()}
    </h3>
  </div>
);

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard 
        title="Total Users" 
        value={dashboardStats.totalUsers} 
        trend={dashboardStats.usersTrend} 
        icon={Users} 
        isPositive={dashboardStats.usersTrend.startsWith('+')} 
      />
      <StatCard 
        title="Total Revenue" 
        value={dashboardStats.revenue} 
        trend={dashboardStats.revenueTrend} 
        icon={DollarSign} 
        isPositive={dashboardStats.revenueTrend.startsWith('+')} 
      />
      <StatCard 
        title="Active Bookings" 
        value={dashboardStats.activeBookings} 
        trend={dashboardStats.bookingsTrend} 
        icon={Activity} 
        isPositive={dashboardStats.bookingsTrend.startsWith('+')} 
      />
    </div>
  );
};

export default StatCards;
