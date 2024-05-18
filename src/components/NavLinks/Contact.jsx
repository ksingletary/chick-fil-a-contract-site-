import React from 'react'
import location from '../../assets/location.svg';
import mobile from '../../assets/mobile.svg'
import pickup from '../../assets/pickup.svg'
import pickup1 from '../../assets/pickup1.svg'
import catering from '../../assets/catering.svg'
import catering1 from '../../assets/catering-icon.svg'
import dinein from '../../assets/dine-in.svg'
import doordash from '../../assets/doordash.png'
import cfaone6 from '../../assets/cfaone6.jpeg'
import LazyImage from '../LazyLoad/LazyLoad';
import LazyBackground from '../LazyLoad/LazyBackground';

const Contact = () => {
  return (
    <>
        <LazyBackground src={('../../assets/contact.jpeg')} className='background-image-contact min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-7xl font-apercuBold mb-20 text-white'>Contact Us</h1>
            </div>
        </LazyBackground>
        <div className='min-h-[720px] -mt-16 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <p className='font-apercuRegular mb-10 px-10'>
                    For any inquiries, requests for donations, catering questions and all other general questions or comments, please fill out the form below. 
                    And it would be our pleasure to return your message as quickly as possible.
                </p>
                <div className="bg-white shadow-strong ml-8 rounded-xl p-8" style={{ width: '1100px', height: '610px' }}> {/* Main container with fixed dimensions */}
                    <form className="space-y-6 relative">
                        <div className="flex justify-between space-x-4">
                            <div className="w-full">
                                <label className="block text-lg font-apercuMedium">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    required 
                                    className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-lg font-apercuMedium">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    required 
                                    className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between space-x-4">
                            <div className="w-full">
                                <label className="block text-lg font-apercuMedium">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="tel" 
                                    required 
                                    className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-lg font-apercuMedium">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    required 
                                    className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-lg font-apercuMedium">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <select 
                                required 
                                className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md">
                                <option value="">Select Subject</option>
                                <option value="general">General question/comment</option>
                                <option value="catering">Catering</option>
                                <option value="spirit_nights">Spirit Nights</option>
                                <option value="career">Career/Employment</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-apercuMedium">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea 
                                required 
                                className="block w-full p-2 border focus:outline-primary border-gray-300 rounded-md h-40 resize-none"
                            />
                        </div>
                        <div className="flex justify-center absolute -bottom-18 left-0">
                            <button type="submit" className="bg-primary hover:bg-red-700 transition duration-500 hover:-translate-y-1 text-white text-lg font-apercuMedium py-4 px-6 rounded-full">
                                Submit Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='min-h-[720px] mt-24 bg-gray-100 flex items-center justify-center'> {/* Flexbox for vertical centering */}
            <div className='container flex justify-between mt-10 w-full px-10'> {/* Flex container for both sides */}
                
                {/* Left Side - Capital Centre */}
                <div className='flex flex-col w-1/2 pr-8'> {/* Half width with padding to separate the columns */}
                    <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center mb-4"> {/* Adjusted circle size and added margin-bottom */}
                        <img src={location} alt="Capital Centre location icon" className='h-full w-full'/> 
                    </div>
                    <h1 className='font-apercuBold text-secondary text-5xl mb-10'>
                        Capital Centre
                    </h1>
                    <p className='font-apercuRegular text-gray-600 text-lg mb-16'>
                        1040 Shoppers Way<br/>Largo, MD 20774
                    </p>

                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>HOURS:</h2>
                    <p className='font-apercuRegular text-lg text-gray-600 mb-16'>
                        Monday - Saturday: 6:00 AM-10:00 PM EST <br /> Sunday: Closed
                    </p>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>AMENITIES AT THIS RESTAURANT</h2>
                    <p className='font-apercuRegular text-gray-600 mb-16'>
                        Mobile Ordering, Drive-thru, Catering Pickup, Catering Delivery, WiFi, Breakfast
                    </p>
                    <div className='flex flex-row space-x-6 -ml-6'>
                        <img src={mobile} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={pickup} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={pickup1} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={catering} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={catering1} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={dinein} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={doordash} alt="" className='h-16 w-16 -mt-12 '/>
                    </div>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mt-6 mb-4'>SERVICE OPTIONS</h2>
                    <p className='font-apercuRegular text-gray-600 mb-16'>
                        Drive-thru, Carry-out, Curbside, Dine-in, Delivery, DoorDash
                    </p>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>PHONE NUMBER:</h2>
                    <p className='font-apercuRegular underline text-primary mb-4'>
                        (301) 333-1981
                    </p>
                </div>

                {/* Right Side - Steeplechase */}
                <div className='flex flex-col w-1/2 pr-8 ml-40'> {/* Half width with padding to separate the columns */}
                    <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center mb-4"> {/* Adjusted circle size and added margin-bottom */}
                        <img src={location} alt="Capital Centre location icon" className='h-full w-full'/> 
                    </div>
                    <h1 className='font-apercuBold text-secondary text-5xl mb-10'>
                        Steeplechase
                    </h1>
                    <p className='font-apercuRegular text-gray-600 text-lg mb-16'>
                        9121 Alaking Ct <br /> Capitol Heights, MD 20743
                    </p>

                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>HOURS:</h2>
                    <p className='font-apercuRegular text-lg text-gray-600 mb-16'>
                        Monday - Saturday: 6:00 AM-10:00 PM EST <br /> Sunday: Closed
                    </p>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>AMENITIES AT THIS RESTAURANT</h2>
                    <p className='font-apercuRegular text-gray-600 mb-16'>
                        Mobile Ordering, Drive-thru, Catering Pickup, Catering Delivery, WiFi, Breakfast
                    </p>
                    <div className='flex flex-row space-x-6 -ml-6 '>
                        <img src={mobile} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={pickup} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={pickup1} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={catering} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={catering1} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={dinein} alt="" className='h-16 w-16 -mt-12 '/>
                        <img src={doordash} alt="" className='h-16 w-16 -mt-12 '/>
                    </div>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mt-6 mb-4'>SERVICE OPTIONS</h2>
                    <p className='font-apercuRegular text-gray-600 mb-16'>
                        Drive-thru, Carry-out, Curbside, Dine-in, Delivery, DoorDash
                    </p>
                    <h2 className='font-CaeciliaSemi text-gray-600 text-md mb-4'>PHONE NUMBER:</h2>
                    <p className='font-apercuRegular underline text-primary mb-4'>
                        (301) 324-9515
                    </p>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center py-20 sm:py-0 -mt-10'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-4xl font-apercuBold text-secondary'>Every Bite Counts! Earn Free Rewards with Chick-fil-A One</h1>
                        <p className='text-gray-500 font-apercuMedium'>
                        Stop waiting in line, start earning rewards! Download the Chick-fil-A One App and order your favorite meals ahead of time. 
                        Plus, you'll unlock exclusive benefits and free rewards just for being an app user. It's the perfect way to make your Chick-fil-A experience even more delicious and convenient.
                        </p>
                        <a href='https://www.chick-fil-a.com/one' className='mt-6'>
                            <button className='primary-btn w-72  transition duration-500 hover:-translate-y-1 '>Download Chick-fil-A One Today</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <LazyImage
                            src={cfaone6}
                            alt="located map image"
                            className='max-w-[650px] w-full mx-auto shadow-1 rounded-lg shadow-strong'
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact