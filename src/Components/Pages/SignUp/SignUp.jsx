import React, { useEffect, useState } from 'react'
import LogIn from '../LogIn/LoginBg.png'
import Fb from '../LogIn/Fb.png'
import Google from '../LogIn/Google.png'
import { FaUserAlt, FaLock, FaPhone } from 'react-icons/fa'
import { AiTwotoneMail } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import headerimg from '../Registration/headerImg.png'


function SignUp() {

    const navigate = useNavigate();

    const MyStyle = {
        Color: " var(--blue-1, #1125D8)",
        FontFamily: " Red Rose",
        FontStyle: " normal",
        FontWeight: "400",
        LineHeight: "24px",
        LetterSpacing: "1.28px",
        TextTransform: "capitalize"
    }

    useEffect(() => {
        document.title = "Saunidhi InfoTech SignUp";
    })

    const [formData, setformData] = useState({ Name: '', Email: '', Phone: '', Passw: '' });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        setformData({ Name: '', Email: '', Phone: '', Passw: '' })
        e.preventDefault();
        localStorage.setItem("Auth", formData.Email);
        localStorage.setItem("pw", formData.Passw);
        navigate("/LogIn");
    }

    return (
        <>
            <div className='w-full items-center h-14 flex md:h-16 md:w-[90%] md:mx-auto ' style={{ backgroundImage: `url(${headerimg})`, backgroundSize: '100% 100%' }}>
                <div className='pl-2 text-[13px] md:text-[18px] md:ml-10 uppercase'>
                    <Link to="/" className='text-gray-800 text-lg hover:text-blue-500'>Home</Link>
                </div>
            </div>

            <div className='h-[100vh] w-[100%] bg-[#228EF1]/60 flex pt-4 sm:items-center '>
                <div className='sm:flex mx-auto shadow-2xl shadow-gray-600 bg-[#FFFDFD] h-[40rem] w-[23rem] sm:w-[70rem] sm:rounded-[60px] rounded-2xl'>
                    <div className='hidden sm:block w-[50%] bg-blue-700 rounded-l-[60px]'>
                        <div style={{ backgroundImage: `url(${LogIn}) z-[2]`, backgroundSize: '100% 100%' }}></div>
                        <img src={LogIn} alt='bg img' className='h-[100%] w-[100%]' />
                    </div>

                    <div className='flex flex-col items-center mx-auto gap-2' >
                        <div className='text-4xl text-blue-800 mt-5' style={MyStyle}>Student Signup</div>
                        <h2 className='capitalize text-gray-500'>hey enter your detail to create your account </h2>

                        <div className=' w-[100%] '>
                            <form action='/Login' method="post" onSubmit={handleSubmit}>
                              
                                <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                    <div><FaUserAlt size={23} /></div>
                                    <div className='w-auto pl-2'>
                                        <input type="text" name='Name' required value={formData.Name} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-none' placeholder='Enter Your Name' />
                                    </div>
                                </div>
                              
                                <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                    <div><AiTwotoneMail size={23} /></div>
                                    <div className='w-auto pl-2'>
                                        <input type="text" name='Email' required value={formData.Email} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-none' placeholder='Enter Your Email' />
                                    </div>
                                </div>
                               
                                <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                    <div><FaPhone size={23} /></div>
                                    <div className='w-auto pl-2'>
                                        <input type="text" name='Phone' required value={formData.Phone} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-none' placeholder='Enter Your Phone' />
                                    </div>
                                </div>
                               
                                <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                    <div><FaLock size={23} /></div>
                                    <div className='w-auto pl-2'>
                                        <input type="password" name='Passw' required value={formData.Passw} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-0' placeholder='Create A Password' />
                                    </div>
                                </div>

                                <button type='submit' className='bg-blue-800 cursor-pointer shadow-md mt-8 mx-auto w-[90%] sm:w-[100%] text-white p-3 rounded-full flex justify-center border-2 border-[#090303] text-[23px]' style={{ FontFamily: "Readex Pro", FontStyle: "normal", FontWeight: "400" }}>Sign up</button>
                            </form>
                        </div>

                        <div className='flex flex-col'>
                            <div className='bg-black w-[20rem] h-[1px] flex mt-6' ></div>

                            <div className='capitalize  text-gray-700 flex mx-auto text-lg  bg-white w-fit -mt-[16px] px-1' style={{ FontFamily: " Red Rose", FontWeight: "300" }}> Or Continue with </div>

                            <div className='flex justify-center my-3'>
                                <img className='cursor-pointer h-fit mt-[2px]' style={{ Width: "57px", FlexShrink: "0" }} src={Google} alt="icon file here" />
                                <img className='cursor-pointer h-fit mt-1' style={{ Width: "58px", height: "36px", FlexShrink: "0" }} src={Fb} alt="icon file here" />
                            </div>
                            
                            <h1 className='flex justify-center capitalize '>already have an account | <Link to="/Login" className='text-blue-700 pl-1 cursor-pointer'> sign in </Link></h1>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
