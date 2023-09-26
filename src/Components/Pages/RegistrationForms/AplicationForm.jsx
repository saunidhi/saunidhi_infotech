import React from 'react'
import { useEffect } from 'react'
import NavBar from './NavBar';
import FormUrls from '../../FormLocation/FormUrls';
import QuizHeader from '../../QuizBanner/QuizHeader';
import Bottom from './Bottom';

const AplicationForm = () => {

    useEffect(() => {
        document.title = "Saunidhi InfoTech Registration Form";
    });

    return (

        <body className='bg-[#F4F5FB] font-IBM Plex Sans h-[50rem]' >
            <QuizHeader />
            <NavBar />
            <FormUrls />
            <div className='mx-2 sm:flex rounded-md my-3 px-5 py-2 text-center text-white round-full bg-[#7478F7]'>
                <h4 className='text-center text-white'>Announcement: </h4> Welcome QuizCompetition - 2023 Portal.</div>
            <label htmlFor="ragistration" className=' px-4 text-center text-2xl'> Registration </label>
            <div className='md:grid md:grid-flow-col '>
                <div class="grid grid-cols-2 md:grid-cols-1 gap-2 mx-3 py-2 ">
                    <div className='rounded-md divide-y divide-solid bg-white py-2 px-2 shadow' >
                        <div className='py-2 text-lg'>Form Status</div>
                        <div className='py-2 text-sm'>Apply for Online Registration
                            <div className='py-2 px-2 text-base text-[#525F7F]'>Fill Online Application Form</div>
                        </div>
                    </div>

                    <div className='rounded-md shadow divide-y divide-solid bg-white py-2 px-2' >
                        <div className='py-2 text-lg'>Quick Links</div>
                        <div className='py-2 text-sm'>Mobile Number (Verified)
                            <div className='py-2 text-sm px-2 text-[#7478F7] '>Verify Email ID</div>
                            <div className='py-2 text-sm px-2 text-[#7478F7] '>Need Help?</div>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="Aplication" className=' px-4 text-center text-2xl'>Application Form</label>
                    <div className=' rounded-md divide-y divide-solid bg-white mx-2 my-2 py-2 px-2 shadow' >
                        <div className='py-1 text-lg text-center'>Quiz Competition  – 2023</div>
                        <div className=' border-[#DEDFFD] rounded-md py-2 text-sm bg-[#DEDFFD] my-3 mx-1'>
                            <div className='px-2 py-2 my-2 text-[#5356DD]'>Welcome  - 2023 Applicant!</div>
                            <div className='px-2 py-2 my-2 text-[#5356DD]'>You can apply and track your Quiz Competition form - 2023 application here.</div>
                            <div className='px-2 mx-2 rounded-md text-[#5356DD] bg-[#fdc5d3]'>Your application number is xxxxxxxxxxxxxxx and your application status is <label htmlFor="" className='text-[#FF3266]'>NOT SUBMITTED</label>
                            </div>
                        </div>

                        <div className='py-2 px-2 text-base text-[#ffffff]'>
                            <button className=' items-center bg-[#F4811F] px-2 py-2 rounded-md'>Continue : Application Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom/>
        </body>

    )
}

export default AplicationForm
