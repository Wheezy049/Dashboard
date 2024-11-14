import React from 'react'
import { EllipsisVertical } from 'lucide-react'

function TopCategory() {
  return (
    <div className='bg-white shadow-md mb-5 md:mb-0 justify-between flex rounded py-3 px-3 md:px-6 md:py-4 h-96 w-full md:w-[400px]'>
       <div className='w-full'>
       <div className='flex justify-between w-full items-center'>
          <span>
            <h3 className='text-sm md:text-[18px] font-semibold text-[#23272E]'>Top Selling Category</h3>
            <p className='text-xs md:text-sm text-[#8B909A]'>Total 10.4K Visitors</p>
          </span>
          <span>
            <EllipsisVertical />
          </span>
        </div>
        <div className="relative mt-10">
    <div className="bg-[#0F60FF] w-[166px] h-[166px] md:w-[204px] md:h-[204px] rounded-full flex flex-col justify-center items-center text-white text-center">
        <p className="text-sm">Fashion</p>
        <p className=" text-xl md:text-2xl font-bold">4.567</p>
        <p className="text-xs">Per Day</p>
    </div>
    
    <div className="bg-[#0FB7FF] w-[124px] h-[124px] md:w-[166px] md:h-[166px] z-10  rounded-full flex flex-col justify-center items-center text-white text-center absolute top-[120px] right-4 md:top-16 md:right-10">
        <p className="text-sm">Electronics</p>
        <p className="text-xl md:text-2xl font-bold">3.167</p>
        <p className="text-xs">Per Day</p>
    </div>

    `<div className="bg-[#1EB564] w-[100px] h-[100px] md:w-[124px] md:h-[124px] z-20 rounded-full flex flex-col justify-center items-center text-white text-center absolute -bottom-14 left-0 md:-bottom-12 md:left-16">
        <p className="text-sm">Make-up</p>
        <p className="text-xl font-bold">1.845</p>
        <p className="text-xs">Per Day</p>
    </div>
</div>

       </div>
    </div>
  )
}

export default TopCategory