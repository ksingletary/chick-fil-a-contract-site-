import React from 'react';
import operator from '../../assets/operator.jpeg';
import cathy from '../../assets/cathy.jpeg'
import divider from '../../assets/divider.svg'
import checkmark from '../../assets/checkmark.svg'
import handbook from '../../assets/handbook.png'
import conduct from '../../assets/conduct.svg'
import welcome from '../../assets/welcome.jpeg'
import cfaone2 from '../../assets/cfaone2.jpeg'


const Process = () => {
    const cathyImageStyle = {
        backgroundImage: `url(${cathy})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '70vh',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
  return (
    <>
        {/* Background image section with centered text */}
        <div className='background-image-process min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-8xl font-apercuBold mb-14 text-white'>Welcome To The Team</h1>
            </div>
        </div>
        {/* Subsequent content moved closer to the background section */}
        <div className='container -mt-20'> {/* Adjust negative margin to reduce gap */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-18'>
                {/* Image section */}
                <div className='flex flex-col justify-center items-center mb-32'>
                    <img src={welcome} alt="cfa image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                </div>
                {/* Text content section */}
                <div className='flex flex-col justify-center gap-6 mb-40 ml-10'>
                    <h1 className='text-5xl font-apercuBold text-secondary'>Get ready to grow with us! </h1>
                    <p className='text-gray-500 font-apercuMedium'>
                    Welcome to Chick-fil-A Cap Centre/Steeplechase! We're thrilled to have you join our team. We strive to be Maryland's beacon of hospitality, 
                    and that starts with developing servant leaders like you. Your dedication and passion will be key to achieving that goal.
                    </p>
                    <p className='text-gray-500 font-apercuMedium'>
                    Here at Chick-fil-A, we value our amazing people, efficient processes, and continuous growth. We believe in true partnership – 
                    I'm here to support you, and you'll play a vital role in our success. As a new Team Member, we challenge 
                    you to embrace your responsibilities and pursue excellence in all you do. We're excited to have you on board!
                    </p>
                </div>
            </div>
        </div>

        <div style={{ width: '100%', height: '70vh' }} className='-mt-10'>
            <div style={cathyImageStyle} className="flex items-center justify-end">
                <div className='container flex flex-col justify-center'> {/* Corrected class name typo */}
                    <h1 className='text-3xl font-apercuBold mb-4 text-white'> {/* Reduced margin-bottom from mb-14 to mb-4 */}
                        <span className='font-apercuRegular text-6xl'>" </span>
                        We're not just in the chicken business, we're in the people business
                        <span className='font-apercuRegular text-6xl'> "</span>
                    </h1>
                    <p className='font-apercuRegular text-xl text-white ml-10'>
                        -Truett Cathy
                    </p>
                </div>  
            </div>
        </div>
        <div className='relative mt-20'>
            <div className='flex justify-center flex-col items-center mb-28'>
                <h1 className='font-apercuBold text-6xl text-primary my-2'>Onboarding</h1>
                <p className='font-apercuMedium text-xl text-gray-600 my-2'>Onboarding is the first step and an important foundation of your Team Member experience.</p>
                <p className='font-apercuMedium text-xl text-gray-600 my-2 px-18'>This meeting will provide you with important information about the company and set expectations for your time with us.</p>
                <p className='font-apercuBold font-bold text-xl text-black my-2'>Please arrive on time!</p>
            </div>
            <div className='w-full h-36 flex justify-center items-center -mt-28'>
                <img src={divider} alt="Divider" />
            </div>
        </div>
        <div className='min-h-[520px] flex justify-center items-center sm:py-0'>
            <div className='container'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-3xl font-apercuBold text-secondary mb-6">Before You Come</h1>
                    <div className='flex items-center justify-center sm:justify-start gap-4'> {/* Aligns buttons next to each other */}
                        {/* Uniform Store Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-100'>
                            <a href=""><img src={checkmark} alt="Paperwork" className='h-12 w-12 mb-4' /></a> {/* Image placed at the top with margin-bottom */}
                            <span className='text-lg font-medium text-center -mt-2'>Paperwork</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>Once you are hired you will receive an email from HigherMe. 
                                Please read it and fill out the required documents. We will answer any questions during Onboarding. 
                                If you need help completing your paperwork you can email friends@higherme.com or call (617) 826-1002.
                            </p>
                            <ul className='mt-4 mr-20'>
                                    <li>1. Personal Information</li>
                                    <li>2. I-9</li>
                                    <li>3. W-4</li>
                                    <li>4. Other Documentation</li>
                            </ul>
                        </div>
                        {/* Job Descriptions Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-96'>
                            <a href=""><img src={handbook} alt="Job Descriptions" className='h-12 w-12 mb-4' /></a>
                            <span className='text-lg font-medium text-center -mt-2'>Handbook</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>
                            The Team Member Handbook provides you with all of the Chick-fil-A Cap Centre/Steeplchase policies 
                            regarding employment at our restaurant and will give you a clear understanding as to what is expected of you to be a successful Team Member.
                            </p>
                            <a href="#" className='mt-4'><button className='primary-btn transition duration-500 hover:-translate-y-1'>Handbook</button></a>
                        </div>
                        {/* Direct Deposit Form Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-96'>
                            <a href=""><img src={conduct} alt="Direct Deposit Form" className='h-12 w-12 mb-4' /></a>
                            <span className='text-lg font-medium text-center -mt-2'>Code Of Conduct</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>The Code of Conduct is a brief summary of the things that are most important to us as an organization.  
                                It summarizes many of our expectations and policies that are found in the handbook. 
                            </p>
                            <p className='font-apercuRegular text-gray-700 mt-4'>Please take the time to read it fully.</p>
                            <a href="#" className='mt-4'><button className='primary-btn w-60 transition duration-500 hover:-translate-y-1'>Code of Conduct</button></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-screen flex justify-center items-center sm:py-0 relative'>
            <div className='absolute top-0 left-0 w-full h-36 flex justify-center items-center'>
                <img src={divider} alt="Divider" />
            </div>
            <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {/* Left Column for What to Bring */}
                    <div className='mt-20'>
                        <h1 className="text-3xl font-apercuBold text-secondary mb-4 text-center">What To Bring</h1>
                        <ol className='list-decimal mt-9 font-apercuRegular pl-5 space-y-2'>
                            <li className='text-gray-600'>ID: Passport Only or 2 other forms of identification: including Drivers License, Birth Certificate, or 
                            Social Security card or permanent residence card. Make sure one of the ID's has a photo. View this list of other acceptable forms of ID for your I-9 paperwork.</li>
                            <li className='text-gray-600'>Food Handlers Card, if you already have one. Either bring it with you or send it to this email.</li>
                            <li className='text-gray-600'>If you are under 18 years of age, please bring in your work permit from your school.</li>
                            {/* Add additional steps here */}
                        </ol>
                    </div>

                    {/* Right Column for Location and Parking */}
                    <div className='mt-20 relative'>
                        <h1 className="text-3xl font-apercuBold text-secondary mb-4 text-center">Location and Parking</h1>
                        <p className='font-apercuRegular text-gray-600'>Orientation will be held at the store: 1040 Shoppers Way, Largo, MD. Please park in the parking lot in front of the store.</p>
                        {/* Placeholder for Google Maps */}
                        <div className='w-full h-96 bg-gray-300'>
                            {/* Simulation of a Google Maps placeholder */}
                            <p className='text-center text-gray-500 pt-40'>Google Maps Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute -mb-12 bottom-0 left-0 w-full h-36 flex justify-center items-center'>
                <img src={divider} alt="Divider" />
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
                            <button className='primary-btn w-72 '>Download Chick-fil-A One Today</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cfaone2} alt="located map image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Process;
