import React from 'react'
import AboutImg from '../assets/operator.jpeg'

const About = () => {
  return (
    <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={AboutImg} alt="operator image" className='max-w-[750px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                {/* Text content section */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 className='text-3xl font-apercuBold text-gray-700'>More Than Chicken, More Than Service</h1>
                    <p className='text-gray-500 font-apercuMedium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Officiis perferendis laborum nisi eveniet dolore blanditiis 
                        corporis modi, aut voluptate non obcaecati quia placeat tempora 
                        veniam odio sint ut iure autem! lo
                    </p>
                    <div className='mt-10'>
                        <button className='primary-btn w-52 '>View Our Vision</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About