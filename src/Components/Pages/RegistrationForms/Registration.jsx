import React, { useEffect } from 'react'
import NavBar from './NavBar'

function Registration() {

    useEffect(() => {
        document.title = 'Saunidhi InfoTech Registration Form';
    }, []);

    return (
        <>
            <NavBar />
            <div className='bg-[#F4F5FB] md:grid md:grid-flow-col h-fit'>
                <div className='bg-white w-[90%] mx-auto rounded-md space-y-2 p-2 h-fit mt-3 shadow md:col-span-1'>
                    <h5 className='ml-2' >Form Status</h5>
                    <hr />
                    <h4 className='ml-5 text-[#16192C]' >Apply for Online Registration</h4>
                    <h4 className='ml-5 text-gray-400'>Fill Online Application Form</h4>
                    <h4 className='ml-5 text-gray-400'>Pay Examination Fee</h4>
                </div>

                <div className='rounded-md bg-white w-[90%] mx-auto my-3 md:col-span-7 shadow'>
                    <h1 className='my-2 md:text-[20px] text-center'>Registration Form</h1>

                    <form action="" method="post" className=' space-y-3 py-4'>
                        {/* Personal Details */}
                        <div className='px-5 py-10 text-lg'>Personal Details</div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col '>
                            <p className='mx-1 text-sm sm:w-32 '>Candidate's Name (As per marksheet or Equivalent Certificate)</p>
                            <input type="text" maxLength={2} className=' border shadow px-3 py-2 sm:h-11 rounded-md md:col-span-4' />
                        </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Father's Name</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Mother's Name</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        {/*Candidate of DOB */}
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Candidate Of DOB</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        {/*Candidate of Gender */}
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Gender</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Nationality</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Identity Type</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Valid Identification Number</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='px-5 py-10 text-lg'>Present Address</div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Premises/House No./Name</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Sub Locality</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Locality</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Country</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Pincode</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Email Address</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Confirm Email Address</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Mobile Number (without country code or 0)</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Confirm Mobile Number</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Alternate Contact Number</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='px-5 py-10 text-lg'>Present Address <input type="checkbox" name="" id="" /> Click if Same As Present Address</div>


                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Premises/House No./Name</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Sub Locality</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Locality</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Country</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Pincode</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>

                        <div className='px-5 py-10 text-lg'>Choose Password </div>
                        <div className='px-5 text-center text-red-700 py-10 text-sm'>Password must be of 8-13 characters, must have one special character, one upper case character, one lower case character one numeric value. </div>

                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Password (Minimum 8 characters)</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Confirm Password</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Security Question</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Security Answer</p>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4' />
                        </div>
                        <div className='grid grid-flow-row mx-3 md:grid-flow-col'>
                            <p className='mx-1 text-sm w-fit md:col-span-1 sm:w-32'>Security Answer</p>
                            <textarea type="text" className=' border shadow px-3 py-2 h-20 rounded-md md:col-span-4' />
                        </div>

                        <div className='px-5 text-center py-10 text-lg'>Enter Security Pin </div>
                        <div className='grid grid-flow-row  mx-3 md:grid-flow-col'>
                            <input type="text" className=' border shadow px-3 py-2 rounded-md md:col-span-4 mx-auto ' />
                        </div>

                        <hr className='mx-3 my-2' />

                        <div className='grid grid-flow-row  mx-3 md:grid-flow-col'>
                            <button type='submit' className='mx-auto bg-green-500 px-4 py-3 rounded-md text-white'>Submit</button>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Registration
