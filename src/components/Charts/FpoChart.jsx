import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const FpoChart = ({ yieldValue, predictedPrice, updatedAvgCredibility }) => {
  const data = [
    {
      name: 'Yield Value',
      uv: yieldValue,
      pv: yieldValue,
      amt: yieldValue,
    },
    {
      name: 'Predicted Price',
      uv: predictedPrice,
      pv: predictedPrice,
      amt: predictedPrice,
    },
    {
      name: 'Updated Credibility',
      uv: updatedAvgCredibility,
      pv: updatedAvgCredibility,
      amt: updatedAvgCredibility,
    },
  ];
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis dataKey='name' scale='point' padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />

        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='pv' fill='#8884d8' background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FpoChart;
