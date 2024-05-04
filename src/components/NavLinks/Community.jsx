import {React, useState, useEffect} from 'react'
import donation from '../../assets/donation.svg'
import close from '../../assets/close.svg'
import dividerLogo from '../../assets/dividerLogo.png'
import location from '../../assets/location.svg';
import mobile from '../../assets/mobile.svg'
import pickup from '../../assets/pickup.svg'
import pickup1 from '../../assets/pickup1.svg'
import catering from '../../assets/catering.svg'
import catering1 from '../../assets/catering-icon.svg'
import dinein from '../../assets/dine-in.svg'
import lovecommunity from '../../assets/lovecommunity.jpeg'
import doordash from '../../assets/doordash.png'
import cfaone3 from '../../assets/cfaone3.png'

const Community = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("We're looking forward to serving you!")        
        console.log("Form submitted!");
        closeModal();
    };

    useEffect(() => {
        if (isModalOpen) {
            // Disable scrolling on the body
            document.body.style.overflow = 'hidden';
        }
        return () => {
            // Re-enable scrolling when the component is unmounted or modal is closed
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

  return (
    <>
        <div className='background-image-community min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-8xl font-apercuBold mb-20 text-white '>We Love Our Community</h1>
            </div>
        </div>
        <div className='min-h-[620px] -mt-16 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={lovecommunity} alt="cfa image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary mb-6'>We Love Largo & Capitol Heights! </h1>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            Our passion is to serve others with honor, dignity and respect. 
                            No matter our title or job description, our reason for coming to work is to generously share our time, talents and resources. 
                            Whether it’s treating customers like friends or serving the our community like neighbors, we believe kindness is a higher calling.
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                        We also believe in being a part of the everyday lives of our guests—investing in our local community and supporting the organizations that make our community great.
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                        That’s why you’ll also see us all around town at games, festivals and other community-building events.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
        <div className='relative mt-14 '>
            <div className='flex justify-center flex-col ml-16 items-center'>
                <h1 className='font-apercuBold text-5xl text-secondary my-2'>Marketing & Donations</h1>
                <p className='font-apercuRegular text-2xl my-2 px-16 mt-10'>
                    Chick-fil-A Largo and Steeplechase loves to give back and is proud to be a community partner. Please fill <span className="ml-44"> out the Donation Request Form</span> below and we will review it for consideration.
                </p>
                <p className='font-apercuRegular text-2xl my-2 pl-20 mt-14'>
                    Please provide your request 4-6 weeks prior to your event to allow us time to plan with you and <span className="ml-96"> make your event a success.</span>
                </p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center min-h-[520px] mt-20'> {/* Center items horizontally and vertically */}
            <div className='container flex justify-center -mt-52'> {/* Ensure the container centers its children horizontally */}
                <img src={donation} alt="donation gift" className='h-1/2 w-1/2 object-cover' /> {/* Maintain object-fit */}
            </div>
            <h1 className='font-apercuBold text-5xl text-secondary -mt-16 text-center'> {/* Adjust top margin for proper spacing */}
                Donation Requests
            </h1>
            <button onClick={openModal} className='primary-btn w-52 mt-8 mx-auto'> {/* Center the button horizontally within the flex container */}
                Donation Request
            </button>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-1/2 h-5/6 overflow-hidden relative">
                    <div className="overflow-y-auto h-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Donation Request Form</h2>
                        <button onClick={closeModal}>
                            <img src={close} alt="" className='h-4 w-4 absolute top-4 right-4'/>
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Organization Full Name" 
                                required className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                required className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Address Line 1" 
                                required className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Address Line 2" 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="City" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text"
                                placeholder="State" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="ZIP Code" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Name of Contact" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="tel" 
                                placeholder="Contact Phone" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="email" 
                                placeholder="Contact Email" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Type of Group" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="text" 
                                placeholder="Title of Event" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <input 
                                type="date" 
                                placeholder="Date of Event" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <textarea 
                                placeholder="Description of Event" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24" />
                            <input 
                                type="number" 
                                placeholder="Expected Attendance" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md" />
                            <textarea 
                                placeholder="How can we help?" 
                                required 
                                className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24" />
                            <div className="flex justify-center space-x-4 mt-4">
                                <button type="submit" className="bg-primary hover:bg-red-800 text-white font-apercuMedium py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
        <div className='min-h-[720px] bg-gray-100 flex items-center justify-center'> {/* Flexbox for vertical centering */}
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
                        <div className='mt-6'>
                            <button className='primary-btn w-72 '>Download Chick-fil-A One Today</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cfaone3} alt="located map image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Community