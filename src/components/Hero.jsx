import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='min-h-[550px sm:min-h-[600px] flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    {/* text content section */}
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                            <h1 className='text-8xl lg:text-[8rem] font-apercuBold bg-clip-text text-primary'>
                                Capital
                                <span className='text-3xl font-apercuBold'>Centre</span>
                            </h1>
                            <p className='text-md mt-6 font-apercuMedium text-gray-700'>
                                {" "}
                                Our Mission is to provide excellent food and excellent service with <span className='text-primary'>care</span>
                            </p>
                            <div>
                                <button className='primary-btn mt-8'>Uniform Store</button>
                            </div>
                        </div>
                    {/* Image section */}
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Hero