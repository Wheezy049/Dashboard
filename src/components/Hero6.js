import React from 'react'
import Order from './Order'
import RecentOrders from './RecentOrders'

function Hero6() {
  return (
    <div className='block gap-3 md:flex items-center w-full mt-5'>
        <Order />
        <RecentOrders />
    </div>
  )
}

export default Hero6