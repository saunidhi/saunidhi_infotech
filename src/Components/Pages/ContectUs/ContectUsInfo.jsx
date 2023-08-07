import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Utils/Context';

function ContectUsInfo() {

  const { ContactContent, ContactData } = useContext(Context);
  const BaseAPi = ContactData?.data[0]?.attributes;
  
  useEffect(() => {
    ContactContent();
  }, []);

  return (
    <>
      <div className="flex flex-col px-4 md:h-[55rem] md:justify-between md:px-11 ">
        <div className='flex flex-col'>

          <div className="text-[18px] py-2">{BaseAPi?.Paragraph}</div>

          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_2}</h1>

          <p className=' w-[230px] '>{BaseAPi?.Address}</p>

          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_3}</h1>

          <p className=' w-[230px] '>{BaseAPi?.Address_2}</p>
          
        </div>
        <div className='flex flex-col'>
          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_4}</h1>
          <span>User groups are run and managed independently <br /> from Saunidhi InfoTech.</span>
          <div className="flex">
            <span>Email:-</span>
            <Link to="mailto:Support@saunidhiinfotech.com" className='text-blue-500 cursor-pointer'>{BaseAPi?.Email}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContectUsInfo
