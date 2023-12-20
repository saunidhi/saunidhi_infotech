import React, { useEffect } from 'react'
import LoginBg from './LoginBg.png'
import { Link } from 'react-router-dom'
import QuizHeader from '../../QuizBanner/QuizHeader'
import NavBar from '../RegistrationForms/NavBar'
import Bottom from '../RegistrationForms/Bottom'
import ReactGA from 'react-ga';


const Onlineoffline = () => {

  // this method for only Bottom to top scrolling 
  const Goto = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title = 'Saunidhi InfoTech Online Registration Form';
  }, []);

  return (
    <>
      <QuizHeader />
      <NavBar />
      <div className='flex flex-col md:flex-row py-10 mx-auto w-fit' >

        <div>
          <div style={{ backgroundImage: `url(${LoginBg}) ` }}></div>
          <img src={LoginBg} alt='bg img' />
        </div>

        <div className='md:py-10 px-2 flex flex-col justify-center '>
          <div className='text-center sm:text-lg md:text-xl xl:text-2xl font-bold pb-4 md:py-5 md:pb-8 '>Quiz Competition - 2023</div>
          <div className='bg-[#DEDFFD] sm:text-lg md:text-xl xl:text-2xl pb-8 px-3 py-2 font-semibold text-[#5356DD] d:w-100% md:h-100%' >
            <div onClick={Goto}><Link to="/FillOnline" >👉 Click here for online registration</Link></div>
            <div onClick={Goto}><Link to="/SemiOnline">👉 Click here for semi online registration</Link></div>
          </div>
        </div>

      </div>
      <Bottom />
    </>
  )
}

export default Onlineoffline
