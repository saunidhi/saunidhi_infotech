import React, { useEffect } from 'react'
import CareerBgImg from './CareerBgImg.jpg'
import WorkCard from './WorkCard'
import WorkSubCard from './WorkSubCard'
import Cumm from './Cumm.png'
import Question from './Question.png'
import Crausal from './Crausal'

function Career() {
    const Goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }
    const Mystyle = {
        FontFamily: ' Montserrat',
        FontSize: ' 24px',
        FontStyle: ' normal',
        FontWeight: '400',
        LineHeight: ' 32px'
    }

    useEffect(() => {
        document.title = 'Career ';
    }, []);

    return (
        <>
            {/* Navbar Background color */}
            <div className="h-[4rem] bg-slate-800 md:h-[4rem] xl:h-[7rem]"></div>

            <div className="Bgimge sm:flex sm:flex-col h-[50vh] sm:h-[100vh] sm:gap-5 md:h-[100%] xl:h-[100vh] bg-no-repeat image md:pl-[10rem]" style={{ backgroundImage: `url(${CareerBgImg})`, backgroundSize: '100% 100%' }}>

                <div className='uppercase text-sm flex gap-2 pt-28 px-6 md:pt-[277px] sm:pt-[18rem] sm:text-[20px] md:text-[23px]'>
                    <span className='hover:text-blue-700 hover:cursor-pointer'>About</span>
                    <span className='hover:text-blue-700 hover:cursor-pointer'>Careers</span>
                </div>

                <div style={Mystyle} className="text-xl w-36 mx-6 mt-5 sm:w-60 sm:text-[28px] md:text-[33px] md:w-64 ">
                    Your new team is waiting.
                </div>

                <div className="text-sm w-40 mx-6 mt-2 sm:w-72 sm:text-[18px] md:w-[50%] md:text-[23px] ">
                    At Saunidhi Infotech, we believe in the power of our people to solve the toughest industry problems.
                </div>
            </div>

            <div className="bg-[#138AA4] w-[100%] h-14 flex justify-center items-center text-white">Search for open positions</div>



            <div className='bg-white text-xl h-[5rem] w-[100%] flex justify-center items-center'>
                <WorkCard text={" Why Work at Saunidhi InfoTech"} />
            </div>

            {/* work 4 card of saunidhi infotech */}
            <div className='flex flex-wrap p-5 gap-3 justify-around sm:gap-0 sm:justify-evenly md:flex-nowrap md:gap-0'>
                <WorkSubCard title="Align your strengths" para="Every passionate employee is unique and we align work to their strengths. We thrive on diversity, hire for originality, and welcome you as an individual." />
                <WorkSubCard title="Invested people" para="We serve each other with respect and support each other to help you belong, with inclusive outreach programs for underserved communities." />
                <WorkSubCard title="Enriching benefits" para="You will be offered opportunities to nurture great relationships with your manager and peers, as well as development opportunities and internal career mobility." />
                <WorkSubCard title="Guiding principles" para="In a dynamic and positive workplace culture, we look out for each other and work by our eight guiding principles every day." />
            </div>

            {/* Find your team card */}
            <div className='bg-white text-xl h-[5rem] w-[100%] flex justify-center items-center '>
                <WorkCard text={" Find your team"} />
            </div>

            {/* This is a crausal */}
            <div className='w-[95%] mx-auto mb-10 sm:mb-0'>
                <Crausal />
            </div>

            <div className='flex flex-wrap my-4 gap-8 md:flex-nowrap sm:mt-[5rem]'>
                {/* community */}
                <div className="shadow-md shadow-gray-500 community flex flex-col gap-5 mx-4 p-5 sm:w-[50%]">
                    <div className='flex justify-center '><img src={Cumm} alt="community img" className='h-20 w-20' /></div>
                    <div style={Mystyle} className="title flext text-center text-[20px]">Join Our Talent Community</div>
                    <hr className='mx-2 h-[2px] bg-[#00111F] ' />
                    <p className='mx-2'>We’ll keep you updated with the latest job opportunities in your region, invite you to exclusive recruitment events and share Infor news with you. You can also set up specific job alerts under your profile.</p>
                    <div className='h-[50px] w-[100px] rounded-2xl flex items-center justify-center bg-blue-200/40 hover:bg-blue-200/60 text-[#005CE6]  hover:cursor-pointer'>Join now</div>
                </div>

                {/* Question*/}
                <div className="shadow-md shadow-gray-500 community flex flex-col gap-5 mx-4 p-5 sm:w-[50%] ">
                    <div className='flex justify-center '><img src={Question} alt="community img" className='h-20 w-20' /></div>
                    <div style={Mystyle} className="title flext text-center text-[20px]">Got a Question?</div>
                    <hr className='mx-2 h-[2px] bg-[#00111F] ' />
                    <p className='mx-2'>Looking for your new career can bring up many questions for you. We’ve got this covered! Please click here to read our Frequently Asked Questions.</p>
                    <div className='h-[50px] w-max rounded-2xl flex items-center justify-center bg-blue-200/40 hover:bg-blue-200/60 text-[#005CE6] px-4 hover:cursor-pointer'>Check out our FAQs</div>
                </div>
            </div>

            {/* sm:mb-[-7px]  */}
            <div onClick={Goto} className="sm:py-9 bg-[#138AA4] w-[100%] h-14 flex justify-center items-center text-white cursor-pointer ">Search for open positions</div>
        </>
    )
}
export default Career
