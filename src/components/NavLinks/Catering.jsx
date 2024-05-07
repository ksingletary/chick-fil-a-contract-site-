import React from 'react'
import cateringTwo from '../../assets/cateringTwo.png'
import cfaoneFour from '../../assets/cfaOne4.jpeg'

const Catering = () => {
  return (
    <>
        <div className='background-image-catering min-h-screen flex justify-center items-center'>
            <div className='container text-center mb-10'>
                <h1 className='text-7xl font-apercuBold mb-16 text-white '>Catering from Chick-fil-A</h1>
            </div>
        </div>
        <div className='min-h-[620px] -mt-24 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cateringTwo} alt="cfa image" className='max-w-[500px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col -space-y-4 justify-center gap-6 sm:pt-0'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary mb-6'>Simplify your next event with delicious catering. </h1>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            From office parties to teacher's lounges, this convenient and delicious option guarantees instant popularity. 
                            Treat your colleagues or show gratitude for educators with these bite-sized pieces of happiness. They'll be begging you to return, making you the ultimate event planner!
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                        The Nugget Tray is legendary, yes, but there's a whole Chick-fil-A catering world to explore! 
                        We offer a diverse menu beyond nuggets, from refreshing Grilled Chicken Cool Wraps to classic Chicken Biscuits and convenient boxed lunches.  
                        No matter your event size, we cater to all occasions - big or small! Plus, enjoy the convenience of delivery right to your gathering. 
                        </p>
                        <a href="https://www.chick-fil-a.com/stories/chick-fil-a-catering-101" target="_blank" rel="noopener noreferrer">
                            <button className='primary-btn w-60 mt-5 transition duration-500 hover:-translate-y-1'>More About CFA Catering</button>
                        </a>
                    
                    </div>
                </div>
            </div>
        </div>
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
                            <button className='primary-btn w-72 transition duration-500 hover:-translate-y-1 '>Download Chick-fil-A One Today</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cfaoneFour} alt="located map image" className='max-w-[650px] w-full mx-auto shadow-1 rounded-lg shadow-strong'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Catering