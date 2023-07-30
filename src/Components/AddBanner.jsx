import React from 'react'
import CyberScurity from '../Components/Assets/CyberScurity.png'
import TopCompany from '../Components/Assets/TopCompany.png'
import SoftwareDeveloper from '../Components/Assets/SoftwareDeveloper.png'
import Suanidhi from '../Components/Assets/Suanidhi.png'

function AddBanner() {
    const mystyle = {
        backgroundColor: "",
        fontFamily: "Arial",
        boxShadow: '0px 0px 10px 5px gray',
        blur: "10px",
    };

    return (
        <>
            <div style={mystyle} className="shadow-xl rounded-2xl md:h-[22rem] w-[80%] mx-auto my-6 md:flex md:items-center md:justify-around">
                <div className="rounded-none md:w-80 ">
                    <div className="flex flex-col justify-center text-center">
                        <div className="image mx-auto">
                            <img src={Suanidhi} alt="" />
                        </div>
                        <div className="text-[18px] items-center">Suanidhiinfotech letest awards</div>
                    </div>
                </div>
                
                <div className='md:h-48 md:w-1 md:bg-gray-500 md:shadow-sm md:shadow-black'></div>

                <div className="rounded-none md:w-80">
                    <div className=" flex flex-col justify-center text-center p-5">
                        <div className="image mx-auto">
                            <img src={SoftwareDeveloper} alt="" />
                        </div>
                        <div className="text-[18px]">TOP Software Developer</div>
                    </div>
                </div>
                <div className='md:h-48 md:w-1 md:bg-gray-500 md:shadow-sm md:shadow-black'></div>

                <div className="rounded-none md:w-80">
                    <div className="flex flex-col justify-center text-center p-5">
                        <div className="image mx-auto">
                            <img src={TopCompany} alt="" />
                        </div>
                        <div className="text-[18px]">TOP AI/Iot Company</div>
                    </div>
                </div>
                <div className='md:h-48 md:w-1 md:bg-gray-500 md:shadow-sm md:shadow-black'></div>

                <div className="rounded-none md:w-80">
                    <div className="flex flex-col justify-center text-center p-5">
                        <div className="image mx-auto">
                            <img src={CyberScurity} alt="" />
                        </div>
                        <div className="text-[18px]">TOP Cybersecurity Consulting Company</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBanner
