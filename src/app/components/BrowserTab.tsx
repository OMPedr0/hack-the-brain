import React from 'react';

function BrowserTab() {
  return (
    <div className="bg-gray-100 p-2 rounded shadow-md">
      <div className="flex items-center bg-white p-2 rounded-t">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500 mr-2"></div>
      </div>
      <div className="p-2">
        <input
          type="text"
          className="w-full p-1 border rounded-md"
          placeholder="Search or enter URL"
        />
      </div>
      <div className="bg-white p-2 rounded-b">
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
          Go
        </button>
        <button className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 ml-2">
          New Tab
        </button>
      </div>
    </div>
  );
}

export default BrowserTab;
