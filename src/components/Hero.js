import React from 'react'
import Session from './Session'
import TotalSale from './TotalSale'

function Hero() {
  return (
    <div className='block md:flex gap-5 items-center'>
      <TotalSale />
      <Session title="Sessions" number='16.5' percentage={3} color="#D02626" wid2="240px" />
    </div>
  )
}

export default Hero