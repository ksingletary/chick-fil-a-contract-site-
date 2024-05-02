import React from 'react'
import welcome from '../../assets/welcome.jpeg'

const Process = () => {
  return (
    <div className="relative w-full h-70vh flex justify-center items-center ">
        <img src={welcome} alt="Background" className="absolute w-full h-auto min-h-full min-w-full top-0 left-0 object-cover" style={{ objectPosition: 'center top' }} />
        <p className="text-white text-xl z-10">Centered Content</p>
    </div>
  )
}

export default Process