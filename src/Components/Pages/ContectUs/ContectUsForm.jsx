import React from 'react'

function ContectUsForm() {
  return (
    <>
      <div className="flex flex-col bg-[#EFEFF0] my-5 p-3 ">

        <span className='uppercase text-2xl py-3 md:mx-8'>Contact Us</span>

        <p className='md:w-[80%] md:px-8 text-[12px]'>Please fill out your information below and an Saunidhi InfoTech Customer Representative will contact you shortly.</p>

        <span className=' md:mx-8 text-red-500'>* is required for submission</span>

        <form action="" className='flex flex-col gap-1 md:mx-auto'>
          <span>First Name *</span>
          <input required className='w-[100%] h-[40px] border-2 border-gray-200  rounded-md pl-2 md:w-[400px]' name="first_name" type="text" />
          <span>Last Name *</span>
          <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' name="last_name" type="text" />
          <span>Business Email Address *</span>
          <input type="email" required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' />
          <span>Phone Number *</span>
          <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' name="phone" type="text" minLength="9" maxLength="10" size="10" />
          <span>Company Name *</span>
          <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' name="company" type="text" />
          <span>Industry *</span>
          <input required className='w-[100%] h-[40px] border-2 border-gray-200 rounded-md pl-2 md:w-[400px]' name="industry" type="text" />
          <span>What would you like to discuss?</span>
          <textarea className='w-[100%] h-[100px] border-2 border-gray-200 rounded-md pl-2 md:h-[130px] md:w-[400px]' name="desc" type="text" />
          <div className='flex mt-6 text-white bg-blue-700 w-[100px] h-10 justify-center items-center rounded-lg hover:bg-blue-900 cursor-pointer'>Submit</div>
        </form>

        <p className='pt-3 text-[12px] pb-5'>By clicking “Submit” you agree that Saunidhi InfoTech will process your personal data provided in the above form for communicating with you as our potential or actual customer or a client as described in our.</p>

      </div>
    </>
  )
}

export default ContectUsForm
