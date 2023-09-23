import React from 'react'
import LaptopImg from './Assets/LaptopImg.png'
import { Link } from 'react-router-dom'

function ProjectIdeaCard() {
    return (
        <>
            <div className="bg-black py-5 text-white xl:h-[500px] xl:flex xl:items-center xl:justify-around">
                <div className="Project-idia-content xl:flex xl:flex-col text-center xl:w-[50%] sm:gap-11 xl:gap-10">
                    <span className='text-[30px]  sm:text-[30px] md:text-[40px] xl:text-[48px]'>Have a project idea?</span>
                    <p className='mt-3 sm:text-[18px] sm:w-[500px] md:text-[20px] md:w-[580px] xl:text-[28px] xl:w-[685px] mx-auto'>The best minds in the industry are ready to help you with a free consultation! Tell us about your future project, and we will get back to you shortly.</p>
                    <Link to="/contact" className='my-4 uppercase text-xl rounded-3xl w-[15rem] h-[3rem] sm:w-[15rem] sm:h-[3rem] xl:w-[20rem] xl:h-[4rem] bg-[#101010] flex justify-center items-center mx-auto cursor-pointer hover:bg-red-600'>GET EXPERT ADVICE</Link>
                </div>
                <div className='flex justify-center'>
                    <img src={LaptopImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default ProjectIdeaCard
