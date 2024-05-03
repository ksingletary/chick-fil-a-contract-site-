import React, { useState } from 'react';
import cfa from '../assets/cfa.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import location from '../assets/location.svg';
import { Link } from 'react-router-dom';


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
                        <button className='flex items-center'>
                            <div className="bg-white rounded-full py-0 px-1 flex items-center justify-center"> {/* Adds white circle background */}
                                <img src={location} alt="location icon" className='h-10 w-10'/> {/* Adjusted size inside the circle */}
                            </div>
                            <span className='text-sm font-apercuBold text-primary hover:underline'>Capital Centre</span>
                        </button>
                    </div>


                    <div className='hidden lg:flex w-full justify-between items-center text-lg'>
                        {/* Centered Links */}
                        <div className='flex flex-grow justify-center ml-96'>
                            <Link to="/process" className='text-white font-apercuBold hover:text-primary mx-5'>Process</Link>
                            <a href="https://www.chick-fil-a.com/locations/md/capital-centre" target="_blank" rel="noopener noreferrer" className='text-white font-apercuBold hover:text-primary mx-5'>Menu</a>
                            <Link to="/community" className='text-white font-apercuBold hover:text-primary mx-5'>Community</Link>
                            <Link to="/resources" className='text-white font-apercuBold hover:text-primary mx-5'>Resources</Link>
                            <Link to="/referrals" className='text-white font-apercuBold hover:text-primary mx-5'>Referrals</Link>

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
                                    <li><Link to="/process" className='text-primary hover:underline'>Process</Link></li>
                                    <li><Link to="/careers" className='text-primary hover:underline'>Careers</Link></li>
                                    <li><Link to="/menu" className='text-primary hover:underline'>Menu</Link></li>
                                    <li><Link to="/community" className='text-primary hover:underline'>Community</Link></li>
                                    <li><Link to="/resources" className='text-primary hover:underline'>Resources</Link></li>
                                    <li><Link to="/leadership" className='text-white bg-primary hover:bg-red-800 px-6 py-3 rounded-full shadow-xl'>Become A Leader</Link></li>
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
