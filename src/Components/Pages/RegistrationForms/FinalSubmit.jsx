import React, { useEffect } from 'react'
import NavBar from './NavBar';
import { FaUser } from "react-icons/fa6";
import QuizHeader from '../../QuizBanner/QuizHeader';
import FormUrls from '../../FormLocation/FormUrls';
import Bottom from './Bottom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const FinalSubmit = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
        document.title = "Final submit"
    }, [])

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
            <div className='bg-slate-100'>
                <NavBar />
                <FormUrls />
                <div className='border-b-2 pb-5 md:w-[90%] mx-auto'>
                    <label className='text-red-600 mx-5 text-xl'>Review Page : Online Application Form No. xxxxxxxxxx</label>
                </div>

                <div className='h-fit py-5 mt-3 sm:px-4 md:w-[90%] mx-auto '>

                    {/* show status , image */}
                    <div className='grid grid-cols-2 items-center text-center py-2'>
                        <div className=' flex flex-col gap-2 float-left'>
                            <div>Application Status :</div>
                            <div className='bg-rose-500 rounded-lg px-2 py-1 w-fit mx-auto text-white'>Not Submited</div>
                        </div>
                        <div className='mx-auto border-2 rounded-md shadow-md'><FaUser size={150} /></div>
                    </div>

                    {/* Show Application Form Details */}
                    <div className=' text-sm py-2'>
                        <label className='text-base'>Application Form</label>
                        <div className='py-4'>
                            <label htmlFor="">Review the following particulars carefully. If you would like to change any particulars entered, you may do so by using </label>
                            <label className='text-red-600'> 'Left Links' </label>
                            <label >button or press</label>
                            <label className='text-green-500'> 'FINAL SUBMIT'</label>
                        </div>
                        <div>Please ensure correctness of following fields as 'No Correction will be permitted at later stage'.</div>
                        <div className='mx-10 pt-2 flex flex-col gap-2'>
                            <li className='list-none'>Candidate Name</li>
                            <li className='list-none'>Father's Name</li>
                            <li className='list-none'>Mother's Name</li>
                            <li className='list-none'>Date of Birth</li>
                            <li className='list-none'>Gender</li>
                            <li className='list-none'>Category</li>
                        </div>
                    </div>

                    {/* Show Personal form Details */}
                    <div>
                        {/* Personal Details Heading */}
                        <div className='flex items-center my-4 border-t-2 border-b-2'>
                            <div className="md:w-36 py-3 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Personal Details </div>
                        </div>

                        {/* Show candidate's name */}
                        <div className="w-fit text-neutral-800 font-normal font-['IBM Plex Sans'] leading-snug">Candidate's Name (As per class X or Equivalent Certificate)</div>

                        {/* table */}
                        <div className='grid grid-cols-4 gap-10 md:gap-52 border-t-2 my-5 py-3'>
                            <span>Gender</span>
                            <span>Male</span>
                            <span>Candidate's Date of Birth</span>
                            <span>16-10-1997</span>
                        </div>

                        {/* show categorys */}
                        <div className='grid grid-cols-4 gap-10 sm:gap-52 border-t-2 my-5 py-3'>
                            <span>Category</span>
                            <span>General/Unreserved </span>
                        </div>

                        {/* Show Nationality */}
                        <div className='grid grid-cols-4 gap-10 sm:gap-52 border-t-2 my-5 py-3'>
                            <span>Nationality</span>
                            <span>India </span>
                        </div>

                        {/* Show mother's fother's name */}
                        <div className='grid grid-cols-4 gap-10 sm:gap-52 border-t-2 my-5 py-3'>
                            <span>Father's Name</span>
                            <span>xyz </span>
                            <span>Mother's Name</span>
                            <span>xyz</span>
                        </div>

                        {/* Show Domicile state */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-52 border-t-2 my-5 py-3'>
                            <span>Domicile State</span>
                            <span>UTTAR PRADESH </span>
                        </div>

                        {/* Show Domicile state */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-52 border-t-2 my-5 py-3'>
                            <span>Identity Type</span>
                            <span></span>
                            <span>Identity Number</span>
                            <span> </span>
                        </div>

                    </div>

                    {/* show Education details Box */}
                    <div>
                        {/* Education Heading */}
                        <div className='flex items-center my-4 border-t-2 border-b-2'>
                            <div className="py-3 text-gray-900 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Educational Details </div>
                        </div>

                        {/* Show previous Education Details */}
                        <div className='flex gap-14 sm:gap-40 text-lg font-semibold'>
                            <span>Previous Education Details</span>
                        </div>

                        {/* Show Qualifying Exame */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Qualifying Exam</span>
                            <span></span>
                            <span>Result status</span>
                        </div>

                        {/* Show Passing Year */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Passing Year</span>
                            <span>2023</span>
                            <span>Name of School</span>
                            <span>xyz</span>
                        </div>

                        {/* Show School Address  */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>School Address</span>
                            <span>xyz</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Current Educational Details */}

                    <div>
                        {/* Education Heading */}
                        <div className='flex items-center my-4 border-t-2'>
                            <div className="py-3 text-gray-900 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Current Educational Details</div>
                        </div>

                        {/* Show Appearing Exam */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Appearing Exam</span>
                            <span></span>
                            <span>Roll Number</span>
                            <span></span>
                        </div>

                        {/* Show Name of school*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Name of School</span>
                            <span></span>
                        </div>

                        {/* Show School Address  */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>School Address</span>
                            <span></span>
                        </div>
                    </div>

                    {/* show  Present Address  Box */}
                    <div>
                        {/* Present Address */}
                        <div className='flex items-center my-4 border-t-2 '>
                            <div className="md:w-36 py-3 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Present Address</div>
                        </div>

                        {/* Show Country */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Country</span>
                            <span>India</span>
                        </div>

                        {/* Show Premises/House No./Name (Address) */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span className='w-fit'>Premises/House No./Name (Address)</span>
                            <span>xyz</span>
                            <span>District</span>
                            <span>xyz</span>
                        </div>

                        {/* Show Locality*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span className='w-fit'>Locality</span>
                            <span>xyz</span>
                        </div>

                        {/* Show State/UT*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span className='w-fit'>State/UT</span>
                            <span>xyz</span>
                        </div>

                        {/* Show Pincode or mobile */}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span className='w-fit'>Pincode</span>
                            <span>243504</span>
                            <span className='w-fit'>Mobile Number without country code or 0</span>
                            <span>0000000000</span>
                        </div>

                        {/* Show Email Address*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Email Address</span>
                            <span>Example@gmail.com</span>
                            <span>Alternate Contact Number</span>
                            <span>000000000</span>
                        </div>
                    </div>


                    {/* show Permanent Address  Box */}
                    <div>
                        {/* Present Address */}
                        <div className='flex items-center my-4 border-t-2 gap-5'>
                            <div className="w-fit py-3 text-gray-900 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Permanent Address</div>
                        </div>


                        {/* Show Address*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Premises/House No./Name(Address)</span>
                            <span>xyz</span>
                            <span>Sub Locality</span>
                            <span>XYZ</span>
                        </div>

                        {/* Show Address*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Locality</span>
                            <span>xyz</span>
                            <span>Country</span>
                            <span>India</span>
                        </div>

                        {/* Show State/UT ,District*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>State/UT</span>
                            <span>xyz</span>
                            <span>District</span>
                            <span>XYZ</span>
                        </div>

                        {/* Show State/UT ,District*/}
                        <div className='grid grid-cols-4 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Pincode</span>
                            <span>243504</span>
                        </div>


                    </div>

                    {/* show Upload Scanned Files Box */}
                    <div>
                        {/* Present Address */}
                        <div className='flex items-center my-4 border-t-2 gap-5'>
                            <div className="w-fit py-3 text-gray-900 text-lg font-normal font-['IBM Plex Sans'] leading-7 font-semibold">Upload Scanned Files</div>
                        </div>

                        {/* Show Email Address*/}
                        <div className='grid grid-cols-2 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Candidate's Photograph (with 80% face without mask)</span>
                            <span className='w-fit h-fit rounded-md py-1 px-2 bg-[#F4811F] hover:bg-red-500 text-lg text-white cursor-pointer'>View</span>
                        </div>
                        <div className='grid grid-cols-2 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Candidate's government issued ID Proof</span>
                            <span className='w-fit h-fit rounded-md py-1 px-2 bg-[#F4811F] hover:bg-red-500 text-lg text-white cursor-pointer'>View</span>
                        </div>
                        <div className='grid grid-cols-2 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <span>Candidate's Last year Marksheet</span>
                            <span className='w-fit h-fit rounded-md py-1 px-2 bg-[#F4811F] hover:bg-red-500 text-lg text-white cursor-pointer'>View</span>
                        </div>
                    </div>

                    {/* show Particulars checklist to be verified Box */}
                    <div>
                        <div className='grid grid-cols-2 gap-14 sm:gap-40 border-t-2 my-5 py-3'>
                            <div className="w-80 text-rose-500 text-xl font-normal font-['IBM Plex Sans'] leading-7">Particulars checklist to be verified</div>
                        </div>

                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My name is xyz as per the Marksheet/Certificate.</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My Father's Name is xyz</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My Mother's Name is is xyz</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My Date of Birth is 16-10-1997 </span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My Gender is xyz</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My School Name is xyz</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My District name is KJHJKJH</span>
                        </div>
                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>My educational details are correct.</span>
                        </div>

                        <div className='flex gap-2 my-5 '>
                            <input type="checkbox" name="" id="" />
                            <span>I have read the Quiz guidelines and eligibility criteria and choose my examination accordingly.</span>
                        </div>

                        <div className='flex gap-2 my-5'>
                            <input type="checkbox" name="" id="" className='h-fit mt-4 ' />
                            <span className='h-fit' style={{ lineHeight: "40px" }}> I hereby declare that I have filled up this online application after carefully reading the Information Bulletin and fully understanding the provisions/ procedures mentioned therein. I further declare that all the particulars given by me in this application are true to the best of my knowledge and belief. I agree that my Result may be withheld/ not declared/ my candidature may automatically stand cancelled, in case it is found at any point of time in future that false information has been furnished in this application. I shall abide by these terms and conditions as well as those laid down in the Information Bulletin, Public Notices and Advisories issued by saunidhi infotech Pvt. Ltd. regarding this exam from time to time.
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-wrap sm:justify-between'>
                        <div className="w-56 h-12 text-white flex items-center justify-center cursor-pointer bg-gray-900 rounded-md shadow border border-gray-900">Update Application Form</div>

                        <div className="w-48 h-12 text-white flex items-center justify-center cursor-pointer bg-emerald-500 rounded-md shadow border border-emerald-500">Proceed to Final submit</div>
                    </div>

                </div>
            </div>
            <Bottom />
        </>
    )
}

export default FinalSubmit;