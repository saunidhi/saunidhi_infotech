import React from "react";
import Slider from "react-slick";
import TeamImg from './TeamImg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Crausal() {
    const Mystyle = {
        FontFamily: ' Montserrat',
        FontSize: ' 24px',
        FontStyle: ' normal',
        FontWeight: '400',
        LineHeight: ' 32px'
    }

    const Mystyle2 = {
        FontFamily: 'Source Sans Pro',
        FontSize: '20px',
        FontStyle: 'normal',
        FontWeight: '400',
        LineHeight: '32px'
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1
    };
    
    return (
        <Slider {...settings}>
            <div>
                {/* Crousal */}
                <div className='flex flex-wrap  w-[90%] h-[30rem] shadow-md shadow-gray-600 my-5 mx-auto sm:h-fit md:flex-nowrap md:h-[100%]'>
                    <div className='md:h-[100%]' style={{ width: '100%' }}>
                        <img className='' style={{ width: '100%' }} src={TeamImg} alt="TeamImg" />
                    </div>
                    <div className="flex flex-col p-5 gap-2">
                        <span style={Mystyle2}>OPEN POSITIONS</span>
                        <span className='md:text-[28px]' style={Mystyle}>Sales & Marketing</span>
                        <p style={Mystyle2}>Work in teams that inspire excellence, collaborating to ensure our customers have the world's most disruptive ERP solutions.</p>
                        <span className='text-[#005CE6]'>Search Sales & Marketing opportunities today</span>
                    </div>
                </div>
            </div>
            <div>
            <div className='flex flex-wrap w-[90%] h-[30rem] shadow-md shadow-gray-600 my-5 mx-auto sm:h-fit md:flex-nowrap md:h-[100%]'>
                    <div className='md:h-[100%]' style={{ width: '100%' }}>
                        <img className='' style={{ width: '100%' }} src={TeamImg} alt="TeamImg" />
                    </div>
                    <div className="flex flex-col p-5 gap-2">
                        <span style={Mystyle2}>OPEN POSITIONS</span>
                        <span className='md:text-[28px]' style={Mystyle}>Sales & Marketing</span>
                        <p style={Mystyle2}>Work in teams that inspire excellence, collaborating to ensure our customers have the world's most disruptive ERP solutions.</p>
                        <span className='text-[#005CE6]'>Search Sales & Marketing opportunities today</span>
                    </div>
                </div>
            </div>
            <div>
            <div className='flex flex-wrap w-[90%] h-[30rem] shadow-md shadow-gray-600 my-5 mx-auto sm:h-fit md:flex-nowrap md:h-[100%]'>
                    <div className='md:h-[100%]' style={{ width: '100%' }}>
                        <img className='' style={{ width: '100%' }} src={TeamImg} alt="TeamImg" />
                    </div>
                    <div className="flex flex-col p-5 gap-2">
                        <span style={Mystyle2}>OPEN POSITIONS</span>
                        <span className='md:text-[28px]' style={Mystyle}>Sales & Marketing</span>
                        <p style={Mystyle2}>Work in teams that inspire excellence, collaborating to ensure our customers have the world's most disruptive ERP solutions.</p>
                        <span className='text-[#005CE6]'>Search Sales & Marketing opportunities today</span>
                    </div>
                </div>
            </div>          
        </Slider>
    );

}

export default Crausal
