import React from 'react'

function Card(props) {
    const mystyle = {
        backgroundColor: "#0D0D0E",
        fontFamily: "Arial",
        boxShadow: '0px 0px 13px 0px white',
        blur: "10px"
    };
    return (
        <>

            <div className=" rounded-xl w-[120px] h-[40] sm:flex sm:flex-col items-center p-5 text-center gap-2 xl:w-[200px] xl:h-[146px]" style={mystyle}>
                <div className="xl:w-[100px] xl:h-[70px]">
                    <img className={`h-[100%] w-[100%] `} src={props.image} alt="" />
                </div>
                <span className='text-white text-[16px]'>{props.title}</span>
            </div>
        </>
    )
}

export default Card
