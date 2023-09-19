import React from 'react'


function Card(props) {
    return (
        <>
            <div className='pt-2 px-1 w-[175px] sm:w-[230px] sm:px-1 sm:h-fit md:w-[270px] md:h-[300px] xl:w-[300px] xl:h-[350px] opacity-90 bg-black relative rounded-xl sm:rounded-3xl xl:rounded-3xl text-white flex flex-col'>

                {/* title */}
                <span className='text-[20px] sm:text-[18px] xl:text-[32px] mx-auto sm:my-3 xl:my-5'>{props.Title}
                </span>
                {
                    // content
                    <div className='text-[13px] pt-2 flex flex-col justify-between sm:text-[15px] xl:text-[16px] sm:mx-2 mx-auto '>
                        {props.info[0]} <br />
                        {props.info[1]} <br />
                        {props.info[2]} <br />
                        {props.info[3]} <br />
                        {props.info[4]} <br />
                        {props.info[5]} <br />
                        {props.info[6]} <br />
                        {props.info[7]} <br />
                        {props.info[8]} <br />
                    </div>
                }
    
            </div>
        </>
    )
}

export default Card
