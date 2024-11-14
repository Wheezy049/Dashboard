import React from 'react'
import { ArrowDown } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

function Session({title, number, percentage, color, wid2}) {

  const data = [
    { x: 160, y: 200 },
    { x: 70, y: 90 },
    { x: 40, y: 70 },
    { x: 150, y: 180 },
    { x: 170, y: 200 },
    { x: 100, y: 120 }
  ];

  return (
    <div className={`bg-white shadow-md flex rounded py-2 px-3 md:px-5 md:py-4 h-auto w-full md:w-auto`}>
        <div className='w-1/3 whitespace-nowrap'>
          <div>
           <p className=' text-sm md:text-[18px] font-semibold text-[#23272E]'>{title}</p>
           <p className='text-xs md:text-sm text-[#8B909A] font-medium'>Last 7 days</p>
           </div>
           <div className='mt-2'>
            <h3 className='text-[24px] md:text-[32px] font-bold text-[#23272E]'>{number}K</h3>
            <p className='flex gap-2 items-center text-xs text-[#8B909A] font-medium'>
              <span className='flex gap-1 items-center whitespace-nowrap font-medium' style={{ color }}>
                <ArrowDown />
                 {percentage}%
              </span>
              vs last 7 days
            </p>
           </div>
        </div>
        <div className="h-[100px] mt-7 w-1/2" style={{ width: wid2}}>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line 
          type="natural" 
          dataKey="y" 
          stroke={color} 
          strokeWidth={2} 
          dot={false}
        />
        <XAxis 
          dataKey="x" 
          axisLine={false} 
          tickLine={false} 
          tick={false}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={false}
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Session