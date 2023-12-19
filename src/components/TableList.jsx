import React from "react";

const TableList = ({ farm }) => {
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6  border border-black rounded-2xl w-full md:full mb-4">
      {/* Title Row */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold">{farm.fpoName}</p>
        <div className="flex flex-col text-sm">
          <span className="text-gray-500">District: {farm.district}</span>
          <span className="text-gray-500">State: {farm.state}</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-t-1 border-color" />

      {/* Numeric Values Row */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Risk</p>
          <p className="text-2xl text-red-500">100</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Profit</p>
          <p className="text-2xl text-green-500">200</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Credibility</p>
          <p className="text-2xl text-blue-500">300</p>
        </div>
      </div>
    </div>
  );
};

export default TableList;
