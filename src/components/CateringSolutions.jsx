import blueheart from '../assets/blueheart.png'
import cateringbox from '../assets/cateringbox.png'

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
                <div className='grid grid-cols-2 gap-6'>
                {/* First card */}
                    <a className='bg-cover transform hover:brightness-50  hover:-translate-y-2 hover:shadow-2xl bg-center bg-no-repeat rounded-xl transition-all duration-500 ease-in-out' style={{
                        backgroundImage: `url(${cateringbox})`,
                        width: '593px',
                        height: '623px',                       
                    }}>
                    </a>

                    {/* Second card */}
                    <div className='flex flex-col items-center justify-start bg-gray-50 p-6 rounded-xl transition-all duration-500 ease-in-out hover:bg-gray-200' style={{ width: '593px', height: '623px' }}>
                        <img src="" alt="Job Descriptions" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                        <p className='text-xl font-apercuBold text-center -mt-6'>The Perfect Spring Menu Made Easy: Catering Solutions for Busy Hosts</p>
                        <p className='font-apercuRegular mt-5'>Don't stress about spring gatherings! Chick-fil-A catering offers delicious options to fuel any get-together, big or small.</p>
                    </div>

                    {/* Third card */}
                    <div className='flex flex-col items-center justify-start bg-gray-50 p-6 rounded-xl transition-all duration-500 ease-in-out hover:bg-gray-200' style={{ width: '593px', height: '623px' }}>
                        <img src="" alt="Direct Deposit Form" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                        <p className='text-xl font-apercuBold text-center -mt-6'>Chicken Biscuit</p>
                        <p className='font-apercuRegular mt-5'>A hand-breaded, pressure-cooked chicken breast seasoned with a fiery spice blend, nestled on a toasted buttered bun with two pickles underneath.</p>
                    </div>

                    {/* Fourth card to complete the 2x2 square */}
                    <div className='flex flex-col items-center justify-start bg-gray-50 p-6 rounded-xl transition-all duration-500 ease-in-out hover:bg-gray-200' style={{ width: '593px', height: '623px' }}>
                        <img src="" alt="Spicy Chicken Sandwich" style={{ width: '380.66px', height: '280px' }} className='mb-4 -mt-4' />
                        <p className='text-xl font-apercuBold text-center -mt-6'>Spicy Chicken Sandwich</p>
                        <p className='font-apercuRegular mt-5'>A spicy chicken sandwich that combines bold flavors with Chick-fil-A's classic quality ingredients.</p>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default CateringSolutions