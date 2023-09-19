import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='flex sticky top-0 justify-between bg-blue-600 text-white md:px-2 md:h-12 items-center md:text-base z-30'>
                <div className='text-2xl ml-2 md:hidden hover:bg-red-600 items-center' onClick={() => setOpen(!open)}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className={`flex flex-col gap-4 text-center md:flex-row md:gap-4 w-full p-2 md:w-fit md:h-fit bg-blue-600 absolute md:relative transition-all duration-200 ${open ? 'mt-[17rem]' : "-mt-[17rem]"} md:mt-0 block z-10 border-t-2 md:border-none`}>
                    <Link className='hover:bg-red-500 text-lg md:text-lg w-fit px-2 md:px-2 md:hover:px-2 md:rounded-md' to="/">Home</Link>
                    <Link className='hover:bg-red-500 text-lg md:text-lg w-fit px-2 md:px-2 md:hover:px-2 md:rounded-md' to="">Information Bulletin</Link>
                    <Link className='hover:bg-red-500 text-lg md:text-lg w-fit px-2 md:px-2 md:hover:px-2 md:rounded-md' to="">Application Guide</Link>
                    <Link className='hover:bg-red-500 text-lg md:text-lg w-fit px-2 md:px-2 md:hover:px-2 md:rounded-md' to="">FAQ</Link>
                    <Link className='hover:bg-red-500 text-lg md:text-lg w-fit px-2 md:px-2 md:hover:px-2 md:rounded-md' to="/contact">Contact Us</Link>
                </div>
                <Link to="/login" className='bg-orange-500 cursor-pointer float-right px-3 w-fit h-fit py-2 rounded-md my-1 mr-2'>
                    Sign in
                </Link>
            </nav>
        </>
    )
}

export default NavBar
