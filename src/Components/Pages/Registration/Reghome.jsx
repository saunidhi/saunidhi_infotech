import React from 'react'
import education from './education.png'
import { Link } from 'react-router-dom';
import Header from './Header'

function Reghome() {

    return (
        <>
            {/* Header Background Image */}
            <div className="Bgimge sm:flex sm:flex-col h-[100vh] sm:h-[30rem] sm:gap-5 md:h-[100%] xl:h-[100vh] bg-no-repeat image" style={{ backgroundImage: `url(${education})`, backgroundSize: '100% 100%' }} >
                <div>
                    <Header />
                </div>
                {/* sm:flex sm:flex-wrap */}
                <div className=' uppercase mt-7 grid gap-4 grid-cols-2 mx-auto w-[90%] sm:w-[80%] sm:grid-cols-3 sm:gap-24 md:grid-cols-3 xl:grid-cols-4 sm:mt-14'>

                    <Link to="education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#228EF1]/60 shadow-xl shadow-[#76B7F3] flex items-center px-5 text-[16px] text-center text-white hover:bg-blue-600/100 hover:border-[#228EF1] hover:duration-700 hover:pt-16 ">FAQ TPC (For Students)</Link>

                    <Link to="education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#228EF1]/60 shadow-xl shadow-[#76B7F3] flex items-center px-5 text-[16px] text-center text-white hover:bg-blue-600/100 hover:border-[#228EF1] hover:duration-700 hover:pt-16">Steps for Registration</Link>

                    <Link to="education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#228EF1]/60 shadow-xl shadow-[#76B7F3] flex items-center px-5 text-[16px] text-center text-white hover:bg-blue-600/100 hover:border-[#228EF1] hover:duration-700 hover:pt-16">New Registration </Link>

                    <Link to="education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#228EF1]/60 shadow-xl shadow-[#76B7F3] flex items-center px-10 text-[16px] text-center text-white hover:bg-blue-600/100 hover:border-[#228EF1] hover:duration-700 hover:pt-16">quiz question</Link>

                    <Link to="education" className="hover:cursor-pointer card rounded-3xl h-[11rem] w-[10rem] sm:h-[15rem] sm:w-[13rem] bg-[#228EF1]/60 shadow-xl shadow-[#76B7F3] flex items-center px-5 text-[16px] text-center text-white hover:bg-blue-600/100 hover:border-[#228EF1] hover:duration-700 hover:pt-16">CONTENT BASED LECTURES</Link>

                </div>
            </div>
        </>
    )
}

export default Reghome
