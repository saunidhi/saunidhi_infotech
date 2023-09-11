import React from 'react'
import Adobe_Photoshop from '../Assets/Adobe_Photoshop.png'
import Adobe_Illustrator from '../Assets/Adobe_Illustrator.png'
import Adobe_After from '../Assets/Adobe_After.png'
import Adobe_XD from '../Assets/Adobe_XD.png'
import invision from '../Assets/invision.svg'
import Sketch_Logo from '../Assets/Sketch_Logo.svg'
import { Link } from 'react-router-dom'

function EducationInfo() {
    return (
        <>
            <div className="Some-Info mt-3 bg-white h-fit py-5 sm:h-[30rem] md:h-fit xl:h-[50rem] xl:mt-5 mx-auto flex flex-col">
                <div className="text-[28px] px-1 xl:text-[48px] xl:w-[879px] mx-auto sm:w-[500px]" style={{ color: "#000", fontFamily: "Times Georgia, serif", fontStyle: "normal", fontWeight: "500", lineHeight: " normal" }}>
                    Software Development Platforms,
                    Technologies & Languages
                </div>

                <div className="text-[18px] px-1 sm:w-[500px] sm:py-2 xl:text-[32px] xl:w-[879px] mx-auto" style={{ color: "#000", fontFamily: "Times Georgia, serif", fontStyle: "normal", fontWeight: "500", lineHeight: " normal" }}>
                    Create exceptional customer experiences & drive meaningful
                    insights guided by the best app development practices and
                    technology trends in the digital world.
                </div>

                <div className="Container flex flex-wrap xl:flex-nowrap mt-3 md:mx-[212px] ">
                    <div className="left-side-card xl:text-[32px] xl:w-[30%] xl:h[100%] flex flex-col xl:gap-2 p-1 m-4" style={{ color: "#000", fontFamily: "Arial", fontStyle: "normal", fontWeight: "500", lineHeight: " normal" }}>
                        <Link className='uppercase'>MOBILE</Link>
                        <Link className='uppercase'>FRONTEND</Link>
                        <Link className='uppercase'>BACKEND</Link>
                        <Link className='uppercase'>Data Analysis</Link>
                        <Link className='uppercase'>DATABASE</Link>
                        <Link className='uppercase'>INFRASTRUCTURE</Link>
                        <Link className='uppercase'>TESTING</Link>
                    </div>
                    <div className="right-side-card flex flex-wrap :flex-nowrap md:mt-14  w-[400px] xl:w-[100%] xl:h-[60%] ">
                        <div className="flex wrap justify-between px-5 gap-7">
                            <div className="flex flex-wrap md:px-3">
                                <img className='xl:h-[41px] xl:w-[42px]' src={Adobe_Photoshop} alt="" />
                                <span className='m-1'>Photoshop</span>
                            </div>
                            <div className="flex flex-wrap ">
                                <img className='xl:h-[41px] xl:w-[42px] flex' src={Adobe_Illustrator} alt="" />
                                <span className='m-1'>illustrator</span>
                            </div>
                            <div className="flex flex-wrap">
                                <img className='xl:h-[41px] xl:w-[42px]' src={Adobe_XD} alt="" />
                                <span className='m-1'>Adobe XD </span>
                            </div>
                            </div>
                        <div className="flex justify-between px-5 gap-6 md:mx-4 ">
                            <div className="flex flex-wrap">
                                <img className='xl:h-[41px] xl:w-[42px]' src={Adobe_After} alt="" />
                                <span className='m-1'>After Effects </span>
                            </div>
                            <div className="flex flex-wrap">
                                <img className='xl:h-[41px] xl:w-[42px]' src={Sketch_Logo} alt="" />
                                <span className='m-1 mx-4'>Sketch </span>
                            </div>
                            <div className="flex flex-wrap">
                                <img className='xl:h-[41px] xl:w-[42px]' src={invision} alt="" />
                                <span className='m-2 mx-3'>invision </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='text-black text-center mt-5 text-[17px] xl:mt-10'>
                    <div className='xl:text-[20px]' style={{ color: "#000", fontFamily: "arial", fontStyle: "normal", fontWeight: "550", lineHeight: " normal" }} >
                        OUR EXPERTISE FOR YOUR BUSINESS
                    </div>
                    <div className='xl:text-[40px] text-[20px] py-4' style={{ color: "#000", fontFamily: " arial", fontStyle: "normal", fontWeight: "650", lineHeight: " normal" }}>
                        Why choose us for successful digital transformation
                    </div>
                </div>

            </div >
        </>
    )
}

export default EducationInfo
