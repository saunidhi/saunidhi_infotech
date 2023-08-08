import amiInfotech from '../Assets/amiInfotech.png'
import { BsList } from "@react-icons/all-files/bs/BsList";
import MobileNavBar from './MobileNavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [ShowSideBar, setSideBar] = useState(false);

    const Toggle = () => {
        if (ShowSideBar) {
            setSideBar(false);
        }
        else {
            setSideBar(true);
        }
    }

    // this method for only Bottom to top scrolling 
    const GotoService = (e) => {
        e.preventDefault(e);
        // const section = document.querySelector('#Service');
        e.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const GotoProjectIdea = () => {
        const section = document.querySelector('#ProjectIdea');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            <header className='items-center bg-transparent absolute top-0 z-[1] w-[100%] justify-around text-white flex  xl:h-[7rem]'>
                <div className="logo flex items-center ">

                    <div className="logo xl:w-[58px] xl:h-[100%] flex items-center ">
                        <Link to='/'>
                            <img src={amiInfotech} alt="" />
                        </Link>
                    </div>
                    <div className="logo-title text-[20px] font-bold sm:text-xl md:text-2xl xl:text-3xl ">
                        <Link to='/'>
                            SaunidhiInfotech
                        </Link>
                    </div>
                </div>
                <div className="sm:hidden xl:hidden items-center hover:bg-red-600 p-1" onClick={Toggle}> <BsList size={30} /></div>

                <div className="hidden sm:flex sm:text-[10px]  propertes uppercase xl:flex items-center xl:text-[20px] text-center font-semi ">

                    <Link to="/" onClick={GotoService} className="Services sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2 cursor-pointer">Services</Link>

                    <Link to="/" onClick={GotoProjectIdea} className="solution sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2 cursor-pointer">solution</Link>

                    {/*Portfolio hidden */}
                    <Link to="portfolio" className="hidden portfolio sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">portfolio</Link>

                    <Link to="about" className="company sm:px-2 md:px-3 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2 cursor-pointer">About us</Link>
                    
                    {/*Blog hidden */}
                    <Link to="blog"  className="hidden blog sm:px-1 md:w-[100px] md:text-base xl:px-2 xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-1 cursor-pointer">blog</Link>

                    <Link to="contact" className="contact sm:px-2 md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">contact us</Link>
                </div>
            </header>
            <div className="sm:hidden duration-150  fixed z-20 float-right ">
                {ShowSideBar && <MobileNavBar Toggle={Toggle} />}
            </div>
        </>

    )
}

export default NavBar
