import React from 'react'
import spicy from '../assets/spicy.png'
import uniform from '../assets/uniform.svg'
import jobdescr from '../assets/jobdescr.svg'
import card from '../assets/card.svg'
import divider from '../assets/divider.svg'
import largo from '../assets/largo.jpeg'

const Hero = () => {
  return (
    <>
        <div className='min-h-[550px] sm:min-h-[600px] flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-4 mt-32 pt-12 sm:pt-0 text-center sm:text-left'>
                        <h1 className='text-8xl lg:text-[8rem] font-apercuBold bg-clip-text text-primary'>
                            Welcome
                            
                        </h1>
                        <p className='text-md mt-6 font-apercuMedium text-gray-800'>
                            {" "}Our Mission is to provide excellent food and excellent service with <span className='text-primary'>care</span>
                        </p>
                        <div className='flex items-center justify-center sm:justify-start gap-4'> {/* Aligns buttons next to each other */}
                            <button className='flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out'>
                                <img src={uniform} alt="Uniform Store" className='h-12 w-12' /> {/* Adjusted image size for better button fit */}
                                <span className='text-sm font-medium mt-2'>Uniform Store</span>
                            </button>
                            {/* Placeholder for additional buttons */}
                            <button className='flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out'>
                                <img src={jobdescr} alt="job descriptions" className='h-12 w-12' />
                                <span className='text-sm font-medium mt-2'>Job Descriptions</span>
                            </button>
                            <button className='flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out'>
                                <img src={card} alt="credit card" className='h-12 w-12' />
                                <span className='text-sm font-medium mt-2'>Direct Deposit Form</span>
                            </button>
                        </div>
                    </div>
                    

                    {/* Image section */}
                    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'> 
                        <img src={largo} alt="spicy sandwhich" className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1 rounded-xl shadow-strong' />
                        
                    </div>
                </div>

            </div>
            
        </div>
        <div className='justificy-center ml-40'>
            <img src={divider} alt="" />
        </div>
    </>
  )
}

export default Hero