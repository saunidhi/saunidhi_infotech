import React from 'react'
import { FaWindowClose } from "react-icons/fa";
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

    return (
        <>
            <div className={`fixed h-[100%] w-[100%] bg-black/80 hover:scroll-auto z-50 `}>
                <div className="bg-gray-800 h-[100vh] w-[300px] rounded-r-3xl rounded-br-2xl">
                    <header className='bg-gray-900 h-12 flex justify-between px-4 rounded-r-3xl  text-[20px] items-center border-blue-200'>
                        <div className="text-white"> SaunidhiInfotech</div>
                        <div className="hover:text-red-600 text-white " onClick={props.Toggle}><FaWindowClose /></div>
                    </header>
                    <div className="text-[10px] propertes uppercase flex flex-col font-semi items-center gap-2 my-4">

                        <Link to="/" onClick={Goto} className="Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white rounded-2xl text-center">Services</Link>

                        <Link onClick={GotoProjectIdea} className="Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white 
                        rounded-2xl text-center">SOLUTION</Link>

                        {/* this is disable for some time */}
                        <Link to="" onClick={props.Toggle} className="hidden Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white rounded-2xl text-center">PORTFOLIO</Link>

                        <Link to="about" onClick={props.Toggle} className="Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white rounded-2xl text-center">ABOUT US</Link>

                        {/* this is disable for some time */}
                        <Link to="" className="hidden Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white rounded-2xl text-center">BLOG</Link>

                        <Link to="contact" onClick={props.Toggle} className="Services p-2 text-base w-[80%] text-white hover:bg-red-500 cursor-pointer hover:text-white rounded-2xl text-center">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavBar
