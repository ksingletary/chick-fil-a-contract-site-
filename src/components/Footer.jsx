import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import cfa from '../assets/cfa.svg'

const Footer = () => {
    return (
        <footer className="bg-footer text-white py-6 ">
            <div className="text-center space-y-12">
                <div className='flex items-center space-x-3'>
                    <a href="/" className='flex items-center'>
                        <img src={cfa} alt="logo" className='w-28 h-auto'/>
                    </a>
                    <button className='flex items-center '>
                        <span className='text-sm font-apercuBold text-primary hover:underline mr-2'>Capital Centre</span>
                    </button>
                </div>
                {/* Connect With Us */}
                <div className="">
                    <h3 className="text-lg font-CaeciliaBold mb-3">CONNECT WITH US</h3>
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4 mt-10">
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaFacebook  className='h-9 w-9'/>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaInstagram className='h-9 w-9' />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <FaTwitter className='h-9 w-9' />
                        </a>
                    </div>
                </div>
                {/* Address and Phone Number */}
                <div className="mb-6 font-apercuRegular ">
                    <p>1040 Shoppers Way, Largo, MD 20774 • (123) 456-7890 </p>
                    <p>Monday-Saturday: 6:00-10pm • Sunday: Closed</p>
                </div>
                {/* Trademark Phrases */}
                <div className="mb-6 font-apercuRegular ">
                    <p>This Chick-fil-A restaurant unit is an independently owned and operated franchise business.</p>
                    <p>© 2024 CFA Properties, Inc., Chick-fil-A®, Chick-fil-A Stylized®, Eat Mor Chikin® and the Chick-fil-A Cows® are registered trademarks of CFA Properties, Inc.</p>
                </div>
                {/* Footer Links */}
                <div className='font-apercuRegular '>
                    <a href="#" className="text-white hover:text-gray-400 underline">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-white hover:text-gray-400 underline">Cookie Policy</a>
                    <span className="mx-2">|</span>
                    <a href="#" className="text-white hover:text-gray-400 underline">Legal Notice</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
