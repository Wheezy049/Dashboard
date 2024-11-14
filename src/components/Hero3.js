import React from 'react'
import Users from './Users'
import ToatlReport from './ToatlReport'

function Hero3() {
  return (
    <div className='block md:flex gap-5 items-center w-full mt-5'>
        <ToatlReport />
        <Users />
    </div>
  )
}

export default Hero3