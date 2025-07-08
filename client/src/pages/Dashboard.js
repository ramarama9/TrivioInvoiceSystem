// client/pages/dashboard.tsx

import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard</h1>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
        <p className="text-lg">Welcome to Trivio Global’s Invoice System.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Use the menu to create, manage, and send invoices.
        </p>
      </div>

      {/* Empty space for future widgets */}
      <div className="mt-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-10 text-center text-gray-400">
        Dashboard widgets will appear here...
      </div>
    </div>
  );
}
