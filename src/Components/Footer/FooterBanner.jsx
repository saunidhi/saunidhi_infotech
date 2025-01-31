import React from 'react'

function FooterBanner() {
  return (
    <>
      <div className="bg-black shadow-white shadow-md sm:h-[15rem] flex flex-col items-center gap-3 ">
        <div className="text uppercase text-[30px] text-white ">INDIA</div>
        <div className="sm:flex sm:flex-row sm:w-[100%] sm:justify-center sm:gap-5 ">
          <div className="para text-[18px] text-white w-[20rem] text-center ">Vasant Kunj,<br /> New Delhi, <br /> Delhi - 110067<br />
            <p >saunidhiinfotech@gmail.com</p>
          </div>
          <div className="para text-[18px] text-white w-[20rem] text-center py-5 sm:py-0">Agrasen Marg, <br /> Sonkh, Mathura,<br /> U.P. - 281123<br />
            <p>saunidhiinfotech@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBanner
