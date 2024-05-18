import React from 'react';
import { Link } from 'react-router-dom';
import LazyBackground from './LazyLoad/LazyBackground';

const Hero = () => {
  return (
    <LazyBackground src={('../assets/largo1.jpeg')} className='background-image min-h-screen flex justify-center items-center'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6 font-apercuBold text-white text-center'>
          Serving with Joy, Leaving a Legacy.
        </h1>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mt-4'>
          <a href='https://www.chick-fil-a.com/one'>
            <button className='bg-primary hover:bg-red-800 transition duration-500 hover:-translate-y-1 text-white font-bold py-3 px-6 rounded-full shadow-lg'>
              Earn Rewards with Our App
            </button>
          </a>
          <Link to='/about'>
            <button className='bg-secondary transition duration-500 hover:-translate-y-1 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg'>
              More About Our Stores
            </button>
          </Link>
        </div>
      </div>
    </LazyBackground>
  );
};

export default Hero;
