import React from 'react'
import loader from '../Infinity.svg'
export default function Spinner() {
  return (
    <div className='text-center my-4'>
      <img src={loader} alt={loader} />
    </div>
  )
}
