import amiInfotech from '../Assets/amiInfotech.png'
import { BsList } from "@react-icons/all-files/bs/BsList";
import MobileNavBar from './MobileNavBar';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    let location = useLocation();
    // console.log(location.pathname);

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
    const Goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }

    // this method for only Bottom to top scrolling 
    const GotoService = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#Service');
            section.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
    }

    const GotoProjectIdea = () => {
        if (location.pathname === "/") {
            const section = document.querySelector('#ProjectIdea');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const [scrolled, setScrolled] = useState(false);

    const hendleScroll = () => {
        const offset = window.scrollY
        if (offset > 900) {
            setScrolled(true);
        }
        else { setScrolled(false); }
    }

    useEffect(() => {
        window.addEventListener("scroll", hendleScroll);
    }, []);

    return (
        <>
            {/* ${location.pathname === "/Login" ? "hidden" : "block"} 
             ${location.pathname === "/signup" ? "hidden" : "block"}
             ${location.pathname === "/education" ? "hidden" : "block"}
             ${location.pathname === "/forget" ? "hidden" : "block"}
             ${location.pathname === "/Regis" ? "hidden" : "block"}
             ${location.pathname === "/Apli" ? "hidden" : "block"} */}
            <header className={` ${scrolled ? " sticky bg-violet-950 z-40" : "absolute"} transition-all duration-200
           items-center bg-transparent  top-0 z-[1] w-[100%] justify-around text-white flex xl:h-[7rem]` }>

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

                {/* hover dropdown menu */}
                <div className="hidden sm:menu-hover sm:flex sm:text-[10px] propertes uppercase xl:flex items-center xl:text-[20px] text-center font-semi ">
                    <Link to="/" onClick={GotoService}  >
                        <div className="group relative menu-hover sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">
                            <div >Services</div>

                            <div className="invisible my-2 absolute z-50 flex w-fit flex-col bg-gray-100 px-4 text-gray-800 shadow-xl group-hover:visible">
                                <Link onClick={Goto} to="Healthcare" className=" block my-3 sm:text-[10px] md:text-base text-center  ">HealthCare</Link >
                                <Link onClick={Goto} to="/education" className=" block my-3 sm:text-[10px] md:text-base text-center border-t-2">Education</Link >
                            </div>
                        </div>
                    </Link>

                    <Link to="/" onClick={GotoProjectIdea} className="solution sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">solution</Link>

                    {/*Portfolio hidden */}
                    <Link to="/portfolio" className="hidden portfolio sm:px-2 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">portfolio</Link>

                    <Link to="/about" className="company sm:px-2 md:px-3 md:w-[100px] md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2 cursor-pointer">About us</Link>

                    {/*Blog hidden */}
                    <Link to="/blog" className="hidden blog sm:px-1 md:w-[100px] md:text-base xl:px-2 xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-1 cursor-pointer">blog</Link>

                    <Link to="/contact" className="contact sm:px-2 md:text-base xl:w-[150px] hover:bg-white hover:text-black hover:rounded-[20px] hover:p-2  cursor-pointer">contact us</Link>
                </div>
            </header>

            <div className={`sm:hidden duration-1000  fixed z-20 float-right `}>
                {ShowSideBar && <MobileNavBar Toggle={Toggle} />}
            </div>

        </>
    )
}

export default NavBar;
