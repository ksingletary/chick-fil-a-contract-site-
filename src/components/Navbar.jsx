import React, { useState } from 'react';
import logo from '../assets/logo.png';
import pipe from '../assets/pipe-4.svg'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = () => setOpen(false);
  return (
    <>
      <div className='bg-white shadow-lg'>
        {/* Use max-w-7xl and mx-auto for centering and responsive width, px-4 for padding */}
        <div className='container max-w-7xl px-4'>
          {/* Flex container to align logo and navigation */}
          <div className='flex justify-between items-center py-3'>
            {/* Logo section */}
            <div className='flex-shrink-0'>  {/* Ensures the logo part doesn't grow or shrink */}
              <a href="/">
                <img src={logo} alt="logo" className='w-20 h-auto'/>  {/* h-auto ensures the height scales with the width */}
              </a>
            </div>

            {/* Link section */}
            <div className='hidden lg:flex justify-between items-center gap-4'>
              <ul className='hidden lg:flex justify-between items-center gap-4 space-x-4'>  {/* Creates a horizontal list with space between items */}                
                <li><a href="#" className='font-apercuMedium text-primary hover:underline '>Menu</a></li>
                <li><a href="#" className='font-apercuMedium text-primary hover:underline '>Restaurant Vision</a></li>
                <li><a href="#" className='font-apercuMedium text-primary hover:underline mr-60'>Careers</a></li>
                <li><a className='h-11 w-10 mx-auto lg:ml-0 px-6 py-3 cursor-pointer font-apercuMedium bg-primary hover:bg-red-800 transform ease-in-out duration-300 text-center text-white rounded-full shadow-xl'>Become A Leader</a></li>
              </ul>
            </div>
            {/* Responsive Menu for Mobile Device */}
            <div className='lg:hidden'>
                <button onClick={handleOpen}>
                    <FaBars className='text-3xl font-apercuBold text-primary' />
                </button>

                {/* Dropdown menu */}
                {open && (
                    <div className='fixed inset-0 bg-white z-50'>
                        {/* Top bar for logo and close icon */}
                        <div className='flex justify-between items-center px-4 pt-4'>
                            {/* Logo on the left */}
                            <a href="/" className='flex-shrink-0'>
                                <img src={logo} alt="logo" className='w-1/3 h-auto'/>
                            </a>
                            {/* Close button on the right */}
                            <button onClick={handleClose} className=''>
                                <FaTimes className='text-3xl text-primary' />
                            </button>
                        </div>

                        {/* Menu items centered */}
                        <ul className='flex flex-col items-center justify-center space-y-10 mt-32 text-3xl'>
                            <li><a href="#" className='font-apercuMedium text-primary hover:underline'>Menu</a></li>
                            <li><a href="#" className='font-apercuMedium text-primary hover:underline'>Restaurant Vision</a></li>
                            <li><a href="#" className='font-apercuMedium text-primary hover:underline'>Careers</a></li>
                            <li><a href="#" className='h-11 w-48 px-6 py-3 cursor-pointer font-apercuMedium bg-primary hover:bg-red-800 text-center text-white rounded-full shadow-xl'>Become A Leader</a></li>
                        </ul>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
