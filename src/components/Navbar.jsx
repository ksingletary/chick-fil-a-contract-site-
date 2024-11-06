import React, { useState, useEffect } from 'react';
import cfa from '../assets/cfa.svg';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showingSteeplechase, setShowingSteeplechase] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const interval = setInterval(() => {
            setShowingSteeplechase(prevState => !prevState);
        }, 30000); // Change text every 30 seconds

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`nav-transparent ${scrolled ? 'nav-scrolled' : ''}`}>
                <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                    <div className='flex items-center space-x-3 mt-0'>
                        <Link to="/" className='flex items-center'>
                            <img src={cfa} alt="logo" className={`logo ${scrolled ? 'small' : ''} hover:opacity-80`} />
                        </Link>
                        <h3 className={`text-md font-apercuBold text-white ${scrolled ? 'text-sm' : ''} mr-2`}>
                            {showingSteeplechase ? "Steeplechase" : "Capital Centre"}
                        </h3>
                    </div>

                    <div className='hidden lg:flex w-full justify-between items-center text-md'>
                        <div className='flex flex-grow justify-center ml-72'>
                            <Link to="/process" className='text-white font-apercuRegular hover:text-primary mx-5'>Process</Link>
                            <Link to="/community" className='text-white font-apercuRegular hover:text-primary mx-5'>Community</Link>
                            <Link to="/menu" className='text-white font-apercuRegular hover:text-primary mx-5'>Menu</Link>
                            <Link to="/catering" className='text-white font-apercuRegular hover:text-primary mx-5'>Catering</Link>
                            <div className="relative z-10">
                                <div onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                                    <button className='text-white w-20 pb-2 font-apercuRegular hover:text-primary mx-4'>
                                        About Us
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute top-8 left-0 bg-white shadow-md rounded-lg w-48">
                                            <Link to="/about" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:text-gray-500'>About Our Stores</Link>
                                            <Link to="/contact" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:text-gray-500'>Contact</Link>
                                            <Link to="/referrals" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:text-gray-500'>Referrals</Link>
                                            <Link to="/resources" className='block font-apercuRegular px-4 py-2 text-gray-700 hover:text-gray-500'>Resources</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Link
                            to="https://www.chick-fil-a.com/one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='primary-btn mb-2 transition duration-500 hover:-translate-y-1 hover:bg-primary-dark font-apercuRegular w-44 py-3 px-4 rounded-full'
                            style={{ color: 'white' }}
                        >
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
                            <div className='fixed inset-0 bg-white z-50 overflow-y-auto'>
                                <div className='flex justify-between items-center px-4 pt-4'>
                                    <Link to="/" className='flex-shrink-0'>
                                        <img src={cfa} alt="cfa logo" className='w-1/3 h-auto' />
                                    </Link>
                                    <button onClick={handleClose} className='text-3xl text-primary'>
                                        <FaTimes />
                                    </button>
                                </div>
                                <ul className='flex flex-col items-center justify-center space-y-10 mt-32 text-3xl'>
                                    <li><Link to="/process" className='text-primary hover:underline' onClick={handleClose}>Process</Link></li>
                                    <li><Link to="/community" className='text-primary hover:underline' onClick={handleClose}>Community</Link></li>
                                    <li><Link to="/menu" className='text-primary hover:underline' onClick={handleClose}>Menu</Link></li>
                                    <li><Link to="/catering" className='text-primary hover:underline' onClick={handleClose}>Catering</Link></li>
                                    <li><Link to="/about" className='text-primary hover:underline' onClick={handleClose}>About Our Stores</Link></li>
                                    <li><Link to="/contact" className='text-primary hover:underline' onClick={handleClose}>Contact</Link></li>
                                    <li><Link to="/referrals" className='text-primary hover:underline' onClick={handleClose}>Referrals</Link></li>
                                    <li><Link to="/resources" className='text-primary hover:underline' onClick={handleClose}>Resources</Link></li>
                                    <li>
                                        <a href="https://www.chick-fil-a.com/one" target="_blank" rel="noopener noreferrer" className='text-white bg-primary hover:bg-red-800 px-6 py-3 rounded-full shadow-xl' onClick={handleClose}>
                                            Download CFA One
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;