import React from 'react'
import Session from './Session'

function Discount() {
  return (
    <div className='w-full md:w-[320px]'>
        <Session title="Discounted Account" number='12' percentage={2} color="#D02626" wid2="200px" />
    </div>
  )
}

export default Discount