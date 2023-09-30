import React from 'react'
import semilogo from './semilogo.png'

const Semipdf = () => {
    return (
        <>
            <div className='mb-10'>
                {/* --------logo------- */}
                <div className=' px-4 py-2'>
                    <img src={semilogo} alt="Logo" />;
                </div>

                {/* ============frist line start====== */}

                <div className='text-center text-2xl'>Quiz Competition  -2023 </div>

                <div className='mx-4 border border-black  '>
                    <div class="grid grid-cols-3  ">
                        <div className='border border-black  px-4 py-3'>Application Number</div>
                        <div className='border border-black  px-4 '></div>
                        <div className='border border-black  px-4'></div>
                    </div>
                    <div className='grid grid-cols-1  '>
                        <div className='border border-black text-center'>
                            CANDIDATE IS REQUIRED TO  RETAIN THE PRINTOUT OF CONFIRMATION PAGE FOR SUBMITTING IN THE SCHOOLS
                        </div>

                        {/* =================== personal details data===== */}

                        <div className='border border-black px-3'>
                            Personal Details
                        </div>
                        <div className='grid grid-cols-4'>

                            <div className='border border-black px-3'> Candidate Name </div>
                            <div className='border border-black px-3'> </div>
                            <div className='border border-black px-3'> Father's Name</div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3'> Mother's name </div>
                            <div className='border border-black px-3'></div>
                            <div className='border border-black px-3'>  Guardian's name </div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3'>  Candidate's date of birth </div>
                            <div className='border border-black px-3'></div>
                            <div className='border border-black px-3'> Gender </div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3'>   Nationality</div>
                            <div className='border border-black px-3'> </div>
                            <div className='border border-black px-3'> Domicile state</div>
                            <div className='border border-black px-3'></div>

                            <div className='border border-black px-3'> Category </div>
                            <div className='border border-black px-3'></div>
                            <div className='border border-black px-3'>District</div>
                            <div className='border border-black px-3'> </div>
                        </div>

                        <div className='grid grid-cols-1 '>
                            <div className='border border-black px-3' > Education details</div>
                        </div>


                        <div className='grid grid-cols-4 '>
                            <div className='border border-black px-3' > Qualified exam</div>
                            <div className='border border-black px-3' > </div>
                            <div className='border border-black px-3' >Passing year</div>
                            <div className='border border-black px-3' ></div>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <div className='border border-black px-3' > Name of school </div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3' > School Address </div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3' > Appearing Class Name </div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3' > Name of School</div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3' >  roll number</div>
                            <div className='border border-black px-3'> </div>

                            <div className='border border-black px-3' > School Address </div>
                            <div className='border border-black px-3'> </div>
                        </div>
                    </div>
                </div>


                <div className='mt-4 mx-4 border border-black mb-5'>
                    <div className='grid grid-cols-2 '>
                        <div className='border border-black px-3' > present Address: </div>
                        <div className='border border-black px-3'> </div>

                        <div className='border border-black px-3' > Parmanent Address: </div>
                        <div className='border border-black px-3'> </div>

                        <div className='border border-black px-3' > Contact Details: </div>
                        <div className='border border-black px-3'> </div>

                        <div className='border border-black px-3' > Candidate's Photograph </div>
                        <div className='border border-black px-3'>Candidate's Signature </div>
                        <div className=' box-border h-40 border border-black px-3'> </div>
                        <div className=' box-border h-40 border border-black px-3 '> </div>
                    </div>


                    <div className='border border-black '> <a href="/">Fee Payment Details </a> </div>

                    <div className='grid grid-cols-2'>
                        <div className='border border-black px-3' > Application Number </div>
                        <div className='border border-black px-3'>Cash Amount </div>
                        <div className='border border-black px-3' >  </div>
                        <div className='border border-black px-3'>Rs. </div>
                    </div>
                </div>


                <div className=' px-4 py-2 text-xl pb-7' >
                    <div >Notes:</div>
                    <div>1.Submit your last Year marksheet Photo copy with this form.</div>
                    <div>2.Submit your government issued Identity proof Photo copy with this form.</div>
                    <div>3.Submit your examination fee with this form.</div>
                </div>
            </div>
        </>
    )
}

export default Semipdf
