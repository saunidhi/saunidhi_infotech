import React from 'react'
import { Link } from 'react-router-dom'

function Bottom() {

  // this method for only Bottom to top scrolling 
  const Goto = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
  }

  return (
    <>
      <div className="bg-black text-white h-[100%] flex justify-between flex-wrap sm:rounded-t-2xl sm:px-3 sm:h-[100%] md:h-[100%] xl:pt-7 xl:h-[40rem]" >

        <div className="Service-col ml-4  my-2 xl:w-[270px] xl:h-[554px] flex flex-col">
          <span className='text-[25px] md:text-[30px] '>Services</span>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Website Designing</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Web Hosting</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Dapp development</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Integrations</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Android App Development</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Digital Marketing</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Social Media Marketing</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Social Media Marketing</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>Smart contracts</Link>
          <Link to="/contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 ms:mx-4 md:cursor-pointer md:mt-5 '>E - Sports Tournaments</Link>
        </div>
        <div className="Solutions-col mr-4 xl:w-[250px] xl:h-[554px] my-2 flex flex-col">
          <span className='text-[25px] md:text-[30px]'>Solutions</span>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>NFT </Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>AI</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>loT</Link>
          <Link to="Healthcare" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Healthcare</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Cannabis</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Automotive</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Real estate</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Insurance</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Loyalty programs</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Logistics</Link>

        </div>
        <div className="Technologies-col ml-4 xl:w-[250px] xl:h-[554px] my-2 flex flex-col">
          <span className='text-[25px] md:text-[30px]'>Technologies</span>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Python</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Power BI</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Tableau</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>XM- Grace</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Machine Learning</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Ai Development</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>ETL</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Advance Excel</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Front-end</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>React</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Java</Link>
        </div>
        <div className="Company-col my-2 mr-4 xl:w-[250px] xl:h-[554px] flex flex-col">
          <span className='text-[25px] md:text-[30px]'>Company</span>
          <Link to="about" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>About us</Link>
          <Link to="contect" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>How we Work</Link>
          <Link to="careers" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Careers</Link>

          {/* this is hidden to some time */}
          <Link to="" onClick={Goto} className='hidden text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>Blog</Link>
          <Link to="contact" onClick={Goto} className='text-[15px] mt-2 md:text-[20px] md:gap-1 md:mx-4 md:cursor-pointer md:mt-5 '>News</Link>

        </div>
      </div>
    </>
  )
}

export default Bottom
