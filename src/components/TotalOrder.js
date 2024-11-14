import React from 'react'
import Session from './Session'

function TotalOrder() {
  return (
    <div className='mb-4 md:mb-0 w-full md:w-[320px]'>
      <Session title="Total Orders" number='25.7' percentage={6} color="#1EB564" wid2="200px"/>
    </div>
  )
}

export default TotalOrder