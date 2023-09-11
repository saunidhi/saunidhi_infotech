import React from 'react'

function TeamCard(props) {
    return (
        <>
            <div className="main w-[350px] sm:w-[400px] xl:w-[400px] xl:h-[20rem] xl:p-1 mt-3">
                <div className="logo flex justify-center mt-4 ">
                    <div className="h-[100px] w-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] xl:h-[170px] xl:w-[170px]">
                        <img className='w-[100%] h-[100%]' src={props.image} alt="" />
                    </div>
                </div>
                <div className="title text-[26px] py-2 " style={{ fontFamily: "arial", fontWeight: "600", fontStyle: "normal", lineHeight: "normal" }}>{props.title}</div>
                <div className="para text-md" style={{ fontFamily: "arial ", fontWeight: "500", fontStyle: "normal", lineHeight: "normal" }}>{props.text}</div>
            </div>
        </>
    )
}

export default TeamCard
