import {React, useState, useEffect} from 'react';
import Slider from 'react-slick';
import cow from "../assets/cow.svg"
import close from '../assets/close.svg'
import cfaone1 from '../assets/cfaone1.jpeg'


const testimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: `Largo never disappoints! Their waffle fries are legendary, and the 
        chicken sandwich is always juicy and flavorful. Plus, the service is top-notch - 
        friendly and helpful every time.`,
    },
    {
        id: 2,
        name: "Hancock",
        text: `My go-to for lunch! Their chicken nuggets are perfect for a quick bite, 
        and the staff always goes the extra mile. I once forgot my drink, and they chased 
        me down to the parking lot with it!`,
    },
    {
        id: 3,
        name: "Michelle Plumb",
        text: `They're my family's favorite. The chicken tenders are a crowd-pleaser, 
        and the atmosphere is welcoming for everyone. We love their 
        commitment to giving back to the community.`,
    },
    {
        id: 4,
        name: "Stacy Lattisaw",
        text: `Their breakfast is a game-changer! The Chick-fil-A Biscuit is the best I've ever had, 
        and the sausage is perfectly seasoned. Plus, their coffee is a delicious morning pick-me-up.`,
    },
    {
        id: 5,
        name: "Keith Sweat",
        text: `This Chick-fil-A catering saved my party! The chicken minis were a huge hit with the kids, 
        and the variety of platters made it easy to feed everyone. Plus, everything arrived fresh and delicious.`,
    },
    {
        id: 6,
        name: "Terri Roberts",
        text: `More than just chicken! Their salads are surprisingly good, with fresh ingredients 
        and flavorful dressings.  It's a healthy and satisfying lunch option when I'm on the go. I will
        definitely visit Capital Centre again.`,
    }
]

const Testimonials = () => {
    const settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slideesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,                  
                }
            },
        ],
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for your referral!")        
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
         <div className='py-10 mb-10'>
            <div className="container">
                {/* Header Section */}
                    <div>
                        <h1 className='text-center text-4xl font-apercuBold text-secondary'>
                            Testimonials
                        </h1>
                    </div>
                {/* Testimonials */}
                <Slider {...settings}>
                    {
                        testimonialData.map((item) => (
                            <div className='my-6'>
                                <div className='flex flex-col gap-4 shadow-strong py-8 px-6 mx-4 rounded-xl relative'>
                                    <div className='mb-4'>
                                        <img src={cow} alt="" className='rounded-full w-20 h-20' />
                                    </div>
                                    {/* content */}
                                    <div>
                                        <div>
                                            <p className='text-xs mb-4 font-apercuRegular text-secondary'>{item.text}</p>
                                            <h1 className='text-xl font-apercuBold text-primary'>{item.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-gray-400 font-apercuRegular text-9xl absolute top-0 right-0'>"</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <div className='flex flex-col justify-center mt-11 items-center'>
                    <button onClick={openModal} className='secondary-btn ml-auto'>
                        Share Feedback
                    </button>
                </div>
            </div>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                <div className="bg-white p-8 rounded-lg w-1/2 h-5/6 overflow-hidden relative">
                    <button onClick={closeModal} className="absolute top-4 right-4">
                        <img src={close} alt="Close" className='h-6 w-6'/>
                    </button>
                    <div className="overflow-y-auto h-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Share Feedback Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Full Name"
                                required className="block w-full p-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                required className="block w-full p-2 border border-gray-300 rounded-md"
                            />
                            <div className="flex flex-col space-y-1">
                                <label className="font-medium">Type of Feedback:</label>
                                <select required className="block w-full p-2 border border-gray-300 rounded-md">
                                    <option value="service">Service</option>
                                    <option value="product">Catering</option>
                                    <option value="general">General</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Please enter your feedback here..."
                                required className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24"
                            />
                            <div className="flex flex-col space-y-2">
                                <label className="font-medium text-sm">
                                    By submitting this form, you agree that the information provided is accurate and genuine.
                                </label>
                                <input type="checkbox" required className="ml-2 self-start"/>
                            </div>
                            <div className="flex justify-center space-x-4 mt-4">
                                <button type="submit" className="bg-primary hover:bg-red-800 text-white font-apercuMedium py-2 px-4 rounded">
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
        <div className='min-h-[620px] flex justify-center items-center py-20 sm:py-0 mt-10'>
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
                        <img src={cfaone1} alt="located map image" className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>
    </>    
  )
}

export default Testimonials