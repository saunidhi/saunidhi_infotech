import React from 'react'
import { LiaLinkedinIn, LiaTwitter, LiaInstagram, LiaFacebook, LiaYoutube } from "react-icons/lia";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer bg-black text-white text-center border-t-white pt-1 text-sm items-center sm:flex sm:justify-between sm:px-3 md:flex md:h-16 pb-2">
                <span className='flex items-center justify-center '>
                    <span className='uppercase text-xs xl:text-base'>© Copyright 2023. Saunidhi InfoTech. All rights reserved</span>
                </span>
                <span className='uppercase text-xs flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 md:mx-[40px]'>
                    <div className="icons flex my-1">
                        <Link > <LiaInstagram size={30} target="_blank" /></Link>
                        <Link to="https://twitter.com/saunidhi46598" target="_blank"> <LiaTwitter size={30} /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100094149437188"> <LiaFacebook size={30} target="_blank" /></Link>
                        <Link to="https://www.linkedin.com/in/saunidhi-infotech-34b07b282/"> <LiaLinkedinIn size={30} target="_blank" /></Link>
                        {/* <LiaYoutube size={30} /> */}
                    </div>
                </span>
            </div>
        </>
    )
}

export default Footer
