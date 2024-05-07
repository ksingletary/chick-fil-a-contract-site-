import React from 'react';
import ServingImg from '../assets/serving.jpeg';
import biscuit from '../assets/biscuit.jpeg'
import cherryberry from '../assets/cherryberry.jpeg'
import { Link } from 'react-router-dom';
import boxlunch from '../assets/boxlunch.png'


const About = () => {
  return (
    <>
        <div className='min-h-[250px] flex justify-center items-center py-20 sm:py-0 mt-14'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-5xl font-apercuBold text-secondary'>Sip into spring with our seasonal Cherry Berry beverage lineup. Which ones will you choose?</h1>
                        <p className='text-secondary font-apercuRegular'>Download the Chick-fil-A app and order today.</p>
                        <a href='https://order.chick-fil-a.com/get-started' className='w-52'>
                            <button className='primary-btn w-52 transition duration-500 hover:-translate-y-1'>Order Now!</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cherryberry} alt="located map image" className='max-w-[750px] w-full mx-auto rounded-lg shadow-strong '/>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={ServingImg} alt="cfa image" className='max-w-[750px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 ml-10'>
                        {/* Header Image */}
                        <h1 className='text-4xl font-apercuBold text-secondary'>Our Vision</h1>
                        <p className='text-gray-500  font-apercuMedium'>
                        To be Maryland's beacon of hospitality, nourishing communities with delicious food and remarkable service. 
                        We cultivate servant leaders who leave a positive impact on every guest and every corner of our state.
                        </p>
                        <p className='text-gray-500  font-apercuMedium'>
                        Chick-fil-A's vision extends beyond simply serving chicken. 
                        We aim to honor our beliefs by acting as responsible stewards of our resources and positively impacting everyone we interact with. 
                        This means creating a welcoming atmosphere for employees and customers alike, while fostering a strong sense of community involvement.
                        </p>
                        <Link to="/about" className='mt-10 w-52'>
                            <button className='primary-btn w-52 transition duration-500 hover:-translate-y-1 '>Learn More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center'>
            <div className='container'>
                <div className='flex flex-col justify-center items-center w-full'>
                    <h1 className="text-5xl ml-8 font-apercuBold text-secondary mb-6 self-start">Something For Everyone:</h1>
                    <div className='flex items-center justify-center sm:justify-start gap-7'>
                        {/* Each card is refactored below */}
                        <Link to="/more/cherry-berry" className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform-gpu' style={{ width: '346.66px', height: '517.78px' }}>
                            <img src={cherryberry} alt="Paperwork" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                            <p className='text-xl font-apercuBold text-center -mt-6'>Spring has sprung at Chick-fil-A! Dive into our refreshing new line of berry-licious beverages.</p>
                            <p className='font-apercuRegular mt-5'>Enjoy a taste of spring with Chick-fil-A's new seasonal berry drinks!</p>
                        </Link>
                        
                        <Link to="/more/catering-solutions" className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform-gpu' style={{ width: '346.66px', height: '517.78px' }}>
                            <img src={boxlunch} alt="Job Descriptions" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                            <p className='text-xl font-apercuBold text-center -mt-6'>The Perfect Spring Menu Made Easy: Catering Solutions for Busy Hosts</p>
                            <p className='font-apercuRegular mt-5'>Don't stress about spring gatherings! Chick-fil-A catering offers delicious options to fuel any get-together, big or small.</p>
                        </Link>
                        
                        <a href="https://www.chick-fil-a.com/menu/chick-fil-a-chicken-biscuit" className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform-gpu' style={{ width: '346.66px', height: '517.78px' }}>
                            <img src={biscuit} alt="Direct Deposit Form" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                            <p className='text-xl font-apercuBold text-center -mt-6'>Chicken Biscuit</p>
                            <p className='font-apercuRegular mt-5'>A hand-breaded, pressure-cooked chicken breast seasoned with a fiery spice blend, nestled on a toasted buttered bun with two pickles underneath.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default About;
