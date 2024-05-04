import React from 'react'
import Slider from 'react-slick'
import minis from '../assets/minis.jpeg'
import catering from '../assets/catering-icon.svg'

const Catering = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${minis})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '70vh',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
  return (
    <div style={{ width: '100%', height: '70vh' }} className='mt-10'> 
        <div style={backgroundImageStyle} className="flex items-center justify-end">  
            <div className='relative ml-auto mr-10 h-auto sm:h-72 w-full sm:w-2/5 bg-white p-4 rounded-3xl shadow-strong transition-shadow duration-300 ease-in-out'>
                {/* <!-- SVG Icon positioned in the top right corner --> */}
                <img src={catering} alt="Icon Description" className="absolute top-3 right-3 h-16 w-16 sm:h-20 sm:w-20"/>

                <h1 className='text-xl sm:text-3xl px-5 mt-10 font-apercuBold mb-7 text-secondary'>
                    Morning <span className='text-primary'>Minis</span>, Made with Maryland Hospitality
                </h1>
                <p className='px-8 text-sm sm:text-base'>
                    Breakfast buffets, boardroom lunches, or backyard barbecues - Chick-fil-A Catering brings the flavor, no matter the occasion.
                </p>
            </div>           
        </div>

    </div>
  )
}

export default Catering