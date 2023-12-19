import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Orders from '../pages/Orders';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import {
  earningData,
  DashBoardCards,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    <DropDownListComponent
      id='time'
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      value='1'
      dataSource={dropdownData}
      popupHeight='220px'
      popupWidth='120px'
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">₹63,448.78</p>
            </div>
            <button
              type='button'
              style={{ backgroundColor: currentColor }}
              className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4'
            >
              <FaRupeeSign />
            </button>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Check FPO'
              borderRadius='10px'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-bold">
              FPO Finder: Find your perfect FPO.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-col">
              <div className="font-semibold text-sm text-gray-900 mt-5 mb-6">
                FPO Finder is your tailored solution for finding the ideal FPO
                to join.
              </div>
              <div>
                <p className="text-sm text-gray-900">
                  Effortlessly search for FPOs by name, state, and specific
                  criteria:
                  <br />
                  <br />
                  - Empower your harvest: Find your perfect FPO match.
                  <br />
                  - More income, less hassle: Find the FPO that works for you.
                  <br />
                  - Access markets, resources, and knowledge: Your FPO
                  connection is a click away.
                  <br />
                  - Sustainable growth, collective bargaining: Join the FPO
                  revolution.
                  <br />
                  - Empower your community, secure your future: Find your FPO
                  path.
                  <br />
                  - From small farms to big dreams: FPO Finder, your bridge to
                  success.
                  <br />
                  <br />
                  Connect, collaborate, thrive: Take your first step with FPO
                  Finder.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          {/* <div className="flex justify-between items-center gap-2 mb-10">
            <input type="text" placeholder="Search..." />
          </div> */}
          <div className="md:w-full overflow-auto">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
