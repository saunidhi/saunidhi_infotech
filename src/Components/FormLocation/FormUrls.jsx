import React from 'react'
import { Link } from 'react-router-dom'

function FormUrls() {
    return (
        <div className='flex flex-wrap h-fit py-6 w-fit gap-5 pl-2 md:pl-7'>
            <Link to="/New-Registration" className=" text-slate-600 text-sm font-normal font-['IBM Plex Sans'] leading-snug">Personal Details (1)</Link>
            <Link to="/RegistrationForm" className=" text-slate-600 text-sm font-normal font-['IBM Plex Sans'] leading-snug">Educational Details (2)</Link>
            <Link to="/uploadDocs" className=" text-slate-600 text-sm font-normal font-['IBM Plex Sans'] leading-snug">Upload Details (3)</Link>
            <Link to="/finalsubmit" className=" text-stone-700 text-sm font-normal font-['IBM Plex Sans'] leading-snug">Preview (4)</Link>
        </div>
    )
}

export default FormUrls