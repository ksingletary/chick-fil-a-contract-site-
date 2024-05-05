import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    
  return (
    <>
        <div class='background-image min-h-screen flex justify-center items-center'>
            <div class='container'>
                <h1 class='text-8xl mb-6 font-apercuBold text-white text-center'>Serving with Joy, Leaving a Legacy.</h1>
                <div class='flex justify-center items-center space-x-8 mt-4'>
                    <a href="https://www.chick-fil-a.com/one">
                        <button class="bg-primary hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                            Earn Rewards with Our App
                        </button>
                    </a>
                    <Link to="/about">
                        <button class="bg-secondary hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                            More About Chick-fil-A Capital Centre
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero





