import React from 'react'
import BannerBg from './BannerBg.png'
import { Context } from '../../Utils/Context'
import { useContext } from 'react'
import { useEffect } from 'react';

function AboutInfo() {

    const { About, AboutPageData } = useContext(Context);
    const BaseApi = About?.data[0]?.attributes;
    // console.log(About?.data[0]?.attributes);

    useEffect(() => {
        AboutPageData();
    }, []);

    return (
        <>
            <div className=' p-2 flex flex-col gap-3 sm:w-[625px] md:mx-8 '>
                <span className='text-2xl sm:text-3xl md:text-4xl py-4'>About Saunidhi InfoTech</span>

                <p className='md:text-xl'>{BaseApi?.Paragraph_1}</p>

                <p className='md:text-xl'>{BaseApi?.Paragraph_2}</p>
            </div>

            {/* overfilow problem */}
            <div className='h-[100%] bg-[#F6F5F5] sm:w-[90%] mx-auto md:my-[10rem]'>
                <span className='flex justify-center text-[20px] py-3 md:text-[30px]'>Sauidhi InfoTech stats at a glance</span>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-[50%] gap-5'>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>50+</span>
                            <span className='text-[12px] md:text-[20px]'>CUSTOMERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>15+</span>
                            <span className='text-[12px] md:text-[20px]'> CLOUD CUSTOMERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>20+</span>
                            <span className='text-[12px] md:text-[20px]'>EMPLOYEES</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>15+</span>
                            <span className='text-[12px] md:text-[20px]'>SUPPORT EXPERTS</span>
                        </div>
                    </div>

                    <div className='flex flex-col  w-[50%] gap-5'>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>5+</span>
                            <span className='text-[12px] md:text-[20px]'>PARTNERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>2+</span>
                            <span className='text-[12px] md:text-[20px]'>OFFICES</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>1+</span>
                            <span className='text-[12px] md:text-[20px]'>COUNTRIES WITH SAUNIDHI INFOTECH OFFICE</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>2+</span>
                            <span className='text-[12px] md:text-[20px]'>COUNTRIES WHERE CUSTOMERS ARE LOCATED</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:h-[613px]' style={{ backgroundImage: `url(${BannerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                <div className='flex text-white flex-wrap gap-6 py-4 md:gap-0 md:flex-nowrap md:pt-[7rem] xl:pt-[3rem]'>
                    <div className="flex flex-col px-3 gap-3 md:w-[40%] md:h-[100%] md:mx-auto xl:w-[40%]">
                        <span className='uppercase'>{BaseApi?.work_place}</span>
                        <span className='text-[22px] md:text-[25px] xl:text-[36px]'>{BaseApi?.work_place_heading}</span>
                        <p className='xl:text-[24px] md:text-[18px]'>{BaseApi?.work_place_Paragraph}</p>
                    </div>

                    <div className="flex flex-col gap-2 px-3 md:w-[40%] md:mx-auto xl:w-[40%]">
                        <span className='uppercase'>{BaseApi?.Careers}</span>
                        <span className='text-[22px] md:text-[25px] xl:text-[36px]'>{BaseApi?.Careers_heading}</span>
                        <p className='xl:text-[24px] md:text-[18px]'>{BaseApi?.Careers_Paragraph}</p>
                    </div>
                </div>
            </div>

            <div className='h-[14rem] flex items-center justify-center'>
                <div className=' border-2 border-red-600 bg-gradient-to-t from-red-300  to-gray-300  rounded-full text-center shadow-md shadow-red-500 flex flex-col justify-center gap-3 w-[300px] h-[100px] sm:w-[450px] sm:h-[100px] md:w-[40rem] md:h-[110px] xl:w-[50rem] xl:h-[130px]'>
                    <div className='uppercase text-[13px] sm:text-[15px] md:text-[18px]'>LATEST SAUNIDHI INFOTECH</div>
                    <div className='text-[20px] sm:text-[22px] md:text-[25px]'>News & media coverage</div>
                </div>
            </div>

            <div className='card flex flex-col-reverse h-[18rem] my-5 gap-3 md:flex md:flex-row md:w-[100%] md:h-[20rem] md:gap-3 '>

                <div className="card bg-blue-600 rounded-lg uppercase h-[44px] w-[210px] flex justify-center items-center text-white mx-auto hover:bg-blue-800">Locations</div>

                <div className="card bg-[#D9D9D9] py-5 px-2 h-[100%] rounded-2xl mx-2 md:w-[30rem] md:rounded-3xl md:mx-auto">
                    <div className='md:mx-5'>MEDIA COVERAGE</div>
                    <div className='my-3 mx-5 md:mx-10 md:text-xl'>What does a paper company know about ERP? Quite a bit as it turns out</div>
                    <div className='mx-5 text-[13px] md:mx-10 md:text-sm'>Koch Industries COO James Hannan and Saunidhi Infotech CEO Kevin Samuelson discuss the business partnership that could catalyze the type of change many ERP customers have been looking for.</div>
                </div>
            </div>
        </>
    )
}

export default AboutInfo
