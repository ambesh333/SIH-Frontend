import {
  AiOutlineFieldNumber,
  AiOutlineDollar,
  AiOutlineAim,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DropDown from '../components/DropDown';

const Charts = ({ selected1, selected2 }) => {
  // const income1 = selected1 ? selected1.Income : null;
  // const yield1 = selected1 ? selected1.yield : null;
  // const income2 = selected2 ? selected2.Income : null;
  // const yield2 = selected2 ? selected2.yield : null;

  // const incomeData = [
  //   { name: 'FPO_1', income: selected1.Income || 0 },
  //   { name: 'FPO_2', income: selected2.Income || 0 },
  // ];

  // const yieldData = [
  //   { name: 'FPO_1', yield: selected1.yield || 0 },
  //   { name: 'FPO_2', yield: selected2.yield || 0 },
  // ];
  console.log(selected1);
  console.log(selected2);

  const [incomeData, setIncomeData] = useState([]);
  const [yieldData, setYieldData] = useState([]);

  useEffect(() => {
    // Update the incomeData when selected1 or selected2 changes
    setIncomeData([
      { name: 'FPO_1', income: selected1?.Income || 0 },
      { name: 'FPO_2', income: selected2?.Income || 0 },
    ]);
  }, [selected1, selected2]);

  useEffect(() => {
    // Update the yieldData when selected1 or selected2 changes
    setYieldData([
      { name: 'FPO_1', yield: selected1?.yield || 0 },
      { name: 'FPO_2', yield: selected2?.yield || 0 },
    ]);
  }, [selected1, selected2]);

  console.log(incomeData);
  console.log(yieldData);

  return (
    <div className='bg-white rounded-lg p-8 mb-8 shadow-md'>
      <div className='flex'>
        <div className='flex-1 mr-4'>
          <h3 className='text-lg font-semibold mb-2'>Income Chart</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={incomeData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='income' fill='#8884d8' />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='flex-1'>
          <h3 className='text-lg font-semibold mb-2'>Yield Chart</h3>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={yieldData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='yield' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const ComparisonCard = ({ fpo }) => {
  return (
    <div className='flex-1 p-4'>
      <div className='bg-white rounded-lg p-8 text-black shadow-md'>
        <h2 className='text-2xl font-bold mb-4'>
          <h2 className='text-2xl font-bold mb-4'>
            {fpo['Name of FPO  / Address']}
          </h2>
        </h2>
        <div className='border-b border-black mb-4'></div>
        <div className='mb-4 border rounded p-4 shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>
            <AiOutlineFieldNumber className='mr-2' />
            Location
          </h3>
          <p>{`State: ${fpo.State}`}</p>
          <p>{`District: ${fpo.District}`}</p>
        </div>
        <div className='mb-4 border rounded p-4 shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>
            <AiOutlineAim className='mr-2' />
            Commodity Information
          </h3>
          <p>{`Commodity: ${fpo.Commodity}`}</p>
          <p>{`Total Members: ${fpo['Total Members']}`}</p>
          <p>{`Avg Credibility: ${fpo['Avg Credibility']}`}</p>
        </div>
        <div className='mb-4 border rounded p-4 shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>
            <AiOutlineDollar className='mr-2' />
            Financial Information
          </h3>
          <p>{`Income: ${fpo.Income}`}</p>
          <p>{`Yield: ${fpo.yield}`}</p>
        </div>
      </div>
    </div>
  );
};
const Compare = () => {
  const [District, setDistrict] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [Fpo1, setFpo1] = useState('');
  const [Fpo2, setFpo2] = useState('');

  const [fpoName1, setFpoNames1] = useState([]);
  const [fpoName2, setFpoNames2] = useState([]);
  const [selected1, setselected1] = useState(null);
  const [selected2, setselected2] = useState(null);

  const district = [
    'Ariyalur',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kancheepuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Salem',
    'Sivagangai',
    'Thanjavur',
    'Theni',
    'Thiruvarur',
    'Tirunelveli',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Trichy',
    'Tuticorin',
    'Vellore',
    'Villupuram',
    'Virudhunagar',
  ];
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.post('https://api-yani.onrender.com', {
          State: 'Tamil Nadu',
          // District: selectedDistrict || 'Ariyalur',
          District: 'Coimbatore',
        });
        setDistrict(response.data);
        const names = response.data.FPO.map(
          (fpo) => fpo['Name of FPO  / Address']
        );
        setFpoNames1(names);
        setFpoNames2(names);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, [selectedDistrict]);

  useEffect(() => {
    // Check if District.FPO is defined before trying to find the selected FPO data
    if (District.FPO) {
      // Find the selected FPO data based on the FPO name (using Fpo1)
      const selectedData = District.FPO.find(
        (fpo) => fpo['Name of FPO  / Address'] === Fpo1
      );

      // Update the state with the selected FPO data
      setselected1(selectedData);
    }
  }, [Fpo1, District.FPO]);

  useEffect(() => {
    // Check if District.FPO is defined before trying to find the selected FPO data
    if (District.FPO) {
      // Find the selected FPO data based on the FPO name (using Fpo1)
      const selectedData = District.FPO.find(
        (fpo) => fpo['Name of FPO  / Address'] === Fpo2
      );

      // Update the state with the selected FPO data
      setselected2(selectedData);
    }
  }, [Fpo2, District.FPO]);

  return (
    <div className=' text-white p-8 mx-4'>
      <div className='bg-white rounded-lg p-8 mb-8 shadow-md'>
        <h2 className='text-black text-2xl font-bold mb-4'>
          Comparison Of FPO's
        </h2>
        <p className='text-gray-700'>
          FPO comparison based on income, Credibility and various other Relevant
          factors.
        </p>
        {/* <div className='flex mr-5'> */}
        {/* <DropDown
            options={district}
            label={'District'}
            setValue={setSelectedDistrict}
          /> */}
        <div className='flex justify-end'>
          <DropDown options={fpoName1} label={'FPO Name'} setValue={setFpo1} />
          <DropDown options={fpoName2} label={'FPO Name'} setValue={setFpo2} />
        </div>
        {/* </div> */}
      </div>

      {selected1 && selected2 && (
        <Charts selected1={selected1} selected2={selected2} />
      )}
      <div className='flex'>
        {selected1 && <ComparisonCard fpo={selected1} />}
        {selected2 && <ComparisonCard fpo={selected2} />}
      </div>
    </div>
  );
};

export default Compare;
