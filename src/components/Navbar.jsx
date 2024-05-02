import React, { useState } from 'react';
import cfa from '../assets/cfa.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import location from '../assets/location.svg';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='nav-transparent top-0 left-0 w-full z-10'>
                <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                    {/* Left side - Logo and Switch Stores button */}
                    <div className='flex items-center space-x-3'>
                        <a href="/" className='flex items-center'>
                            <img src={cfa} alt="logo" className='w-20 h-auto'/>
                        </a>
                        <button className='flex items-center space-x-2'>
                            <img src={location} alt="location icon" className='h-10 w-10'/>
                            <span className='text-sm font-apercuBold text-primary hover:underline'>Capital Centre</span>
                        </button>
                    </div>

                    <div className='hidden lg:flex w-full justify-between items-center text-lg'>
                        {/* Centered Links */}
                        <div className='flex flex-grow justify-center mr-48'>
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Process</a>
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Growth</a>
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Careers</a>
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Menu</a>
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Community</a>                            
                            <a href="#" className='text-white font-apercuBold hover:text-primary mx-5'>Resources</a>

                        </div>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className='lg:hidden'>
                        <button onClick={handleOpen} className='text-3xl text-white'>
                            <FaBars />
                        </button>

                        {/* Mobile Dropdown Menu */}
                        {open && (
                            <div className='fixed inset-0 bg-white z-50'>
                                <div className='flex justify-between items-center px-4 pt-4'>
                                    <a href="/" className='flex-shrink-0'>
                                        <img src={cfa} alt="cfa logo" className='w-1/3 h-auto'/>
                                    </a>
                                    <button onClick={handleClose} className='text-3xl text-primary'>
                                        <FaTimes />
                                    </button>
                                </div>
                                <ul className='flex flex-col items-center justify-center space-y-10 mt-32 text-3xl'>
                                    <li><a href="#" className='text-primary hover:underline'>Process</a></li>
                                    <li><a href="#" className='text-primary hover:underline'>Growth</a></li>
                                    <li><a href="#" className='text-primary hover:underline'>Careers</a></li>
                                    <li><a href="#" className='text-primary hover:underline'>Menu</a></li>
                                    {/* Community is where testimonials will go */}
                                    <li><a href="#" className='text-primary hover:underline'>Community</a></li> 
                                    <li><a href="#" className='text-primary hover:underline'>Resources</a></li> 
                                    <li><a href="#" className='text-white bg-primary hover:bg-red-800 px-6 py-3 rounded-full shadow-xl'>Become A Leader</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
