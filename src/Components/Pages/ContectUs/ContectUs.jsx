import React, { useEffect } from 'react'
import ContectUsBgImg from "../ContectUs/ContectUsBgImg.png"
import ContectUsInfo from './ContectUsInfo'
import ContectUsForm from './ContectUsForm'
import NavBar from '../../NavBar/NavBar'
import ReactGA from 'react-ga';
// import SuccessMsg from '../../Alerts/SuccessMsg'

function ContectUs() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        // eslint-disable-next-line
        document.title = "Saunidhi InfoTech Contact us"
    }, []);

    return (
        <>
            <NavBar />
            {/* Navbar Background color */}
            <div className="hidden h-[4rem] bg-slate-800 md:h-[4rem] xl:h-[7rem]"></div>

            <div className='absolute bottom-0 right-0'>
                {/* <SuccessMsg /> */}
            </div>

            {/* this tag for only image manage*/}
            <div className="h-[100%] bg-no-repeat w-[100%] md:h-[100%]">
                <div style={{ backgroundImage: `url(${ContectUsBgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '101% 100%' }}>
                    <div className=' h-[60vh] flex flex-col justify-center px-4 gap-6 md:mx-20 '>
                        <div className="text-xl md:text-2xl text-white">Contact Us</div>
                        <div className='text-3xl md:text-4xl text-white'>Contact Saunidhi InfoTech</div>
                        <div className="text-[18px] py-2 text-white md:w-[40%]">Whether you're looking to discuss a potential partnership, kick off a new implementation, or learn more about Saunidhi InfoTech products, we're here to help.</div>
                    </div>

                </div>
            </div>
            <div className="md:flex justify-around md:mb-20">

                <div className="md:w-[500px]">
                    <ContectUsInfo />
                </div>
                <div className="mx-auto w-[90%] md:mt-[-100px] md:w-[500px]">
                    <ContectUsForm />
                </div>
            </div>
        </>
    )
}

export default ContectUs
