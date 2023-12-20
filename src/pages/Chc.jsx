import React, { useState } from 'react';
import { FaRupeeSign, FaSearch } from 'react-icons/fa';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import machine from '../images/machine.jpg';
import machine1 from '../images/machine1.jpeg';
import machine2 from '../images/machine2.jpeg';
import machine3 from '../images/machine3.jpeg';
import machine4 from '../images/machine4.jpeg';
import machine5 from '../images/machine5.jpeg';
import Hire from './Hire';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    {/* ... (Dropdown component) */}
  </div>
);

const Chc = () => {
  const { currentColor, currentMode } = useStateContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // const hiringItems = [
  //   { id: 1, title: 'JCB ', description: 'Description 1', image: machine },
  //   { id: 2, title: 'Thrasher', description: 'Description 2', image: machine1 },
  //   { id: 3, title: 'Tractor', description: 'Description 3', image: machine2 },
  //   { id: 4, title: 'Tractor', description: 'Description 4', image: machine3 },
  //   { id: 5, title: 'Thrasher', description: 'Description 5', image: machine4 },
  //   {
  //     id: 6,
  //     title: 'Harvester',
  //     description: 'Description 6',
  //     image: machine5,
  //   },
  //   { id: 7, title: 'Harvester', description: 'Description 7', image: machine },
  //   { id: 8, title: 'Thrasher', description: 'Description 8', image: machine1 },
  // ];
  const hiringItems = [
    { id: 1, title: 'JCB ', description: 'Description 1', image: machine },
    { id: 2, title: 'Thrasher', description: 'Description 2', image: machine1 },
    { id: 3, title: 'Tractor', description: 'Description 3', image: machine2 },
    { id: 4, title: 'Tractor', description: 'Description 4', image: machine3 },
    { id: 5, title: 'Thrasher', description: 'Description 5', image: machine4 },
    {
      id: 6,
      title: 'Harvester',
      description: 'Description 6',
      image: machine5,
    },
    { id: 7, title: 'Harvester', description: 'Description 7', image: machine },
    { id: 8, title: 'Thrasher', description: 'Description 8', image: machine1 },
  ];

  const openHire = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeHire = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='mt-24'>
      <div className='flex flex-col items-center mb-4'>
        {/* <div className="relative mb-2"> */}
        <input
          type='text'
          placeholder='Search...'
          className='hire-search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* </div> */}
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        {hiringItems.map((item) => (
          <div
            key={item.id}
            className='w-64 mx-4 my-8 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col'
          >
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-32 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              {/* <p className='text-gray-600'>{item.description}</p> */}
              <button
                className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md'
                onClick={() => openHire(item)}
              >
                Rent
              </button>
            </div>
          </div>
        ))}
      </div>
      <Hire isOpen={isModalOpen} onClose={closeHire} item={selectedItem} />
      {isModalOpen && <div className='backdrop open' onClick={closeHire}></div>}
    </div>
  );
};

export default Chc;
