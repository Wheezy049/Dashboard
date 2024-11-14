import React, { useState } from 'react'
import NavItem from './NavItem'
import { Home, Users, Settings, IndentDecrease, ShoppingCart, TicketSlash, Circle, FileText, Star, CirclePlus, Box, CircleUser } from 'lucide-react';

function Sidebar() {

  return (
    <div className='fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out'>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#23272E] hidden md:block">evally</h2>
          <span className='block'><IndentDecrease /></span>
        </div>
        
        <nav className="mt-3">
          <span className=' hidden md:block text-[#8B909A] px-6 text-xs'>Main Menu</span>
          <NavItem icon={<Home className="h-4 w-4" />} text="Dashboard" active />
          <NavItem icon={<ShoppingCart className="h-4 w-4" />} text="Order Management" />
          <NavItem icon={<Users className="h-4 w-4" />} text="Customers" />
          <NavItem icon={<TicketSlash className="h-4 w-4" />} text="Coupon Code" />
          <NavItem icon={<Circle className="h-4 w-4" />} text="Categories" />
          <NavItem icon={<FileText className="h-4 w-4" />} text="Transaction" />
          <NavItem icon={<Star className="h-4 w-4" />} text="Brand" />
          <span className=' hidden md:block text-[#8B909A] px-6 pt-3 text-xs'>Products</span>
          <NavItem icon={<CirclePlus className="h-4 w-4" />} text="Add Products" />
          <NavItem icon={<Box className="h-4 w-4" />} text="Product List" />
          <span className=' hidden md:block text-[#8B909A] px-6 pt-3 text-xs'>Admin</span>
          <NavItem icon={<CircleUser className="h-4 w-4" />} text="Manage Admin" />
          <NavItem icon={<Settings className="h-4 w-4" />} text="Admin Roles" />
        </nav>

      </div>
  )
}

export default Sidebar