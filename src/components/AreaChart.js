'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
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
    <div style={{ width: '50%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart width={500} height={400} data={productSales}>
          <YAxis />
          <XAxis />
          <CartesianGrid />
          <Area
            type="monotone"
            fill="#3b82f6"
            stroke="#2563eb"
            dataKey="product1"
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="product2"
            fill="#8b5cf6"
            stroke="#7c3aed"
            stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
