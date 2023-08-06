import React from 'react'

function FirstFooter() {
    const MyStyle = {
        FontFamily: "Source Sans Pro",
        FontSize: " 20px",
        FontStyle: "normal",
        FontWeight: "400",
        LineHeight: "31px"
    }

    return (
        <>
            <div className="bg-slate-800 text-white list-none p-3 sm:flex sm:items-center sm:text-[15px] sm:gap-3 md:h-[5rem] md:text-[20px]" style={MyStyle}>
                <li>Industries</li>
                <li>Products</li>
                <li>Solutions</li>
                <li>Platform</li>
                <li>Services</li>
                <li>Partners</li>
                <li>About</li>
            </div>
        </>
    )
}

export default FirstFooter
