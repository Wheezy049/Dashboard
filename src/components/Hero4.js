import React from 'react'
import TopCategory from './TopCategory'
import LastTransaction from './LastTransaction'

function Hero4() {
  return (
    <div className='block md:flex gap-5 items-center w-full mt-5'>
        <TopCategory />
        <LastTransaction />
    </div>
  )
}

export default Hero4