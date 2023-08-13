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

          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_2}</h1>

          <p className=' w-[230px] pb-5'>Agarsen Marg,<br /> Sonkh, Mathura, <br /> Uttar Pradesh - 281123</p>

          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_3}</h1>

          <p className=' w-[230px] '>Vasant Kunj,<br/>New Delhi,<br/>Delhi - 110067</p>

        </div>

        <div className='flex flex-col pt-5 md:pt-0'>
          <h1 className=" text-2xl py-2">{BaseAPi?.Heading_4}</h1>
          <span>User groups are run and managed independently <br /> from Saunidhi InfoTech.</span>
          <div className="flex ">
            <span>Email:-</span>
            <Link to={`mailto:${BaseAPi?.Email}`} className='text-blue-500 cursor-pointer'>{BaseAPi?.Email}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContectUsInfo
