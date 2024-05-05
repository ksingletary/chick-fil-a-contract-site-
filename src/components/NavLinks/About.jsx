import React from 'react'
import vision from '../../assets/vision.jpeg'
import operator from '../../assets/operator.png'
import location from '../../assets/location.svg';
import mobile from '../../assets/mobile.svg'
import pickup from '../../assets/pickup.svg'
import pickup1 from '../../assets/pickup1.svg'
import catering from '../../assets/catering.svg'
import catering1 from '../../assets/catering-icon.svg'
import dinein from '../../assets/dine-in.svg'
import doordash from '../../assets/doordash.png'

const About = () => {
  return (
    <>
        <div className='background-image-about min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-7xl font-apercuBold mb-20 text-white '>About Us, <br />Capital Centre & Steeplechase</h1>
            </div>
        </div>
        <div className='min-h-[620px] -mt-28 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={vision} alt="cfa image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center mb-10 gap-6 sm:pt-0'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary mb-6'>What We Strive For</h1>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            At Chick-fil-A Capital Centre and Steeplechase, our vision extends far beyond delicious food and friendly service. 
                            We strive to be the world's most caring company, weaving genuine care into every interaction. 
                            This means approaching our work with a spirit of generosity, treating everyone we encounter – from valued guests to fellow team members and our community – with honor, dignity, and respect. 
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            We believe true success lies not just in profitability, but in the positive impact we leave on those around us. 
                            Whether it's sharing our time and talents to support local causes, offering a listening ear to a customer, or simply remembering a guest's favorite order, these small acts of kindness are the foundation of who we are.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[750px] flex justify-center items-center py-20 sm:py-0 -mt-28'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col mt-28 justify-center gap-2 sm:pt-0'>
                        <h1 className='text-md font-apercuRegular text-secondary'>Meet The Operator:</h1>
                        <h2 className='text-md text-3xl font-apercuBold text-secondary'>Keith Singletary</h2>

                        <p className='text-gray-500 font-apercuMedium mt-4'>
                            Keith graduated from Cheyney University in [Year of Graduation]. After dedicating a number of years to the Red Cross, his passion for service took a different form.  
                            In 1999, Keith scratched his entrepreneurial itch and opened his first Chick-fil-A location in a mall setting. 
                            Following the success of that store, he continued to grow his business, opening his first free-standing Chick-fil-A in 2003, and his second in 2007. 
                        </p>
                        <p className=' text-gray-500 font-apercuMedium mt-4'>
                            As the owner/operator of Chick-fil-A Capital Centre and Steeplechase, Keith is passionate about using his business to give back to the communities they serve. 
                            Whether it's empowering young students through Chick-fil-A Leader Academy or being a means of support and blessing during times of trial or tragedy, Keith loves to use his platform to benefit Capital Centre and Steeplechase.
                        </p>
                        <p className='text-gray-500 font-apercuMedium mt-4'>
                            "Largo/Capitol Heights is a fantastic place to be! Every day, this community gives me a reason to look forward to things. 
                            People here are friendly and always curious to learn more about Chick-fil-A. I love helping out other businesses and feel like I'm making a real difference. It's a truly rewarding experience!"
                        </p>
                        <div className='mt-6'>
                            <button className='primary-btn w-60 '>Contact Keith Singletary</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center mt-16'>
                        <img src={operator} alt="operator pic" className='max-w-[500px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[720px] bg-gray-100 flex mt-10 items-center justify-center'> {/* Flexbox for vertical centering */}
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
                        (301) 555-0186
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
                        (301) 555-0186
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About