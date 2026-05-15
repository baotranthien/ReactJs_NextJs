import { useState } from 'react';
import { dashboardTransactions } from '../../../data/mockData';
import { MoreVertical } from 'lucide-react';

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(dashboardTransactions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dashboardTransactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-900">Recent Transactions</h3>
        <button className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
          View all
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Transaction ID</th>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {currentItems.map((trx) => (
              <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{trx.id}</td>
                <td className="px-6 py-4 text-gray-600">{trx.user}</td>
                <td className="px-6 py-4 text-gray-500">{trx.date}</td>
                <td className="px-6 py-4 font-bold text-gray-900">${trx.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    trx.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    trx.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {trx.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
        <span>Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, dashboardTransactions.length)} of {dashboardTransactions.length} entries</span>
        <div className="flex gap-1">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? 'bg-blue-50 text-blue-600 font-medium' : 'border border-gray-200 hover:bg-gray-50'}`}
            >
              {i + 1}
            </button>
          ))}
          
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
