import React, { useEffect } from 'react'
import NavBar from './NavBar'
import FormUrls from '../../FormLocation/FormUrls'
import QuizHeader from '../../QuizBanner/QuizHeader'
import Bottom from './Bottom'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet'


const EducationForm = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        document.title = "Education form ";
    }, []);

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
            
            <QuizHeader />
            <NavBar />
            <FormUrls />
            <div className='drop-shadow-xl '>
                <div className=' divide-y divide-solid my-4 mx-3'>
                    <h1 className='text-[#FF8C00] my-3 text-2xl'>Application Form : Educational Details</h1>

                    <div>
                        <form className='my-3 mx-auto sm:w-[80%] md:w-[95%] ' action="PrevoiusEducational">
                            <div className=''>

                                <div className='text-[#525F7F] text-xl '>Previous Educational Details</div>

                                <div className=' text-[#16192C] py-4 w-full space-y-3 md:flex md:flex-col md:gap-2'>

                                    <div className='md:mt-3 md:mx-6 '>
                                        <label className='md:float-left md:mx-4 md:w-[15%] ' >Qualifying Exam</label>
                                        <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className=' md:my-4 md:mx-6 '>
                                        <label className='md:float-left md:mx-4 px-3 md:w-[15%] ' >Result Status</label>
                                        <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className=' md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4 px-3 md:w-[15%] ' >Passing Year</label>
                                        <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className='md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4 md:w-[15%]' >Name of School</label>
                                        <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className='md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4 md:w-[15%] '>School Address</label>
                                        <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-xl text-[#525F7F]'> Current Educational Details</div>
                            <div className='  text-[#16192C] py-4 w-full space-y-3 md:flex md:flex-col md:gap-2'>
                                <div className='md:my-4 md:mx-7'>
                                    <label className='md:float-left md:mx-4 md:w-[15%] '>Appearing Exam</label>
                                    <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                </div>
                                <div className='md:my-4 md:mx-7'>
                                    <label className='md:float-left md:mx-4 md:w-[15%] '>Name of School</label>
                                    <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                </div>
                                <div className='md:my-4 md:mx-7'>
                                    <label className='md:float-left md:mx-4 md:w-[15%] '>School Address</label>
                                    <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                </div>
                                <div className='md:my-4 md:mx-7'>
                                    <label className='md:float-left md:mx-4 md:w-[15%] '>Roll Number</label>
                                    <div> <input className='box-content px-3 py-2 w-[90%] sm:w-[70%] rounded-md border-solid border border-black' type="text" /> </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 mx-auto sm:w-[50%]'>
                                <Link to="/FillOnline" className='rounded-md cursor-pointer border-solid border-2 border-[#1F2021] px-3 py-1 mx-5 text-center'>Back</Link>
                                <div className=' md:px-5 cursor-pointer rounded-md  bg-[#FE8E06] px-3 py-2 text-white text-center'>Save</div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}

export default EducationForm
