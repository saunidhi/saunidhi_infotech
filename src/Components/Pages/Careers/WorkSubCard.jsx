import React from 'react'
function WorkSubCard(props) {

    const Mystyle = {
        FontFamily: ' Montserrat',
        FontSize: ' 24px',
        FontStyle: ' normal',
        FontWeight: '400',
        LineHeight: ' 32px'
    }

    const Mystyle2 = {
        FontFamily: 'Source Sans Pro',
        FontSize: '20px',
        FontStyle: 'normal',
        FontWeight: '400',
        LineHeight: '32px' /* 160% */
    }


    return (
        <>
            <div className="shadow shadow-gray-600 h-[18rem] w-[45%] flex flex-col sm:mx-5 sm:gap-2 sm:w-auto" style={Mystyle}>
                <div className="flex justify-center text-[18px] items-center h-[3rem]">{props.title}</div>
                <hr className='mx-2 h-[2px] bg-[#00111F] ' />
                <div style={Mystyle2} className='mx-2 '>{props.para}</div>
            </div>
        </>
    )
}

export default WorkSubCard