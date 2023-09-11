import React from 'react'
import { FaWindowClose, FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function MobileNavBar(props) {

    // eslint-disable-next-line
    let location = useLocation();

    const Goto = (paths) => {
        if (location.pathname === "/") {
            props.Toggle();
            const section = document.querySelector('#Service');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const GotoProjectIdea = () => {
        if (location.pathname === "/") {
            props.Toggle();
            const section = document.querySelector('#ProjectIdea');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    // this method for only Bottom to top scrolling 
    const GotoUp = () => {
            props.Toggle();
            window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }

    return (
        <>
            <div className={`fixed h-[100%] w-[100%] bg-black/80 hover:scroll-auto z-50 `}>
                <div className="bg-gray-800 h-[100vh] w-[300px] rounded-r-3xl rounded-br-2xl">
                    <header className='bg-gray-900 h-12 flex justify-between px-4 rounded-r-3xl  text-[20px] items-center border-blue-200'>
                        <div className="text-white"> SaunidhiInfotech</div>
                        <div className="hover:text-red-600 text-white " onClick={props.Toggle}><FaWindowClose /></div>
                    </header>
                    <div className="text-[10px] propertes uppercase flex flex-col font-semi items-center gap-2 my-4">

                        <div className="Services group relative menu-hover flex text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white gap-4 p-2">
                            <div className="pl-14">Services</div>
                            <FaAngleDown />
                            <div className="invisible fixed z-50 flex flex-col bg-black w-[75%] text-white shadow-xl group-hover:visible px-8 mt-[35px] mx-[-3px]">
                                <Link to="/" onClick={Goto} className=" block my-3 sm:text-[10px] md:text-base text-center hover:bg-red-500 cursor-pointer hover:text-white w-[100%]">Services</Link>
                                <Link onClick={GotoUp} to="Healthcare" className=" block my-3 sm:text-[10px] md:text-base text-center hover:bg-red-500 cursor-pointer hover:text-white w-[100%]">HealthCare</Link >
                                <Link onClick={GotoUp} to="education" className=" block my-3 sm:text-[10px] md:text-base text-center hover:bg-red-500 cursor-pointer hover:text-white w-[100%]">Education</Link >
                            </div>
                        </div>

                        <Link onClick={GotoProjectIdea} className="Services p-2 text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white pl-16">SOLUTION</Link>

                        {/* this is disable for some time */}
                        <Link to="" onClick={props.Toggle} className="hidden Services p-2 text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white pl-16">PORTFOLIO</Link>

                        <Link to="about" onClick={props.Toggle} className="Services p-2 text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white pl-16">ABOUT US</Link>

                        {/* this is disable for some time */}
                        <Link to="" className="hidden Services p-2 text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white pl-16">BLOG</Link>

                        <Link to="contact" onClick={props.Toggle} className="Services p-2 text-base w-[100%] text-white hover:bg-red-500 cursor-pointer hover:text-white pl-16">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavBar
