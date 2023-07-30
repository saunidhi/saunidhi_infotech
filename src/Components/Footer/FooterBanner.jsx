import React from 'react'

function FooterBanner() {
  return (
    <>
      <div className="bg-black shadow-white shadow-md h-[10rem] flex flex-col items-center gap-3 ">
        <div className="text uppercase text-[30px] text-white ">INDIA</div>
        <div className="sm:flex sm:flex-row sm:w-[20rem]">
          <div className="para text-[18px] text-white w-[20rem] text-center">Vasant Kunj,New Delhi,Delhi - 110067</div>
          <div className="para text-[18px] text-white w-[20rem] text-center">Agrasen Marg, Sonkh ,Mathura, U.P. 281123</div>
        </div>
      </div>
    </>
  )
}

export default FooterBanner
