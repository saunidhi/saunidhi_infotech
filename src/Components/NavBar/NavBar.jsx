import amiInfotech from '../Assets/amiInfotech.png'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Initialization for ES Users
import { Collapse, initTE, Dropdown } from "tw-elements";

initTE({ Collapse, Dropdown });

function NavBar() {
    let location = useLocation();

    // this method for only Bottom to top scrolling 
    const Goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }

    // this method for only Bottom to top scrolling 
    const GotoService = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#Service');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const GotoProjectIdea = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#ProjectIdea');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }


    let [open, setOpen] = useState(false);

    return (
        <>
            {/* ###################################################################################################################################### */}
            {/* <!-- Main navigation container --> */}

            return (
            <div className='shadow-md w-full fixed top-0 left-0 z-10 '>
                <div className='md:flex items-center justify-between bg-black py-[3px] md:px-10 px-2 '>
                    <div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
                        <Link to="/" onClick={Goto} className='text-3xl flex items-center '>
                            <img src={amiInfotech} alt="" />
                            Saunidhi Infotech
                        </Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-white text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={`uppercase md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ' : 'top-[-490px]'}`}>
                        <li className='md:ml-8 text-xl md:my-0 my-7 group relative'>
                            <Link to="/" onClick={GotoService} className='text-white hover:text-gray-400 duration-500'>
                                <button className="text-white hover:text-gray-400 uppercase duration-500 inline-flex items-center">
                                    <span className="mr-1">Services</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </button>

                                <ul className="absolute hidden bg-black pt-1 group-hover:block">
                                    <li className="uppercase">
                                        <Link to="/Healthcare" onClick={Goto} className="rounded-t hover:text-white py-2 px-4 block whitespace-no-wrap">healthcare</Link>
                                    </li>
                                    <li className="uppercase">
                                        <Link to="/education" onClick={Goto} className="rounded-t hover:text-white py-2 px-4 block whitespace-no-wrap">Education</Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link to="/" onClick={GotoProjectIdea} className='text-white hover:text-gray-400 duration-500'>Solution</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link to="/about" onClick={Goto} className='text-white hover:text-gray-400 duration-500'>About</Link>
                        </li>
                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <Link to="/contact" onClick={Goto} className='text-white hover:text-gray-400 duration-500'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            )
        </>
    )
}

export default NavBar;
