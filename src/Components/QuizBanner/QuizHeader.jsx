import React from 'react'
import amiInfotech from '../Assets/amiInfotech.png'
import { Link } from 'react-router-dom'

function QuizHeader() {
    return (
        <>
            <Link to="/education" className='h-16 w-full flex gap-3 items-center'>
                <img src={amiInfotech} alt="" />
                <label className='md:text-xl' htmlFor="">SaunidhiInfotech</label>
            </Link>
        </>
    )
}

export default QuizHeader