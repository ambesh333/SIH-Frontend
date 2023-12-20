import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Orders from '../pages/Orders';
import profile_image from '../data/farmer2.jpg'

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

/* const DropDown = ({ currentMode }) => (
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
); */

const Farmerpage = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
 
    <div>
    <div className="p-4">
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="user-profile d-flex flex-wrap align-items-center">
              <img src={profile_image} alt="User" className="user-image" />
              <div className="user-details ml-4">
                <h2>User Profile</h2>
                <p>Name: </p>
                <p>Age: </p>
                <p>State: </p>
                <p>District:</p>
                <p>Location: </p>
                <p>Email: </p>
                <p>Current FPO: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Farmerpage;
