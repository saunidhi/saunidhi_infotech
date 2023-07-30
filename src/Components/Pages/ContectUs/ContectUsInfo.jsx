import React from 'react'

function ContectUsInfo() {
  return (
    <>
      <div className="flex flex-col px-4 md:h-[55rem] md:justify-between md:px-11 ">
        <div className='flex flex-col'>

          <div className="text-[16px] py-2">Whether you're looking to discuss a potential partnership, kick off a new implementation, or learn more about Saunidhi InfoTech products, we're here to help.</div>

          <h1 className=" text-2xl py-2">INDIA Head office</h1>
          <span>Agarsen Marg</span>
          <span>Sonkh ,Mathura</span>
          <span>Uttar Pradesh - 281123</span>

          <h1 className=" text-2xl py-2">Global Headquarters</h1>
          <span>Vasant Kunj</span>
          <span>New Delhi - 110067</span>
        </div>
        <div className='flex flex-col'>
          <h1 className=" text-2xl py-2">User groups</h1>
          <span>User groups are run and managed independently <br /> from Saunidhi InfoTech.</span>
          <div className="flex">
            <span>Email:-</span>
            <span className='text-blue-500 cursor-pointer'>  Support@saunidhiinfotech.com</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContectUsInfo
