import { ArrowUp } from 'lucide-react'
import React from 'react'
import SmoothLineChart from './SmoothLineChart'

function TotalSale() {
  return (
    <div className='bg-white shadow-md justify-between mb-5 md:mb-0 block  md:flex  rounded py-2 px-3 md:py-4 md:px-6 h-auto w-full md:w-[580px]'>
      <div className='mb-5'>
        <div>
        <h1 className='text-sm md:text-[18px] text-[#23272E] font-semibold'>Total Sales & Costs</h1>
        <p className='text-xs md:text-sm text-[#8B909A] font-medium'>Last 7 days</p>
        </div>
        <div className='mt-5'>
            <span className='flex gap-2'>
                <h1 className='text-base md:text-2xl text-[#23272E] font-bold'>$350K</h1>
                <h4 className='text-[#0FB7FF] text-sm md:text-[18px] font-bold mt-1'>$235K</h4>
            </span>
            <div className='flex gap-2 items-center text-xs md:text-sm'>
                 <span className='flex gap-1 items-center text-[#1EB564]'>
                    <ArrowUp />
                    <span>8.56k</span>
                 </span>
                 <p className=' text-[#8B909A] font-medium'>vs last 7 days</p>
            </div>
        </div>
      </div>
      <div className=''>
        <div className='flex items-center gap-4'>
            <span className='flex gap-1 items-center'>
              <span className='bg-[#0F60FF] w-3 h-3 p-0.5 rounded-full'></span>
              <span className='text-xs text-[#23272E]'>Sales</span>
            </span>
            <span className='flex gap-1 items-center'>
              <span className='bg-[#0FB7FF] w-3 h-3 p-0.5 rounded-full'></span>
              <span className='text-xs text-[#23272E]'>Cost</span>
            </span>
        </div>
        <SmoothLineChart />        
      </div>
    </div>
  )
}

export default TotalSale