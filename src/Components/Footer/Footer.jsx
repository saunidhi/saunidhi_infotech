import React from 'react'
import { LiaLinkedinIn, LiaTwitter, LiaInstagram ,LiaFacebook,LiaYoutube} from "react-icons/lia";

function Footer() {
    return (
        <>
            <div className="footer bg-black text-white text-center border-t-white pt-1 text-sm items-center sm:flex sm:justify-around md:flex md:justify-around md:h-16 pb-2">
                <span className='flex items-center justify-center '>
                    <span className='uppercase text-xs xl:text-base'>© Copyright 2023. Saunidhi InfoTech. All rights reserved</span>
                </span>
                <span className='uppercase text-xs flex flex-wrap sm:flex-nowrap justify-center items-center gap-2'>
                    <div className="icons flex  my-1">
                        <LiaInstagram size={30} />
                        <LiaTwitter size={30} />
                        <LiaFacebook size={30} />
                        <LiaLinkedinIn size={30} />
                        <LiaYoutube size={30} />
                    </div>
                </span>
            </div>
        </>
    )
}

export default Footer
