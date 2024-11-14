import React from 'react'
import Session from './Session'

function TotalProfit() {
  return (
    <div className='mb-4 md:mb-0 w-full md:w-[320px]'>
       <Session title="Total Profit" number='50' percentage={12} color="#1EB564" wid2="200px" />
    </div>
  )
}

export default TotalProfit