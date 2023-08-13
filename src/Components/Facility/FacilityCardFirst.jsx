import React from 'react'
import Card from './Card'
import CoverImg from '../Assets/CoverImg.png'
import emovebgPreview from '../Assets/emovebgPpreview.png'
import education from '../Assets/education.png'
import parking from '../Assets/parking.png'
import truckIcons from '../Assets/truckIcons.png'
import SettingIcon from '../Assets/SettingIcon.png'
import GameIcon from '../Assets/GameIcon.png'
import AiLot from '../Assets/AiLot.png'
import { Link } from 'react-router-dom'

function FacilityCardFirst() {
    // this method for only Bottom to top scrolling 
    const Goto = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    }


    return (
        <>
            <div className="Bgimge py-14 sm:h-[50rem]  md:h-[50rem] xl:h-[50rem] xl:py-1 bg-no-repeat " style={{ backgroundImage: `url(${CoverImg}) ` }}>
                {/* facility cards */}
                <div className="container flex flex-wrap flex-row-reverse gap-10 w-[90%] sm:flex sm:flex-wrap sm:flex-row-reverse sm:mx-auto md:mx-auto xl:w-[100%] xl:gap-20 xl:p-16 xl:flex xl:flex-wrap xl:flex-row-reverse">
                    <Card image={SettingIcon} title={"Automotive"} />
                    <Card image={truckIcons} title={"Logistics"} />
                    <Card image={education} title={"Education"} h={"144"} w={"300"} />
                    <Link to="Healthcare" onClick={Goto}><Card image={emovebgPreview} title={"Healthcare"} h={14} w={30} /></Link>
                    <Card image={parking} title={"IOT"} />
                    <Card image={AiLot} title={"AI"} />
                    <Card className="p-3" image={GameIcon} title={"E - Sports Tournaments"} />
                </div>
                <div className="bottom-aria w-[10rem] mt-[-100px] ml-3 text-white sm:mt-2 sm:w-[15rem] sm:p-4 xl:h-[12rem] xl:w-[25rem] xl:mx-36 " style={{ fontFamily: "Inter", fontWeight: "700", fontStyle: "normal", lineHeight: "normal" }}>
                    <span className='uppercase'>Enhance your Industry width us</span> <br />
                    <p className='sm:text-[30px] xl:text-[48px]'>Industry-focused AI / IOT Solutions
                    </p>
                </div>
            </div>
        </>
    )
}

export default FacilityCardFirst
