import React from 'react'
import HealthCareBgImg from './HealthCareBgImg.jpg'

function Front() {
    return (
        <>

            <div className="Bgimge sm:flex sm:flex-col h-[50vh] sm:h-[30rem] sm:gap-5 md:h-[100%] xl:h-[100vh] bg-no-repeat image md:pl-[10rem]" style={{ backgroundImage: `url(${HealthCareBgImg})`, backgroundSize: '100% 100%' }}>

                <div className=" h-[50vh] w-[100%] pt-24 sm:h-[30rem] ">
                    <div className=" text-purple-600 w-[90%] mx-auto h-[10rem] flex flex-col gap-4 ">
                        <div className='uppercase flex gap-8 text-xs sm:text-lg'>
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

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2 px-1'>
                    <h1 className='text-[20px]'>End-to-end capabilities for today’s healthcare professionals</h1>
                    <p className='text-[15px]'>Saunidhi Infotech CloudSuite Healthcare delivers end-to-end ERP financial and accounting, supply chain, and HR capabilities—fully integrated and delivered in the cloud. Experience ultimate security and flexibility, infused with deep industry-specific functionality with financial, supply management, and HR software that eliminates the need for costly and limiting customisations.</p>
                </div>
                <div className='bg-[#EFEFF0] h-[180px] w-[350px] flex flex-col p-5 gap-2 mx-auto'>
                    <h1 className='text-[22px]'>CloudSuite™ Healthcare Resources</h1>
                    <h2 className='text-[18px]'>Product Demo Videos</h2>
                    <h3 className='text-[13px] text-blue-400'>CloudSuite Healthcare HCM</h3>
                </div>
            </div>

            <div >
                <h1 className='mx-auto flex'>Key capabilities</h1>
            </div>

        </>
    )
}





export default Front
