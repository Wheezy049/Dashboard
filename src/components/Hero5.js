import React from 'react'
import BestSelling from './BestSelling'
import TrendingProducts from './TrendingProducts'

function Hero5() {
  return (
    <div className='block md:flex gap-5 items-center w-full mt-5'>
       <BestSelling />
       <TrendingProducts />
    </div>
  )
}

export default Hero5