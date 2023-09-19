import React, { useEffect, useState } from 'react'
import LoginBg from './LoginBg.png'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import Fb from "./Fb.png"
import Google from "./Google.png"
import { Link, useNavigate } from 'react-router-dom'
import headerimg from '../Registration/headerImg.png'
import ReCAPTCHA from "react-google-recaptcha";

function LogIn() {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

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

    const [formData, setformData] = useState({ email: '', passw: '' });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        setformData({ email: "", passw: "" })
        e.preventDefault();

        if (localStorage.getItem("Auth") === formData.email && localStorage.getItem("pw") === formData.passw) {
            localStorage.setItem("saunidhi", formData.email);
            navigate("/Regis");
        } else {
            console.log("Sorry wrong user");
        }
    }

    useEffect(() => {
        document.title = "Saunidhi InfoTech LogIn";
    })

    return (
        <>
            <div className='w-full items-center h-14 flex md:h-16 md:w-[90%] md:mx-auto ' style={{ backgroundImage: `url(${headerimg})`, backgroundSize: '100% 100%' }}>
                <div className='pl-2 text-[13px] md:text-[18px] md:ml-10 uppercase'>
                    <Link to="/" className='text-gray-800 text-lg hover:text-blue-500'>Home</Link>
                </div>
            </div>

            <div className='h-[100vh] w-[100%] bg-[#228EF1]/60 flex pt-24 md:pt-3 sm:items-center '>
                <div className='sm:flex mx-auto shadow-2xl shadow-gray-600 bg-[#FFFDFD] h-[30rem] w-[23rem] sm:w-[50rem] sm:rounded-[60px] rounded-2xl'>
                    <div className='hidden sm:block w-[50%] bg-blue-700 rounded-l-[60px]'>
                        <div style={{ backgroundImage: `url(${LoginBg}) z-[2]`, backgroundSize: '100% 100%' }}></div>
                        <img src={LoginBg} alt='bg img' className='h-[100%] w-[100%]' />
                    </div>

                    <div className='flex flex-col items-center mx-auto gap-6' >
                        <div className='text-4xl text-blue-800 mt-5' style={MyStyle}>Student Login</div>

                        <form action="" method="post" className=' w-[100%] ' onSubmit={handleSubmit}>

                            <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                <div><FaUserAlt size={23} /></div>
                                <div className='w-auto pl-2'>
                                    <input type="text" name='email' required value={formData.email} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-none' placeholder='Registration Number' />
                                </div>
                            </div>
                            <div className='bg-white shadow-lg mx-auto w-[90%] sm:w-[100%] p-3 rounded-3xl flex gap-4 my-5 border-2 border-black'>
                                <div><FaLock size={23} /></div>
                                <div className='w-auto pl-2'>
                                    <input type="password" name='passw' required value={formData.passw} onChange={handleInput} className='h-[100%] w-[100%] text-xl border-none bg-transparent' placeholder='Enter Password' />
                                </div>
                            </div>

                            <ReCAPTCHA
                                size='invisible'
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                            />

                            <button type='submit' className='bg-blue-800 cursor-pointer shadow-md mt-8 mx-auto w-[90%] sm:w-[100%] text-white p-3 rounded-full flex justify-center border-2 border-[#090303] text-[23px]' style={{ FontFamily: "Readex Pro", FontStyle: "normal", FontWeight: "400" }}>Login</button>
                        </form>

                        <div className='flex flex-col gap-4'>
                            <Link to="/forget" className='text-lg w-fit cursor-pointer capitalize text-[#000] hover:text-blue-600 ' style={{ FontFamily: " Red Rose", FontWeight: "400" }}>forget password</Link>

                            <Link to="/signup" className='bg-blue-700 px-3 py-1 rounded-full text-white shadow text-lg w-fit cursor-pointer capitalize hover:bg-blue-900' style={{ FontFamily: " Red Rose", FontWeight: "400" }}>New Regitration</Link>
                        </div>

                        {/* <div className='bg-black w-[20rem] h-[1px] flex mt-6' ></div>

                            <div className='capitalize  text-gray-700 flex mx-auto text-lg  bg-white w-fit -mt-[16px] px-1' style={{ FontFamily: " Red Rose", FontWeight: "300" }}> Or Continue with </div>

                            <div className='flex justify-center'>
                                <img className='cursor-pointer h-fit mt-[2px]' style={{ Width: "57px", FlexShrink: "0" }} src={Google} alt="icon file here" />
                                <img className='cursor-pointer h-fit mt-1' style={{ Width: "57px", height: "36px", FlexShrink: "0" }} src={Fb} alt="icon file here" />
                            </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn
