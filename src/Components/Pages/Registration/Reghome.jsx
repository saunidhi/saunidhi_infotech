import React, { useEffect } from 'react'
import education from './education.png'
import { Link } from 'react-router-dom';
import Header from './Header'

function Reghome() {

    useEffect(() => {
        document.title = "Saunidhi InfoTech Education";
    })

    return (
        <>
            {/* Header Background Image */}
            <div className="Bgimge sm:flex sm:flex-col h-[100vh] sm:h-[50rem] sm:gap-5 md:h-[50rem] xl:h-[100vh] bg-no-repeat image" style={{ backgroundImage: `url(${education})`, backgroundSize: '100% 100%' }} >
                <div>
                    <Header />
                </div>
                {/* sm:flex sm:flex-wrap */}
                <div className=' uppercase mt-7 grid gap-4 grid-cols-2 mx-auto w-[90%] sm:w-[80%] sm:grid-cols-3 sm:gap-24 md:grid-cols-3 xl:grid-cols-4 sm:mt-14'>

                    <Link to="/education" download={education} className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#0000]/60 shadow-xl shadow-[#000] flex items-center justify-center text-[16px] text-center text-white transition-all ease-in-out duration-700 hover:bg-black hover:border-[#000]  hover:text-xl">FAQ TPC (For Students)</Link>

                    <Link to="/education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#0000]/60 shadow-xl shadow-[#000] flex items-center justify-center text-[16px] text-center text-white transition-all ease-in-out duration-700 hover:bg-black hover:border-[#000]  hover:text-xl">Steps for Registration</Link>

                    <Link to="/education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#0000]/60 shadow-xl shadow-[#000] flex items-center justify-center text-[16px] text-center text-white transition-all ease-in-out duration-700 hover:bg-black hover:border-[#000]  hover:text-xl">New Registration </Link>

                    <Link to="/education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#0000]/60 shadow-xl shadow-[#000] flex items-center justify-center text-[16px] text-center text-white transition-all ease-in-out duration-700 hover:bg-black hover:border-[#000]  hover:text-xl">quiz question</Link>

                    <Link to="/education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#0000]/60 shadow-xl shadow-[#000] flex items-center justify-center text-[16px] text-center text-white transition-all ease-in-out duration-700 hover:bg-black hover:border-[#000]  hover:text-xl">CONTENT BASED LECTURES</Link>
                </div>
            </div>
        </>
    )
}

export default Reghome
