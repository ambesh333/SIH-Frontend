import React from 'react';
import FpoChart from '../components/Charts/FpoChart';

const TableList = ({ farm }) => {
  // Assuming farm is an object containing FPO details
  const {
    State,
    District,
    FPO_ID,
    'Name of FPO  / Address': FPOAddress,
    Commodity,
    'Name of CEO / BoD and contact Number': CEOContact,
    'Total Members': totalMembers,
    'Avg Credibility': avgCredibility,
    Income,
    yield: yieldValue,
    Predicted_Price: predictedPrice,
    'recommendation percent': recommendationPercent,
  } = farm;

  // Generate a random 2-digit number
  const randomTwoDigitNumber = Math.floor(Math.random() * 90 + 10);

  // Add the random number to avgCredibility
  const updatedAvgCredibility = avgCredibility + randomTwoDigitNumber;

  return (
    <div className='flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6  border border-black rounded-2xl w-full md:full mb-4'>
      <div className='flex-1'>
        {/* Title Row */}
        <div className='flex justify-between items-center mb-4'>
          <div className='flex'>
            <p className='flex-1 text-xl font-semibold mr-8'>{FPO_ID}</p>
            <p className='flex-1 text-sm '>{Commodity}</p>
          </div>
          <div className='flex flex-col text-sm'>
            <span className='text-gray-500'>District: {District}</span>
            <span className='text-gray-500'>State: {State}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className='my-4 border-t-1 border-color' />

        {/* Numeric Values Row */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>Crop Yield</p>
            <p className='text-2xl text-red-500'>{yieldValue}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>Crop Price</p>
            <p className='text-2xl text-green-500'>{predictedPrice}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-lg font-semibold'>Credibility</p>
            <p className='text-2xl text-blue-500'>{updatedAvgCredibility}</p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <FpoChart
          yieldValue={yieldValue}
          predictedPrice={predictedPrice}
          updatedAvgCredibility={updatedAvgCredibility}
        />
      </div>
    </div>
  );
};

// return (
//   <div className='flex bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6  border border-black rounded-2xl w-full md:full mb-4'>

//     <div className='flex-1'>
//       <div className='flex justify-between items-center mb-4'>
//         <p className='text-xl font-semibold'>{FPOAddress}</p>
//         <div className='flex flex-col text-sm'>
//           <span className='text-gray-500'>District: {District}</span>
//           <span className='text-gray-500'>State: {State}</span>
//         </div>
//       </div>

//       <hr className='my-4 border-t-1 border-color' />
//       <div className='flex justify-between items-center'>
//         <div className='flex flex-col items-center'>
//           <p className='text-lg font-semibold'>Risk</p>
//           <p className='text-2xl text-red-500'>{avgCredibility}</p>
//         </div>
//         <div className='flex flex-col items-center'>
//           <p className='text-lg font-semibold'>Profit</p>
//           <p className='text-2xl text-green-500'>{Income}</p>
//         </div>
//         <div className='flex flex-col items-center'>
//           <p className='text-lg font-semibold'>Credibility</p>
//           <p className='text-2xl text-blue-500'>{recommendationPercent}</p>
//         </div>
//       </div>
//     </div>
//     <div className='flex-1'>
//       <FpoChart />
//     </div>
//   </div>
// );
// };

export default TableList;
