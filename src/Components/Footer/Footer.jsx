import React from 'react'
import { LiaLinkedinIn, LiaTwitter, LiaInstagram, LiaFacebook } from "react-icons/lia";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer bg-black text-white text-center border-t-white pt-1 text-sm items-center sm:flex sm:justify-between sm:px-3 md:flex md:h-16 pb-2">
                <span className='flex items-center justify-center '>
                    <span className='capitalize text-xs xl:text-base '>© Copyright 2023. Saunidhi InfoTech. All Rights Reserved</span>
                </span>
                <span className='uppercase text-xs flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 md:mx-[40px]'>
                    <div className="icons flex my-1">
                        <Link to="https://www.instagram.com/saunidhi_infotech" target="_blank" > <LiaInstagram size={30} /></Link>
                        <Link to="https://twitter.com/saunidhi46598" target="_blank"> <LiaTwitter size={30} /></Link>
                        <Link to="https://www.facebook.com/profile.php?id=100094149437188" target="_blank"> <LiaFacebook size={30}  /></Link>
                        <Link to="https://www.linkedin.com/company/saunidhi-infotech/" target="_blank" > <LiaLinkedinIn size={30} /></Link>
                        {/* <LiaYoutube size={30} /> */}
                    </div>
                </span>
            </div>
        </>
    )
}

export default Footer
