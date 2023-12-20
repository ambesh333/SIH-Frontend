import React, { useState } from 'react';
import { FaRupeeSign, FaSearch } from 'react-icons/fa';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import cotton from '../images/cotton.jpg';
import tomato from '../images/tomato.jpg';
import wheatbag from '../images/wheatbag.jpg';
import Sell from './Sell';

const DropDown = ({ options, selected, onSelect }) => (
  <div className='w-32 border-1 border-color px-2 py-1 rounded-md'>
  <DropDownListComponent
    id='filter'
    placeholder="Filter"
    fields={{ text: 'value', value: 'value' }}
    style={{ border: 'none' }}
    value={selected}
    dataSource={[
      { value: 'All', text: 'All' }, 
      ...options.map((option) => ({ value: option, text: option }))
    ]}
    change={(e) => onSelect(e.value)}
  />
</div>
);


const MarketPlace = () => {
  const { currentColor, currentMode } = useStateContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');


  const hiringItems = [
    { id: 1, title: 'Cotton', description: 'Description 1', image: cotton, basePrice: 300, },
    { id: 2, title: 'Tomato', description: 'Description 2', image: tomato, basePrice: 600, },
    { id: 3, title: 'Wheatbag', description: 'Description 3', image: wheatbag, basePrice: 200, },
    { id: 4, title: 'Tomato', description: 'Description 4', image: tomato, basePrice: 550, },
    { id: 5, title: 'Cotton', description: 'Description 5', image: cotton, basePrice: 250, },
    { id: 6, title: 'Wheat', description: 'Description 6', image: wheatbag, basePrice: 210, },
    { id: 7, title: 'Tomato', description: 'Description 7', image: tomato, basePrice: 600, },
    { id: 8, title: 'Cotton', description: 'Description 8', image: cotton, basePrice: 400, }
  ];

  const filterOptions = ['Cotton', 'Tomato', 'Wheatbag']; 


  const openHire = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeHire = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const filteredItems = hiringItems.filter((item) => {
    if (selectedFilter === 'All' || item.title === selectedFilter) {
      return true;
    }
    return false;
  });

  return (
    <div className='mt-24 top-box'>
      <div className='flex flex-col items-center mb-4'>
      <h2 className='page-name'>Market Place</h2>
      <div className='flex items-center search-container'>

        <input
          type='text'
          placeholder='Search...'
          className='hire-search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          <DropDown
            options={filterOptions}
            selected={selectedFilter}
            onSelect={handleFilterChange}
          />
      </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        {filteredItems.map((item) => (
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
              {/* <p className='text-gray-600' dangerouslySetInnerHTML={{ __html: item.description }}></p> */}
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
      <Sell isOpen={isModalOpen} onClose={closeHire} item={selectedItem} />
      {isModalOpen && <div className='backdrop open' onClick={closeHire}></div>}
    </div>
  );
};

export default MarketPlace;
