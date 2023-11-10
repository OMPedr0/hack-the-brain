import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';


function Browser() {
  return (
    <div>
      <div className="bg-white p-2 border-b border-gray-200 rounded-xl">
        <button
          className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 mr-2"
        >
          Home
        </button>

        <button className="px-4 py-2 rounded-md bg-blue-300 hover-bg-gray-400">
          + New Tab
        </button>
      </div>

      <div className="flex justify-center items-center p-4 mt-28">
        <div className="w-full max-w-md">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search or enter URL"
          />
        </div>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ml-2">
          Go
        </button>
      </div>
    </div>
  );
}

export default Browser;
