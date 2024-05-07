import React from 'react';
import joinus from '../assets/joinus.png';

const JoinUs = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${joinus})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Aligns the background image to the center horizontally and shows more from the top
        width: '100%',
        height: '95vh',  // Adjusted height to fit the container
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <>
            <div className='mt-10 relative'>
                <div style={backgroundImageStyle} className="flex items-center justify-end relative">
                    {/* Content here */}
                    <a href='https://www.chick-fil-a.com/careers' className='absolute bottom-5 right-5 mr-48'>
                        <button className="primary-btn transition duration-500 hover:-translate-y-1">Learn More</button>
                    </a>
                </div>
            </div>
            
        </>    
    
    );
};

export default JoinUs;
