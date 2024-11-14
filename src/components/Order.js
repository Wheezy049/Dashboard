import React from 'react'
import { EllipsisVertical, ArrowUp } from 'lucide-react'
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';

function Order() {

  const data = [
    { time: '8am', value: 0 },
    { time: '10am', value: 0 },
    { time: '12am', value: 30 },
    { time: '2am', value: 0 },
    { time: '4m', value: 0 },
    { time: '2pm', value:  19},
    { time: '5pm', value: 0 },
    { time: '9pm', value: 0 },
    { time: '11pm', value: 24 }
  ];

  return (
    <div className='bg-white mb-5 md:mb-0 shadow-md justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-auto w-full md:w-[400px]'>
        <div className='w-full'>
        <div className='flex justify-between items-center'>
              <h3 className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Today Order</h3>
              <span className=''><EllipsisVertical /></span>
          </div>
          <div className='flex justify-between mt-6 items-center'>
              <h3 className='text-sm md:text-[18px] font-bold text-[#23272E]'>16.5K</h3>
              <p className='flex gap-2 items-center text-xs text-[#8B909A] font-medium'>
              <span className='flex gap-1 items-center whitespace-nowrap font-medium text-[#1EB564]'>
                <ArrowUp />
                 6%
              </span>
              vs last 7 days
            </p>
          </div>
          <div className='mt-3 text-[15px] font-medium text-[#8B909A]'>
            <p>Orders Over Time</p>
          </div>
          <div className='w-full md:w-[400px]'>
            <ResponsiveContainer width="100%" height={240}>
          <LineChart
        data={data}
        margin={{
          top: 30,
          right: 40,
          left: 0,
          bottom: 10,
        }}
      >
        <XAxis 
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#666', fontSize: 12 }}
          interval="preserveEnd"
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
      </ResponsiveContainer>
          </div>
        </div>
    </div>
  )
}

export default Order