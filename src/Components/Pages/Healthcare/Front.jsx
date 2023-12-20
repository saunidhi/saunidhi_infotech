import React, { useEffect } from 'react'
import HealthCareBgImg from './HealthCareImg.jpg'
import BannerImg from './BannerImg.png'
import ContectUs from './ContectUs'
import NavBar from '../../NavBar/NavBar'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet'

function Front() {
    const myStyle = {
        FontWeight: "400",
        FontStyle: "normal",
        FontFamily: "Montserrat"
    }

    const BannerStyle = {
        FontFamily: " Source Sans Pro",
        FontStyle: " normal",
        FontWeight: "400",
        LetterSpacing: " 1.1px"
    }

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        document.title = "Saunidhi InfoTech HealthCare";
    })

    return (
        <>

            <Helmet>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VB1ZSX32N1"></script>
                <script>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VB1ZSX32N1');
          `}
                </script>
            </Helmet>


            <NavBar />
            {/* Header Background Image */}
            <div className="Bgimge sm:flex sm:flex-col h-[50vh] sm:h-[30rem] sm:gap-5 md:h-[100%] xl:h-[80vh] bg-no-repeat image" style={{ backgroundImage: `url(${HealthCareBgImg})`, backgroundSize: '100% 100%' }}>

                {/* Header front containts */}
                <div className=" h-[50vh] w-[100%] pt-24 sm:h-[30rem] sm:mt-8 sm:pl-10 md:pl-[9rem] md:pt-[8rem]">
                    <div className=" text-white w-[90%] mx-auto sm:mx-0 h-[10rem] flex flex-col gap-4 md:gap-6 xl:gap-7">
                        <div className='uppercase flex gap-8 text-xs sm:text-lg '>
                            <span>Products</span>
                            <span>CloudSuite™ Healthcare</span>
                        </div>

                        <div className='text-2xl sm:text-5xl'>
                            CloudSuite™ Healthcare
                        </div>
                        <div className='text-sm sm:text-lg'>
                            Empowering healthcare systems with modern, cloud-based ERP
                        </div>
                    </div>
                </div>
            </div>

            {/* healthcare content  */}
            <div className='flex flex-col gap-5 md:flex-row md:h-[40rem] md:gap-0 md:w-[90%] md:mx-auto'>
                <div className='flex flex-col gap-2 px-1 md:h-[100%] '>
                    <div className='md:w-[30rem] md:mt-[25rem]'>
                        <h1 className='text-[20px] '>End-to-end capabilities for today’s healthcare professionals</h1>
                        <p className='text-[15px]'>Saunidhi Infotech CloudSuite Healthcare delivers end-to-end ERP financial and accounting, supply chain, and HR capabilities—fully integrated and delivered in the cloud. Experience ultimate security and flexibility, infused with deep industry-specific functionality with financial, supply management, and HR software that eliminates the need for costly and limiting customisations.</p>
                    </div>
                </div>
                {/* bg-[#EFEFF0]  */}
                <div className='h-[180px] w-[90%] flex flex-col p-5 gap-2 mx-auto sm:h-[180px] sm:p-5 sm:w-[25rem] md:mt-[-25px] bg-[#EFEFF0] md:h-fit '>
                    <h1 className='text-[22px] sm:text-[24px]'>CloudSuite™ Healthcare Resources</h1>
                    <h2 className='text-[18px] sm:text-[20px]'>Product Demo Videos</h2>
                    <h3 className='text-[13px] sm:text-[18px] text-blue-400 px-6'>CloudSuite Healthcare HCM</h3>
                </div>
            </div>


            <div className='bg-[#F6F5F5] h-fit mt-5 py-5'>
                <h1 style={myStyle} className='flex justify-center text-2xl h-[3rem] items-center'>Key capabilities</h1>

                {/*this is three card of containner */}
                <div className='flex flex-wrap gap-4 justify-center sm:w-[80%] sm:mx-auto sm:justify-between md:justify-between md:mx-auto mt-2 '>

                    <div className="card h-[20rem] w-[18rem] px-2 bg-white shadow-sm shadow-black flex flex-col gap-3">
                        <h6 style={myStyle} className='text-center text-lg pt-3'>Pre-built critical healthcare capabilities</h6>
                        <hr className='mx-3 bg-black' />
                        <p>Leverage best practices and design based on decades of experience and thousands of implementations.<br />
                            Enable faster, simpler deployments with prepackaged workflows, content, integrations, and analytics.
                            Avoid complex customisations; simplify maintaining software.

                        </p>
                    </div>

                    <div className="card h-[20rem] w-[18rem] px-2 bg-white shadow-sm shadow-black flex flex-col gap-3">
                        <h6 style={myStyle} className='text-center text-lg pt-3'>Cloud design drives agility</h6>
                        <hr className='mx-3 bg-black' />
                        <p>Provide a consistent and powerful user experience with software designed for the cloud.<br />
                            Simplify data aggregation and workflow integration with connected cloud apps. <br />
                            Enjoy a lower TCO, elastic computing power, hyper scaling, automatic upgrades, and a data lake.
                        </p>
                    </div>

                    <div className="card h-[20rem] w-[18rem] px-2 bg-white shadow-sm shadow-black flex flex-col gap-3">
                        <h6 style={myStyle} className='text-center text-lg pt-3'>Actionable insights with enterprise analytics</h6>
                        <hr className='mx-3 bg-black' />
                        <p>Enable accurate, data-driven decisions with access to interconnected virtual instances of data.<br />
                            Unify enterprise and local data without physical replication.<br />
                            Surface in-context data with prepackaged industry and role-based content.
                        </p>
                    </div>
                </div>
            </div>

            {/* image banner */}
            <div className="h-fit mt-5 sm:flex sm:flex-col sm:h-[25rem] sm:gap-5 md:h-[25rem] xl:h-[25rem] bg-no-repeat md:pl-0 md:pt-14 xl:pt-14 " style={{ backgroundImage: `url(${BannerImg})`, backgroundSize: '100% 100%' }}>
                <div className="sm:mx-auto md:w-[80%]">
                    <p style={BannerStyle} className='text-white text-xl p-3 md:text-3xl '>SaunidhiInfotech has given us the ability to integrate with our clinical systems and partners in a way that was impossible with our legacy system. The integration has helped us be more efficient, control our costs, and ultimately serve our community better.</p>

                    <div className='p-3'>
                        <h3 style={BannerStyle} className='text-white'>OLIVER GALICKI</h3>
                        <h3 style={BannerStyle} className='text-white'>DIRECTOR OF IT SERVICES, SLIDELL MEMORIAL HOSPITAL</h3>
                    </div>
                </div>
            </div>


            <div className='px-2 flex flex-col gap-4'>
                <h1 style={myStyle} className='text-[20px] md:text-[32px] text-center'>A complete operational platform designed for healthcare</h1>
                <p className='text-center md:mx-auto md:w-[80%]'>Saunidhi-Infotech CloudSuite Healthcare is a complete software platform designed for healthcare—that encompasses a comprehensive suite of business solutions unique to healthcare, including finance, planning, and supply chain. Additional capabilities include human capital and asset management.</p>

                <div className="sm:w-[80%] sm:mx-auto flex flex-col gap-3 py-5 md:py-10">
                    <div className="flex flex-col sm:flex-row gap-5 ">
                        <div className="card flex flex-col gap-1 sm:w-[500px] ">
                            <h3 style={myStyle} className='text-[20px]'>Affordability of care</h3>
                            <span>Real-time interfaces between modules</span>
                            <span>Supplier onboarding and invoice KPIs</span>
                            <span>Reporting and consolidation</span>
                        </div>
                        <div className="card flex flex-col gap-1 sm:w-[500px] ">
                            <h3 style={myStyle} className='text-[20px]'>Employee potential</h3>
                            <span>Science infusion</span>
                            <span>Mobile app HR transactions</span>
                            <span>HCM and other solution integration</span>
                            <span>Talent and workforce management</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <div className="card flex flex-col gap-1 sm:w-[500px] ">
                            <h3 style={myStyle} className='text-[20px]'>Real-time visibility</h3>
                            <span>Financials, supply chain and HCM</span>
                            <span>Business Intelligence and Analytics reporting</span>
                            <span>Embedded analytics</span>
                        </div>
                        <div className="card flex flex-col gap-1 sm:w-[500px] ">
                            <h3 style={myStyle} className='text-[20px]'>Supply chain visibility</h3>
                            <span>Science-based supply recommendations</span>
                            <span>Tools to minimise stockouts</span>
                            <span>Mobile app supply transactions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact us form */}
            <ContectUs />
        </>
    )
}

export default Front
