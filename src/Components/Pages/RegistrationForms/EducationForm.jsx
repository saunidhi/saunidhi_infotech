import React from 'react'
import NavBar from './NavBar'

const EducationForm = () => {
    return (
        <>
            <NavBar />
            <div className='   drop-shadow-xl '>

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

                <div className='  divide-y divide-solid my-4 mx-3'>
                    <h1 className='text-[#FF8C00] my-3 text-2xl'>Application Form : Educational Details</h1>

                    <div>
                        <form className='my-3 mx-auto sm:w-[80%] ' action="PrevoiusEducational">
                            <div>
                                <div className='text-[#525F7F] text-xl '> Prevoius Educational Details</div>
                                <div className=' text-[#16192C] py-4 w-full space-y-3'>
                                    <div className=' md:my-4 md:mx-6 '>
                                        <label className='md:float-left md:mx-4 ' >Qualifying Exam</label>
                                        <div> <input className='box-content px-3 py-2 w-[80%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className=' md:my-4 md:mx-6 '>
                                        <label className='md:float-left md:mx-4 px-3' >Result Status</label>
                                        <div> <input className='box-content px-3 py-2 w-[80%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className=' md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4 px-3' >Passing Year</label>
                                        <div> <input className='box-content px-3 py-2 w-[80%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className='md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4 ' >Name of School</label>
                                        <div> <input className='box-content px-3 py-2 w-[80%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>

                                    <div className='md:my-4 md:mx-7'>
                                        <label className='md:float-left md:mx-4'>School Address</label>
                                        <div> <input className='box-content px-3 py-2 w-[80%] rounded-md border-solid border border-black' type="text" /> </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-xl text-[#525F7F]'> Current Educational Details</div>
                            <div className='  text-[#16192C] py-3 px-5 md:px-10'>
                                < div className=' md:my-4 md:mx-2 '>
                                    <label className='md:float-left md:mx-4 px-3 ' >Appering Exam</label>
                                    <div> <input className='box-content px-3 py-2 rounded-md border-solid border border-black' type="text" /> </div>
                                </div>

                                <div className='md:my-4'>
                                    <label className='md:float-left md:mx-4 px-3' >Name of School</label>
                                    <div> <input className='box-content px-3 py-2  rounded-md border-solid border border-black' type="text" /> </div>
                                </div>

                                <div className=' md:my-4 md:mx-1'>
                                    <label className='md:float-left md:mx-4 px-3' >School Address</label>
                                    <div> <input className=' box-content px-3 py-2  rounded-md border-solid border border-black' type="text" /> </div>
                                </div>

                                <div className=' md:my-4 md:mx-6'>
                                    <label className='md:float-left md:mx-4 ' >Roll Number</label>
                                    <div> <input className='box-content px-3 py-2 border rounded-md  border-black' type="text" /> </div>
                                </div>
                            </div>

                            <div className='space-x-10 md:space-x-60'>
                                <button className='rounded-md border-solid border-2 border-[#1F2021] px-3 py-1 mx-5'>back</button>
                                <button className=' md:px-5 rounded-md  bg-[#FE8E06] px-3 py-2 text-white '>Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationForm
