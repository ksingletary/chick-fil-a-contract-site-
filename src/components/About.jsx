import React from 'react';
import AboutImg from '../assets/operator.jpeg';
import ServingImg from '../assets/serving.jpeg';
import divider from '../assets/divider.svg'
import located from '../assets/located.jpeg'

const About = () => {
  return (
    <>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='relative'>
                    <div className='flex justify-center items-center mb-24'>
                        <div className="relative z-10">
                            <h1 className='font-apercuBold text-primary text-7xl'>Chick-Fil-A <span className='text-secondary'>Capital Centre</span></h1>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-36 flex justify-center items-center mb-20'>
                        <img src={divider} alt="Divider" />
                    </div>
                    <div className='flex justify-center flex-col items-center mb-28'>
                        <h1 className='font-apercuBold text-xl text-gray-600 my-2'>THE SHARED VISION OF CHICK-FIL-A AND CHICK-FIL-A Capital Centre/Steeplechase</h1>
                        <h2 className='font-apercuRegular text-xl text-gray-600 my-2'>To be the World’s Most <span className='font-apercuBold text-primary'>Caring</span> Company by Winning Hearts Everyday</h2>

                    </div>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={ServingImg} alt="cfa image" className='max-w-[750px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        {/* Header Image */}
                        <h1 className='text-4xl font-apercuBold text-secondary'>Our Vision</h1>
                        <p className='text-gray-500  font-apercuMedium'>
                        To be Maryland's beacon of hospitality, nourishing communities with delicious food and remarkable service. 
                        We cultivate servant leaders who leave a positive impact on every guest and every corner of our state.
                        </p>
                        <div className='mt-10'>
                            <button className='primary-btn w-52 '>View Our Vision</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[250px] flex justify-center items-center py-20 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-4xl font-apercuBold text-secondary'>Serving with Southern Charm</h1>
                        <p className='text-gray-500 font-apercuMedium'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Officiis perferendis laborum nisi eveniet dolore blanditiis 
                            corporis modi, aut voluptate non obcaecati quia placeat tempora 
                            veniam odio sint ut iure autem! lo
                        </p>
                        <div className='mt-10'>
                            <button className='primary-btn w-52 '>Where Are We?</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={located} alt="located map image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;
