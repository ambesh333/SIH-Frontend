import React, { useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';

import product9 from '../data/product9.jpg';
import JCB from '../images/JCB.jpg';
import thresher from '../images/thresher.jpg';
import tractor from '../images/tractor2.jpg';
import irrigation from '../images/irrigation.jpg';
import planters from '../images/planters.jpg';
import cultivator from '../images/cultivator.jpg';
import Harvester from '../images/harvester.jpg';
import Seedeqpt from '../images/seedsower.png';
import Hire from './Hire';

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



const Chc = () => {
  const { currentColor, currentMode } = useStateContext();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const hiringItems = [
    { 
      id: 1, 
      title: 'JCB', 
      description: `    
        Model: XYZ-5000<br>
        Engine Power: 100 HP<br>
        Fuel Type: Diesel<br>
        Transmission: Manual<br>
        Year of Manufacture: 2022<br>
        Condition: Excellent`, 
      image: machine,
      basePrice: 400, 
    },
    { 
      id: 2, 
      title: 'Thrasher', 
      description: `
        Model: ABC-2000<br>
        Threshing Capacity: 2 tons/hr<br>
        Power Source: Diesel Engine<br>
        Fuel Consumption: 5 l/hr<br>
        Year of Manufacture: 2021<br>
        Condition: Well-maintained`, 
      image: machine1,
      basePrice: 500, 
    },
    { 
      id: 3, 
      title: 'Tractor', 
      description: `
        Model: LMN-300<br>
        Engine Power: 50 HP<br>
        Fuel Type: Diesel<br>
        Transmission: Automatic<br>
        Year of Manufacture: 2019<br>
        Condition: Good`, 
      image: machine2,
      basePrice: 600, 
    },
    { 
      id: 4, 
      title: 'Tractor', 
      description: `
        Model: DEF-700<br>
        Engine Power: 120 HP<br>
        Fuel Type: Diesel<br>
        Transmission: Manual<br>
        Year of Manufacture: 2020<br>
        Condition: Excellent`, 
      image: machine3,
      basePrice: 300, 
    },
    { 
      id: 5, 
      title: 'Thrasher', 
      description: `
        Model: MNO-1500<br>
        Threshing Capacity: 1.5 tons/hour<br>
        Power Source: Diesel Engine<br>
        Fuel Consumption: 4 ls/hr<br>
        Year of Manufacture: 2020<br>
        Condition: Well-maintained`, 
      image: machine4,
      basePrice: 500, 
    },
    {
      id: 6,
      title: 'Harvester',
      description: `
        Model: PQR-2500<br>
        Harvesting Capacity: 2500 sq. meters/hour<br>
        Power Source: Diesel Engine<br>
        Fuel Consumption: 6 l/hr<br>
        Year of Manufacture: 2021<br>
        Condition: Excellent`, 
      image: machine5,
      basePrice: 800,
    },
    { 
      id: 7, 
      title: 'Harvester', 
      description: `
        Model: STU-1800<br>
        Harvesting Capacity: 1800 sq. meters/hour<br>
        Power Source: Diesel Engine<br>
        Fuel Consumption: 5 ls/hr<br>
        Year of Manufacture: 2019<br>
        Condition: Good`, 
      image: machine,
      basePrice: 700, 
    },
    { 
      id: 8, 
      title: 'Thrasher', 
      description: `
        Model: VWX-1200<br>
        Threshing Capacity: 1.2 tons/hour<br>
        Power Source: Diesel Engine<br>
        Fuel Consumption: 3 l/hr<br>
        Year of Manufacture: 2018<br>
        Condition: Fair`, 
      image: machine1,
      basePrice: 600,  
    },
  ];
  const filterOptions = ['Tractor', 'Thrasher', 'Harvester']; 

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
    <div className='top-box'>
      <div className='flex flex-col items-center mb-4'>
        <h2 className='page-name'>Custom Hiring Centre</h2>
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
              <p className='text-gray-600' dangerouslySetInnerHTML={{ __html: item.description }}></p>
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
