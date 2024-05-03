import React from 'react'
import dividerLogo from '../../assets/dividerLogo.png'
import answerchix from '../../assets/alwayschix.jpeg'

const Referrals = () => {
  return (
    <>
        <div className='background-image-referrals min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-9xl font-apercuBold mb-14 text-white'>Refer A Friend</h1>
            </div>
        </div>
        <div className='relative -mt-20'> {/* Added padding-top instead of negative margin-top */}
            <div className='w-full h-36 flex justify-center items-center'>
                <img src={dividerLogo} alt="Divider" className="mx-auto ml-28 w-5/6"/> {/* Center the image */}
            </div>
            <div className='flex flex-col justify-center space-x-4 items-center mt-8'> {/* Removed negative margin-top and adjusted for center alignment */}
                <h1 className='font-apercuBold text-5xl text-secondary my-2'>Refer A Friend</h1>
                <p className='font-apercuRegular text-2xl my-2 px-16 text-center mt-10'>
                    Know someone who shares our passion for hospitality? We'd love for them to join our team! Tell them about the rewarding work environment and great benefits at Chick-fil-A Largo and Steeplechase.
                </p>
                <a href="#"><button className='primary-btn mt-10 w-44'>Refer A Friend</button></a>
            </div>
        </div>

        <div className='min-h-[620px] flex justify-center items-center'>
            <div className='container'>
                <img src={answerchix} alt="" className='ml-40 h-3/4 w-3/4'/>
            </div>
        </div>
    </>
  )
}

export default Referrals