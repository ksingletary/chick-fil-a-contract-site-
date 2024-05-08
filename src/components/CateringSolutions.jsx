import blueheart from '../assets/blueheart.png'
import cateringbox from '../assets/cateringbox.png'
import springbreak from '../assets/springbreak.jpeg'
import mothersday from '../assets/mothersday.jpeg'
import specialday from '../assets/specialday.jpeg'
import cfaone1 from '../assets/cfaone1.jpeg'


const CateringSolutions = () => {
  return (
    <>
        <div className='background-image-cateringSol min-h-screen flex justify-center items-center'>
            <div className='container text-center mb-10'>
                <h1 className='text-7xl font-apercuBold mb-16 text-white '>Catering Solutions</h1>
            </div>
        </div>
        <div className='flex flex-col items-center mb-20 -mt-20 space-y-6'>
            <img src={blueheart} alt="blue heart logo" className=''/>
            <h1 className='text-center text-5xl font-apercuBold text-secondary'>Stress-free spring catering!</h1>
            <h3 className=' text-secondary font-apercuRegular'>May 7, 2024</h3>
        </div>
        <div className='min-h-[1300px] mt-16 flex justify-center items-center py-20 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-2 gap-12 -mt-24'>
                    {/* First card */}
                    <a href='https://order.chick-fil-a.com/get-started/catering' className='relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat transform hover:brightness-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out' style={{
                        backgroundImage: `url(${cateringbox})`,
                        width: '593px',
                        height: '623px',
                    }}>
                        {/* Text at the top */}
                        <div className='absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Box Lunches
                        </div>

                        {/* Text in the middle */}
                        <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Made Easy
                        </div>

                        {/* Text at the bottom */}
                        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            On-the-Go
                        </div>
                    </a>

                    {/* Second card */}
                    <a href='https://order.chick-fil-a.com/get-started/catering' className='relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat transform hover:brightness-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out' style={{
                        backgroundImage: `url(${springbreak})`,
                        width: '593px',
                        height: '623px',
                    }}>
                        {/* Text at the top */}
                        <div className='absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Spring Break
                        </div>

                        {/* Text in the middle */}
                        <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Fuel Your Fun
                        </div>

                        {/* Text at the bottom */}
                        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            More Memories
                        </div>
                    </a>

                    {/* Third card */}
                    <a href='https://order.chick-fil-a.com/get-started/catering' className='relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat transform hover:brightness-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out' style={{
                        backgroundImage: `url(${mothersday})`,
                        width: '593px',
                        height: '623px',
                    }}>
                        {/* Text at the top */}
                        <div className='absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Mother's Day
                        </div>

                        {/* Text in the middle */}
                        <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Stress Free
                        </div>

                        {/* Text at the bottom */}
                        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Made with Love
                        </div>
                    </a>

                    {/* Fourth card to complete the 2x2 square */}
                    <a href='https://order.chick-fil-a.com/get-started/catering' className='relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat transform hover:brightness-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out' style={{
                        backgroundImage: `url(${specialday})`,
                        width: '593px',
                        height: '623px',
                    }}>
                        {/* Text at the top */}
                        <div className='absolute top-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Special Occasion
                        </div>

                        {/* Text in the middle */}
                        <div className='absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Memorable
                        </div>

                        {/* Text at the bottom */}
                        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ease-in-out text-secondary text-6xl font-apercuBold p-5'>
                            Effortless
                        </div>
                    </a>
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
                            <button className='primary-btn w-72 transition duration-500 hover:-translate-y-1'>Download Chick-fil-A One Today</button>
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

export default CateringSolutions