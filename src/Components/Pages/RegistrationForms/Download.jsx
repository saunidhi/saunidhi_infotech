import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import FormUrls from '../../FormLocation/FormUrls'
import QuizHeader from '../../QuizBanner/QuizHeader'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet'

const Download = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title = "final downloades"
  }, [])

  return (
    <>

      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VB1ZSX32N1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VB1ZSX32N1');
          `}
        </script>
      </Helmet>

      <div className='sm:h-[40rem] h-[100vh]'>
        <QuizHeader />
        <NavBar />
        <FormUrls />
        <div className='flex'>
          <button className='bg-[#00CC88] mx-auto text-white px-4 py-3 my-1  items-center rounded-2xl '>Download / Print : Confirmation Page</button>
        </div>
        <div className='md:grid md:grid-flow-col mt-4' >
          <div className=''>
            <label htmlFor="ragistration" class=' px-4 text-center text-2xl'> Registration </label>
            <div className='md:grid md:grid-flow-col'>
              <div class="grid grid-cols-2 md:grid-cols-1 gap-2 mx-3 py-2  ">
                <div className='   rounded-md divide-y divide-solid bg-white py-2 px-2 drop-shadow-lg' >
                  <div className='py-2 text-lg'>Form Status</div>
                  <div className='py-2 text-sm'>Apply for Online Registration
                    <div className='py-2 sm:px-2 text-sm text-[#525F7F]'>Fill Online Application Form</div>
                    <div className='py-2 sm:px-2 text-sm text-[#525F7F]'>Pay Examination Fee </div>
                    <Link to="" className='py-3 sm:px-2 text-sm text-[#525F7F]'>Go Exam </Link>
                  </div>
                </div>

                <div className='rounded-md drop-shadow-lg divide-y divide-solid bg-white py-2 px-2' >
                  <div className='py-2 text-lg'>Quick Links</div>
                  <div className='py-2 text-sm'>Mobile Number (Verified)
                    <div className='py-2 text-sm  '>Verify Email ID (Verified) </div>
                  </div>
                  <div>
                    <div className='py-2 text-sm px-2 text-[#5C60F5] '>My Payments</div>
                    <div className='py-2 text-sm px-2 text-[#5C60F5] '>Need Help?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Quiz competiton status*/}
          <div className='rounded-md  drop-shadow-lg  divide-solid bg-white py-2 px-2 grid-flow-col gap-2' >
            <div className='py-4 text-2xl border-b-2 text-center'>quiz competition</div>

            <div className='flex flex-col bg-[#EFEFFE] p-2 rounded-md '>
              <div className='py-2 text-sm'>Welcome, Quiz competition - 2023 Applicant!</div>
              <div className='text-sm  '>You can apply and track your Quiz competition - 2023 application here. </div>

              <div className='flex flex-wrap h-fit w-fit items-center'>
                <div className='text-sm '>Your application number is XXXXXXXXXXXXXXXX and your application status is</div>
                <label className='bg-[#00CC88] text-white p-2 rounded-2xl ml-1 my-8 '> SUBMITTED</label >
              </div>
            </div>

            <div className=' flex flex-col items-center h-52 border-t-2 pb-4 '>
              <div className=' flex '><button className=' bg-[#00CC88] text-white mx-auto my-3 py-2  rounded-2xl px-4'  >Download / Print : Confirmation Page</button></div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Download
