import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Bell, IndentDecrease } from 'lucide-react';
import Hero from './Hero';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';
import Hero5 from './Hero5';
import Hero6 from './Hero6';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden flex">
      {/* Sidebar */} 
      <Sidebar />
      {/* Main content */}
      <div className="pl-20 md:pl-60 w-full transition-all duration-300">
        <main className="py-6 pr-3 md:pr-2">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className='hidden md:flex gap-4 items-center'>
               <div className='relative'>
               <Bell className='relative' />
               <span className=' bg-red-500 text-white text-xs -top-2 left-3 font-semibold h-5 w-5 rounded-full absolute flex justify-center items-center'>4</span>
               </div>
               <div className='mb-2 relative'>
               <span className='bg-purple-500 relative w-7 h-7 px-3 py-0.5 rounded-full'></span>
               <span className='bg-green-500 w-3 h-3 p-0.5 rounded-full top-4 -right-1 absolute'></span>
               </div>
            </div>
          </div>

          {/* Chart card */}
            <Hero />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero6 />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;