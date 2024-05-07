import React from 'react'
import cherryberrylem from '../assets/cherryberrylem.jpg'
import cherryberryIT from '../assets/cherryberryIT.jpg'
import cherryberrySJ from '../assets/cherryberrySJ.jpg'
import cherryberryFL from '../assets/cherryberryFL.jpg'
import cfaone1 from '../assets/cfaone1.jpeg'

const CherryBerry = () => {
  return (
    <>
        <div className='background-image-cherryBerry min-h-screen flex justify-center items-center'>
            <div className='container text-center mb-10'>
                <h1 className='text-6xl text-center font-apercuBold mb-16 text-white '>Taste spring! Chick-fil-A's new berry beverages.</h1>
            </div>
        </div>
        <h1 className='text-center mb-28 -mt-14 text-6xl font-apercuBold text-primary'>Chick-fil-A's new spring sips!</h1>
        <div className='min-h-[250px] flex justify-center items-center py-20 sm:py-0 -mt-10'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-5xl font-apercuBold text-secondary'>Cherry Berry Frosted Lemonade</h1>
                        <p className='text-secondary font-apercuRegular'>The perfect springtime sweet treat, combining Chick-fil-A Lemonade® (or Diet Lemonade) and signature Icedream® dessert with cherry, blueberry and cranberry flavors..</p>
                        <a href='https://www.chick-fil-a.com/menu/treats/cherry-berry-frosted-lemonade' className='w-52'>
                            <button className='primary-btn w-38'>View Product</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cherryberryFL} alt="located map image" className='max-w-[750px] w-full mx-auto rounded-lg shadow-strong '/>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cherryberrylem} alt="cfa image" className='max-w-[750px] w-full mx-auto shadow-strong rounded-lg'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 ml-10'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary'>Cherry Berry Lemonade</h1>
                        <p className='text-secondary font-apercuRegular'>This sunny combination is a mix of classic Chick-fil-A Lemonade® and cherry, blueberry and cranberry flavors.
                        </p>
                        <a href="https://www.chick-fil-a.com/menu/beverages/cherry-berry-lemonade" className='w-52'>
                            <button className='primary-btn w-38 '>View Product</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[250px] flex justify-center items-center py-20 sm:py-0 mt-14'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-5xl font-apercuBold text-secondary'>Cherry Berry Iced Tea</h1>
                        <p className='text-secondary font-apercuRegular'>Freshly-brewed daily from a blend of tea leaves, the Cherry Berry Iced Tea mixes classic Iced Tea with cherry, blueberry and cranberry flavors.</p>
                        <a href='https://www.chick-fil-a.com/menu/beverages/cherry-berry-iced-tea' className='w-52'>
                            <button className='primary-btn w-38 '>View Product</button>
                        </a>
                    </div>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cherryberryIT} alt="located map image" className='max-w-[750px] w-full mx-auto rounded-lg shadow-strong '/>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center'>
                        <img src={cherryberrySJ} alt="cfa image" className='max-w-[750px] w-full mx-auto rounded-lg shadow-strong'/>
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 ml-10'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary'>Cherry Berry Sunjoy®</h1>
                        <p className='text-secondary font-apercuRegular'>This beverage combines Chick-fil-A's Sunjoy® (Chick-fil-A® Lemonade and freshly-brewed Sweetened Iced Tea) with cherry, blueberry and cranberry flavors for a refreshing taste.
                        </p>
                        <a href="https://www.chick-fil-a.com/menu/beverages/cherry-berry-sunjoy" className=' w-52'>
                            <button className='primary-btn w-38 '>View Product</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[620px] flex justify-center items-center py-20 sm:py-0'>
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

export default CherryBerry