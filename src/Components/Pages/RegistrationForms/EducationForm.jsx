import React from 'react'
import NavBar from './NavBar'

const EducationForm = () => {
    return (
        <>
            <NavBar />
            <div className='drop-shadow-xl '>
                <div className='text-[#525F7F] my-2'>
                    <table>
                        <tr>
                            <td className='px-4 text-sm cursor-pointer' >Personal Details(1)   </td>
                            <td className='px-4 text-sm cursor-pointer'>Education Details(2)   </td>
                            <td className='px-4 text-sm cursor-pointer'>Upload Details(3)   </td>
                            <td className='px-4 text-sm cursor-pointer'>Preview (4)   </td>
                        </tr>
                    </table>
                </div>

                <div className=' divide-y divide-solid my-4 mx-3'>
                    <h1 className='text-[#FF8C00] my-3 text-2xl'>Application Form : Educational Details</h1>

                    <div>
                        <form className='my-3 mx-auto sm:w-[80%] md:w-[95%] ' action="PrevoiusEducational">
                            <div className=''>

                                <div className='text-[#525F7F] text-xl '> Prevoius Educational Details</div>

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
                                    <label className='md:float-left md:mx-4 md:w-[15%] '>Appering Exam</label>
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
                                <div className='rounded-md cursor-pointer border-solid border-2 border-[#1F2021] px-3 py-1 mx-5 text-center'>back</div>
                                <div className=' md:px-5 cursor-pointer rounded-md  bg-[#FE8E06] px-3 py-2 text-white text-center'>Save</div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationForm
