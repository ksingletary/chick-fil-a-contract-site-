import React, { useState } from 'react';
import cfa from '../assets/cfa.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import location from '../assets/location.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='nav-transparent top-0 left-0 w-full z-10'>
                <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                    {/* Left side - Logo and Switch Stores button */}
                    <div className='flex items-center space-x-3 mt-4'>
                        <a href="/" className='flex items-center'>
                            <img src={cfa} alt="logo" className='w-28 h-auto'/>
                        </a>
                        <button className='flex items-center '>
                            <span className='text-lg font-apercuBold text-white hover:underline mr-2'>Capital Centre</span>
                        </button>
                    </div>


                    <div className='hidden lg:flex w-full justify-between items-center text-md '>
                        {/* Centered Links */}
                        <div className='flex flex-grow justify-center ml-80'>
                            <Link to="/process" className='text-white font-apercuRegular hover:text-primary mx-5'>Process</Link>
                            <Link to="/community" className='text-white font-apercuRegular hover:text-primary mx-5'>Community</Link>
                            <a href="https://www.chick-fil-a.com/locations/md/capital-centre" target="_blank" rel="noopener noreferrer" className='text-white font-apercuRegular hover:text-primary mx-5'>Menu</a>
                            <Link to="/referrals" className='text-white font-apercuRegular hover:text-primary mx-5'>Referrals</Link>
                            <div className="relative z-10">
                                <button className='text-white w-20 font-apercuRegular hover:text-primary mx-5' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                                    About Us
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute top-full mt-2 bg-white shadow-md rounded-lg w-48">
                                        <Link to="/mission" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:bg-gray-100'>About Us</Link>
                                        <Link to="/team" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:bg-gray-100'>Contact</Link>
                                        <Link to="/history" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:bg-gray-100'>Resources</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Link to="/download-cfa-one" className='primary-btn hover:bg-primary-dark text-white font-apercuRegular w-44 py-3 px-4 rounded-full'>
                            Download CFA One
                        </Link>
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
