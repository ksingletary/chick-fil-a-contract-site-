import React from 'react';
import Slider from 'react-slick';
import cow from "../assets/cow.svg"

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
  return (
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
                <button className='secondary-btn ml-auto'>
                    Share Feedback
                </button>
            </div>
        </div>
    </div>
  )
}

export default Testimonials