import React from 'react'
import { Link } from 'react-router-dom'

function ContectUs() {
    return (
        <>
            <div className="flex flex-col bg-[#EFEFF0] my-5 p-3 ">

                <span className='uppercase text-2xl py-3 md:mx-8 text-center'>Let's Connect</span>

                <p className='md:mx-auto sm:w-[35%] sm:text-[15px] md:px-8 text-[13px] text-center py-3'>Contact us and we'll have a Business Development Representative contact you within 24 business hours</p>

                <span className='hidden md:mx-8 text-red-500'>* is required for submission</span>

                <form action="" className='flex flex-col gap-1 md:mx-auto'>
                    <span>First Name </span>
                    <input required className='w-[100%] h-[40px] border-2 border-gray-200  rounded-md pl-2 md:w-[400px]' type="text" />
                    <span>Last Name </span>
                    <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' type="text" />
                    <span>Business Email Address </span>
                    <input type="email" required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' />
                    <span>Phone Number </span>
                    <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' type="text" minLength="9" maxLength="10" size="10" />
                    <span>Company Name </span>
                    <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' type="text" />
                    <span>Industry</span>
                    <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' type="text" />

                    {/* <span>What would you like to discuss?</span> */}
                    <textarea className='hidden w-[100%] h-[100px] border-2 border-gray-200 rounded-md pl-2 md:h-[130px] md:w-[400px]' type="text" />
                    <div className='flex mt-6 text-white bg-blue-700 w-[100px] h-10 justify-center items-center rounded-lg hover:bg-blue-900 cursor-pointer'>Submit</div>
                </form>

                <p className='pt-3 text-[12px] sm:w-[489px] pb-5 sm:mx-auto'>By clicking “Submit” you agree that Infor will process your personal data provided in the above form for communicating with you as our potential or actual customer or a client as described in our <Link className='text-blue-500 cursor-pointer' >Privacy Policy</Link></p>
                

            </div>
        </>
    )
}

export default ContectUs
