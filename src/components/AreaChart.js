'use client';

import {
  Bar,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  {
    name: 'Jan',
    product1: 4000,
    product2: 2400,
  },
  {
    name: 'Feb',
    product1: 3000,
    product2: 2210,
  },
  {
    name: 'Mar',
    product1: 2000,
    product2: 2290,
  },
  {
    name: 'Apr',
    product1: 2780,
    product2: 2000,
  },
  {
    name: 'May',
    product1: 1890,
    product2: 2181,
  },
  {
    name: 'Jun',
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <div>
      <BarChart width={500} height={400} data={productSales}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="5, 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="product1" fill="blue" type="monotone" />
        <Bar dataKey="product2" fill="purple" type="monotone" />
      </BarChart>
    </div>
  );
};

export default AreaChartComponent;
