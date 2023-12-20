import React, { useState } from 'react';
import { FaRupeeSign, FaSearch } from 'react-icons/fa';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import cotton from '../images/cotton.jpg';
import tomato from '../images/tomato.jpg';
import wheatbag from '../images/wheatbag.jpg';
import Sell from './Sell';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    {/* ... (Dropdown component) */}
  </div>
);

const MarketPlace = () => {
  const { currentColor, currentMode } = useStateContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const hiringItems = [
    { id: 1, title: 'Cotton', description: 'Description 1', image: cotton },
    { id: 2, title: 'Tomato', description: 'Description 2', image: tomato },
    { id: 3, title: 'Wheatbag', description: 'Description 3', image: wheatbag },
    { id: 4, title: 'Tomato', description: 'Description 4', image: tomato },
    { id: 5, title: 'Cotton', description: 'Description 5', image: cotton },
    { id: 6, title: 'Wheat', description: 'Description 6', image: wheatbag },
    { id: 7, title: 'Tomato', description: 'Description 7', image: tomato },
    { id: 8, title: 'Cotton', description: 'Description 8', image: cotton },
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
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <Sell isOpen={isModalOpen} onClose={closeHire} item={selectedItem} />
      {isModalOpen && <div className='backdrop open' onClick={closeHire}></div>}
    </div>
  );
};

export default MarketPlace;
