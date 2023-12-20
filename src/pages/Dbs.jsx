import React, { useState } from 'react';
import { FaRupeeSign, FaSearch } from 'react-icons/fa';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useStateContext } from '../contexts/ContextProvider';
import machine from '../images/truck1.jpg';
import storage from '../images/coldstorage.jpg';
import vaccination from '../images/vaccination2.jpg';
import machine1 from '../images/loan.jpg';
import machine2 from '../images/images.jpg';
import machine3 from '../images/soiltest.jpg';
import machine4 from '../images/expertguidance.jpg';
import machine5 from '../images/packaging.jpg';
import Service from './Service';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    {/* ... (Dropdown component) */}
  </div>
);

const Dbs = () => {
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
    { 
      id: 1, 
      title: 'Yield Transport', 
      description: "Efficient and reliable transportation solutions for farmers' produce, ensuring timely delivery.", 
      image: machine ,
      basePrice: 600,
    },
    { 
      id: 2, 
      title: 'Crop Storage', 
      description: "State-of-the-art facilities for preserving crops, maintaining yield quality and maximizing value.", 
      image: storage,
      basePrice: 500,
    },
    { 
      id: 3, 
      title: 'Financial Services', 
      description: "Tailored financial support to empower farmers, fostering sustainable agricultural practices.", 
      image: machine1,
      basePrice: 300,
    },
    { 
      id: 4, 
      title: 'Soil Testing', 
      description:"Precision soil analysis for informed decision-making, optimizing yields and resource utilization.", 
      image: machine3,
      basePrice: 700,
    },
    { 
      id: 5, 
      title: 'Technical Guidance', 
      description:"Expert advice and technical support to enhance farming practices and increase productivity.", 
      image: machine4,
      basePrice: 400,
    },
    {
      id: 6,
      title: 'Livestock Vaccination',
      description:"Comprehensive vaccination services to safeguard the health and well-being of livestock.", 
      image: vaccination,
      basePrice: 600,
    },
    { 
      id: 7, 
      title: 'Post Harvest Service', 
      description:"Specialized solutions for post-harvest handling, minimizing losses and ensuring product quality.", 
      image: machine2,
      basePrice: 600,
    },
    { 
      id: 8, 
      title: 'Packaging Services', 
      description: "High-quality packaging solutions to enhance the appeal and shelf life of products.", 
      image: machine5,
      basePrice: 400, 
    },
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
      <Service isOpen={isModalOpen} onClose={closeHire} item={selectedItem} />
      {isModalOpen && <div className='backdrop open' onClick={closeHire}></div>}
    </div>
  );
};

export default Dbs;
