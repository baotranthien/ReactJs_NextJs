import { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCards from './components/StatCards';
import DataTable from './components/DataTable';

const DashboardApp = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="font-inter text-gray-900 bg-gray-50 min-h-screen flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 ml-64 p-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard {activeTab}</h1>
            <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center">
              <span className="font-bold text-sm">A</span>
            </div>
          </div>
        </div>
        
        {activeTab === 'Overview' && (
          <>
            <StatCards />
            <DataTable />
          </>
        )}
        
        {activeTab === 'Transactions' && (
          <DataTable />
        )}

        {activeTab !== 'Overview' && activeTab !== 'Transactions' && (
          <div className="bg-white p-12 rounded-2xl border border-gray-100 text-center text-gray-500">
            {activeTab} module is under construction.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardApp;

