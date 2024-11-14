import React from 'react'
import Discount from './Discount'
import TotalProfit from './TotalProfit'
import TotalOrder from './TotalOrder'

function Hero2() {
  return (
    <div className='block md:flex gap-5 items-center w-full mt-5'>
       <TotalOrder />
       <TotalProfit />
       <Discount />
    </div>
  )
}

export default Hero2