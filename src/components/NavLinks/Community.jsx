import React from 'react'
import divider from '../../assets/divider.svg'
import donation from '../../assets/donation.svg'

const Community = () => {
  return (
    <>
        <div className='background-image-community min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-9xl font-apercuBold mb-14 text-white'>We Love Largo</h1>
            </div>
        </div>
        <div className='relative -mt-8'>
            <div className='flex justify-center items-center mb-24'>
                <div className="relative z-10">
                    <h1 className='font-apercuBold text-primary text-7xl'>Chick-Fil-A <span className='text-secondary'>Capital Centre</span></h1>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-36 flex justify-center items-center mb-20'>
                <img src={divider} alt="Divider" />
            </div>
            <div className='flex justify-center flex-col ml-16 items-center mb-28'>
                <h1 className='font-apercuBold text-5xl text-secondary my-2'>Marketing & Donations</h1>
                <p className='font-apercuRegular text-2xl my-2 px-16'>
                    Chick-fil-A Largo and Steeplechase loves to give back and is proud to be a community partner. Please fill <span className="ml-44"> out the Donation Request Form</span> below and we will review it for consideration.
                </p>
                <p className='font-apercuRegular text-2xl my-2 pl-20 mt-14'>
                    Please provide your request 4-6 weeks prior to your event to allow us time to plan with you and <span className="ml-96"> make your event a success.</span>
                </p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center min-h-[520px]'> {/* Center items horizontally and vertically */}
            <div className='container flex justify-center -mt-52'> {/* Ensure the container centers its children horizontally */}
                <img src={donation} alt="donation gift" className='h-1/2 w-1/2 object-cover' /> {/* Maintain object-fit */}
            </div>
            <h1 className='font-apercuBold text-5xl text-secondary -mt-16 text-center'> {/* Adjust top margin for proper spacing */}
                Donation Requests
            </h1>
            <button className='primary-btn mt-8 mx-auto'> {/* Center the button horizontally within the flex container */}
                Click Here
            </button>
        </div>

    </>
  )
}

export default Community