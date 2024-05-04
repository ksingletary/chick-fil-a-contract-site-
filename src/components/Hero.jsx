import React from 'react'
import uniform from '../assets/uniform.svg'
import jobdescr from '../assets/jobdescr.svg'
import card from '../assets/card.svg'
import divider from '../assets/divider.svg'

const Hero = () => {
    
  return (
    <>
        <div class='background-image min-h-screen flex justify-center items-center'>
            <div class='container'>
                <h1 class='text-8xl mb-6 font-apercuBold text-white text-center'>Serving with Joy, Leaving a Legacy.</h1>
                <div class='flex justify-center items-center space-x-8 mt-4'>
                    <button class="bg-primary hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                        Earn Rewards with Our App
                    </button>
                    <button class="bg-secondary hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                        More About Chick-fil-A Capital Centre
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero





