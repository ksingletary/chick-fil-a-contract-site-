import React from 'react';
import lock from '../../assets/lock.png';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Resources = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='mb-28 ml-2'>
          <img src={lock} alt='Lock Image' className='h-32' />
        </div>
        <div className='-mt-28 mb-1'>
          <div className='relative'>
            {/* This div wraps the input and icon together */}
            <div className='p-1 flex items-center bg-secondary '>
              {/* Input field */}
              <input
                type='text'
                placeholder='Password'
                className='font-apercuRegular text-white w-64 h-12 px-3 outline-none bg-secondary focus:ring-2 focus:ring-black focus:ring-offset-2'
              />
              {/* Icon button */}
              <button
                type='submit'
                className='flex justify-center items-center w-12 h-12  text-gray-400 hover:text-white transition-colors duration-200'
                aria-label='Submit'
              >
                <IoArrowForwardSharp size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
