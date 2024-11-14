import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronUp, ChevronDown } from 'lucide-react';

function Users() {

  const data = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    value: Math.random() * 50 + 30
  }));

  const CountryData = [
    {
      country: "United States",
      value: "30k",
      percentage: 25.8,
      flagCode: "US",
      barWidth: 70,
    },
    {
      country: "Brazil",
      value: "26k",
      percentage: -16.2,
      flagCode: "BR",
      barWidth: 45,
    },
    {
      country: "India",
      value: "22k",
      percentage: 12.3,
      flagCode: "IN",
      barWidth: 37,
    },
    {
      country: "Australia",
      value: "17k",
      percentage: -11.9,
      flagCode: "AU",
      barWidth: 20,
    },
  ];

  return (
    <div className='bg-white shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 w-full h-auto md:h-[410px] md:w-[400px]'>
       <div className='w-full'>
         <div>
           <p className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Users in last 30 minutes</p>
           <h3 className='text-[24px] md:text-[32px] font-bold text-[#23272E]'>16.5k</h3>
           <p className='text-xs md:text-sm text-[#8B909A] font-medium'>Users per minutes</p>
         </div>
         <div className='mt-3 w-full md:w-[380px]'>
          <ResponsiveContainer width="100%" height={80}>
         <BarChart
        data={data}
        barSize={15} // Increased bar size to remove gaps
        barGap={0}  // Remove gap between bars
        barCategoryGap={0} // Remove category gap
      >
        <XAxis hide={true} />
        <YAxis hide={true} />
        <Bar 
          dataKey="value" 
          fill="#2563eb"
          radius={[2, 2, 0, 0]}
        />
      </BarChart>
      </ResponsiveContainer>
         </div>
         <div className='mt-3'>
         {CountryData.map((item) => (
        <div key={item.country} className="flex items-center space-x-4">
          {/* Flag and Country Info */}
          <div className="w-32 flex items-center space-x-3">
            <div className="w-8 h-8 overflow-hidden rounded-full border border-gray-200">
              <img
                src={`/api/placeholder/32/32`}
                alt={`${item.country} flag`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{item.value}</span>
              <span className=" text-xs md:text-sm text-gray-500">{item.country}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex-grow h-2 bg-gray-100 rounded-full">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${item.barWidth}%` }}
            />
          </div>

          {/* Percentage */}
          <div className={`w-20 flex items-center space-x-1 ${
            item.percentage > 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            {item.percentage > 0 ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
            <span className="font-medium">
              {Math.abs(item.percentage)}%
            </span>
          </div>
        </div>
      ))}
         </div>
       </div>
    </div>
  )
}

export default Users