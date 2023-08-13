import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function FirstFooter() {
    const MyStyle = {
        FontFamily: "Source Sans Pro",
        FontSize: " 20px",
        FontStyle: "normal",
        FontWeight: "400",
        LineHeight: "31px"
    }

    let location = useLocation();
    const GotoProjectIdea = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#ProjectIdea');
            section.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }

    // this method for only Bottom to top scrolling 
    const GotoService = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#Service');
            section.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
    }

    // this method for only Bottom to top scrolling 
    const Goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }

    return (
        <>
            <div className="bg-black text-white list-none p-3 sm:flex sm:items-center sm:text-[15px] sm:gap-3 md:h-[5rem] md:text-[20px] border-b-2" style={MyStyle}>
                <Link onClick={Goto} to="/"><li>Home</li></Link>
                <Link onClick={GotoProjectIdea} to="/"><li>Solutions</li></Link>
                <Link onClick={GotoService} to="/"><li>Services</li></Link>
                <Link onClick={Goto} to="/About"><li>About</li></Link>
            </div>
        </>
    )
}

export default FirstFooter
