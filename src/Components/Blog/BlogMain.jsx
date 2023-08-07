import React from 'react'
import { Link } from 'react-router-dom'

function BlogMain() {
    return (
        <>
            {/* Navbar Background color */}
            <div className="h-[4rem] bg-slate-800 md:h-[4rem] xl:h-[7rem]"></div>

            <Link to="/contact" className='flex text-center h-[100vh] text-[18px] sm:text-[20px] md:text-[24px] xl:text-[30px] cursor-pointer hover:text-blue-500'>
                Comming Soon... <br />
            </Link>
        </>
    )
}

export default BlogMain
