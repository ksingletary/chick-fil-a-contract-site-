import React from 'react'
import regular from '../../assets/regular.jpeg'
import recipes from '../../assets/recipes.png'
import ingredients from '../../assets/ingredients.svg'
import real from '../../assets/real.svg'
import cfaone from '../../assets/cfaone.jpeg'
import LazyImage from '../LazyLoad/LazyLoad'
import LazyBackground from '../LazyLoad/LazyBackground'

const Menu = () => {
  return (    
    <>
        <LazyBackground src={('../../assets/menu.jpg')} className='background-image-menu min-h-screen flex justify-center items-center'>
            <div className='container text-center mb-10'>
                <h1 className='text-7xl font-apercuBold mb-16 text-white'>Chick-fil-A Menu</h1>
            </div>
        </LazyBackground>
        <div className='min-h-[620px] -mt-16 flex justify-center items-center py-12 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div className='flex justify-center items-center mb-28'>
                        <LazyImage
                            src={regular}
                            alt="cfa image"
                            className='max-w-[600px] w-full mx-auto shadow-1 rounded-lg shadow-strong'
                        />
                    </div>
                    {/* Text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0 mb-28 ml-10'>
                        {/* Header Image */}
                        <h1 className='text-5xl font-apercuBold text-secondary  '>Freshly Made, Every Day </h1>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            In our kitchen, we only use fresh, simple ingredients of the highest quality. And we always have. 
                            Since the beginning, we’ve served chicken that is whole breast meat, with no added fillers or hormones, and every piece of chicken is hand breaded in our kitchen.
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            Produce is delivered fresh to our kitchens several times a week. Salads are chopped and prepared fresh, by hand, throughout the day. 
                            Whole lemons are freshly squeezed daily and combined with pure cane sugar and water (yep, that’s all) to make Chick-fil-A Lemonade®. 
                            It may not be the easy way, but it’s the only way we know.
                        </p>
                        <p className='text-gray-500 text-lg font-apercuMedium'>
                            Fresh, simple, quality that you can taste. Every time.
                        </p>
                        <a href="https://www.chick-fil-a.com/" target="_blank" rel="noopener noreferrer">
                            <button className='primary-btn mt-5 transition duration-500 hover:-translate-y-1'>View Full Menu</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[520px] flex justify-center items-center sm:py-0 bg-gray-50'>
            <div className='container'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-3xl font-apercuBold text-secondary mb-6">Better Recipes</h1>
                    <div className='flex items-center justify-center sm:justify-start gap-4'> {/* Aligns buttons next to each other */}
                        {/* Uniform Store Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-96'>
                            <a href=""><img src={recipes} alt="Paperwork" className='h-12 w-12 mb-4' /></a> {/* Image placed at the top with margin-bottom */}
                            <span className='text-lg font-medium text-center -mt-2'>Eat Well, Feel Great</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>We offer delicious, balanced choices to keep you energized. 
                            Enjoy classic favorites made with real ingredients, or explore our exciting new options like the protein-packed Egg White Grill and vitamin-rich Kale Crunch Side. 
                            Eat well, feel great, and conquer your day!
                            </p>
                            <a href="https://www.chick-fil-a.com/stories" className='mt-4 transition duration-500 hover:-translate-y-1'  target="_blank" rel="noopener noreferrer" ><button className='primary-btn w-60 mt-6'>Learn More</button></a>
                        </div>
                        {/* Job Descriptions Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-96'>
                            <a href=""><img src={ingredients} alt="Job Descriptions" className='h-14 w-14 mb-4' /></a>
                            <span className='text-lg font-medium text-center -mt-2'>Ingredients Worth Savoring</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>
                            Your health is our priority. That's why we're constantly evolving our menu, striving for cleaner ingredients without sacrificing delicious flavor.
                            </p>
                            <ul className='mt-2 ml-6 text-sm list-disc list-inside font-apercuRegular'>
                                <li>Removal of high-fructose corn syrup and artificial dyes/colors from Chick-fil-A dressings and sauces</li>
                                <li>Removal of high-fructose corn syrup from our buns</li>
                                <li>Reduction of sodium by 8% across 25 menu items, and up to 50% on others</li>
                            </ul>
                        </div>
                        {/* Direct Deposit Form Button */}
                        <div className='flex flex-col items-center justify-start bg-white p-6 rounded-xl shadow-strong transition-shadow duration-300 ease-in-out w-96 h-96'>
                            <a href=""><img src={real} alt="Direct Deposit Form" className='h-14 w-14 mb-4' /></a>
                            <span className='text-lg font-medium text-center -mt-2'>The Taste of Real, Raised Right</span>
                            <p className='font-apercuRegular text-gray-700 mt-4'>
                                Our commitment to quality starts with whole, boneless breast of chicken, free of fillers or artificial additives.  
                                We source from U.S. farms that adhere to our rigorous Animal Wellbeing Standards, ensuring healthy birds raised naturally.  Enjoy the difference real chicken makes!
                            </p>  
                            <a href="https://www.chick-fil-a.com/our-standards" className='mt-4 transition duration-500 hover:-translate-y-1'  target="_blank" rel="noopener noreferrer" ><button className='primary-btn w-60'>Learn More</button></a>
                        </div>
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
                        <LazyImage
                            src={cfaone}
                            alt="located map image"
                            className='max-w-[450px] w-full mx-auto shadow-1 rounded-lg shadow-strong'
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu