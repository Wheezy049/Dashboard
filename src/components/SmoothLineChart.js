import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'MON', sales: 3500, cost: 2000 },
  { day: 'TUE', sales: 4600, cost: 3800 },
  { day: 'WED', sales: 6000, cost: 4000 },
  { day: 'THU', sales: 5500, cost: 3000 },
  { day: 'FRI', sales: 6000, cost: 4000 },
  { day: 'SAT', sales: 6500, cost: 5700 },
  { day: 'SUN', sales: 7000, cost: 6000 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded border">
        {payload.map((item, index) => (
          <div key={index} className="text-sm">
            <span className="font-medium" style={{ color: item.color }}>
              {item.name}: 
            </span>
            <span className="ml-1">
              ${item.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const SmoothLineChart = () => {
  return (
    <div className="w-[210px] md:w-[300px] h-[100px] md:h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
         data={data}
         margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
         >
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: '12', fill: '#8B909A' }}
            dy={10}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sales"
            stroke="#0F60FF"
            strokeWidth={2}
            dot={false}
            tension={0.4}
          />
          <Line
            type="natural"
            dataKey="cost"
            stroke="#0FB7FF"
            strokeWidth={2}
            dot={false}
            tension={0.4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmoothLineChart;