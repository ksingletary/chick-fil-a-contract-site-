import {React, useState, useEffect} from 'react'
import dividerLogo from '../../assets/dividerLogo.png'
import answerchix from '../../assets/alwayschix.jpeg'
import close from '../../assets/close.svg'

const Referrals = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for your referral!")        
        console.log("Form submitted!");
        closeModal();
    };

    useEffect(() => {
        if (isModalOpen) {
            // Disable scrolling on the body
            document.body.style.overflow = 'hidden';
        }
        return () => {
            // Re-enable scrolling when the component is unmounted or modal is closed
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

  return (
    <>
        <div className='background-image-referrals min-h-screen flex justify-center items-center'>
            <div className='container text-center'>
                <h1 className='text-8xl font-apercuBold mb-14 text-white'>Refer A Friend</h1>
            </div>
        </div>
        <div className='relative -mt-20'> {/* Added padding-top instead of negative margin-top */}
            <div className='w-full h-36 flex justify-center items-center mt-18'>
                <img src={dividerLogo} alt="Divider" className="mx-auto ml-28 w-5/6"/> {/* Center the image */}
            </div>
            <div className='flex flex-col justify-center space-x-4 items-center mt-8'> {/* Removed negative margin-top and adjusted for center alignment */}
                <h1 className='font-apercuBold text-5xl text-secondary my-2'>Refer A Friend</h1>
                <p className='font-apercuRegular text-2xl my-2 px-16 text-center mt-10'>
                    Know someone who shares our passion for hospitality? We'd love for them to join our team! Tell them about the rewarding work environment and great benefits at Chick-fil-A Largo and Steeplechase.
                </p>
                <button onClick={openModal} className='primary-btn mt-10 w-44'>Refer A Friend</button>
            </div>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg w-1/2 h-5/6 overflow-hidden relative">
                    <button onClick={closeModal} className="absolute top-4 right-4">
                        <img src={close} alt="Close" className='h-6 w-6'/>
                    </button>
                    <div className="overflow-y-auto h-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Employee Referral Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input 
                                type="text" 
                                placeholder="Team Member Name" 
                                required className="block w-full p-2 border border-gray-300 rounded-md" />
                            
                            <div className="flex items-center space-x-2">
                                <label className="font-medium">
                                    Have you been employed for more than 90 days?
                                </label>
                                <input type="radio" name="employmentDuration" value="Yes" required className="ml-2"/> Yes
                                <input type="radio" name="employmentDuration" value="No" required className="ml-2"/> No
                            </div>

                            <input 
                                type="text" 
                                placeholder="Name of Person Recommended" 
                                required className="block w-full p-2 border border-gray-300 rounded-md" />
                            
                            <div className="flex flex-col space-y-1">
                                <label for="relationship" className="font-medium">Relationship to Team Member:</label>
                                <input 
                                    type="text" 
                                    id="relationship"
                                    name="relationship"
                                    placeholder="Describe the relationship (e.g., Friend, Family Member, etc.)"
                                    required 
                                    className="block w-full p-2 border border-gray-300 rounded-md" />
                            </div>


                            <h3 className="text-lg font-semibold mt-4 mb-2">Give three examples of how this person embodies our named values, will raise the talent bar, or emulates our 51% characteristics:</h3>
                            <textarea placeholder="Example 1" required className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24" />
                            <textarea placeholder="Example 2" required className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24" />
                            <textarea placeholder="Example 3" required className="block w-full p-2 border border-gray-300 rounded-md resize-none h-24" />

                            <div className="flex flex-col space-y-2">
                                <label className="font-medium text-sm">
                                    I understand that by submitting this form I am stating that I feel this candidate has the 51% characteristics that CFA Cap Centre/Steeplechase is looking for in future Team Members; 
                                    Optimistic Warmth, Intelligence, Work Ethic, Empathy, and Self Awareness.
                                </label>
                                <input type="checkbox" required className="ml-2 self-start"/> {/* Aligns the checkbox to the start of the flex container */}
                            </div>


                            <div className="flex justify-center space-x-4 mt-4">
                                <button type="submit" className="bg-primary hover:bg-red-800 text-white font-apercuMedium py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}


        <div className='min-h-[620px] flex justify-center items-center'>
            <div className='container'>
                <img src={answerchix} alt="" className='ml-40 h-3/4 w-3/4'/>
            </div>
        </div>
    </>
  )
}

export default Referrals