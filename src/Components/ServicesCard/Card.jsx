import React from 'react'


function Card(props) {
    return (
        <>
            {/* <div className="px-1 my-5 sm:h-[100%] bg-red-500 sm:px-4 sm:w-[200px] md:h-40 xl:h-[400px] xl:w-[380px] xl:flex xl:justify-normal xl:my-0 xl:pt-14 "> */}

                <div className='h-[250px] pt-2 px-2 w-[160px] sm:w-[230px] sm:px-1 sm:h-[300px] md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[350px] opacity-90 bg-black relative rounded-xl sm:rounded-t-3xl xl:rounded-t-3xl text-white flex flex-col'>

                    {/* title */}
                    <span className='text-[20px] sm:text-[18px] xl:text-[32px] mx-auto sm:my-3 xl:my-5'>{props.Title}
                    </span>
                    {
                        // content
                        <div className='text-[13px] sm:text-[15px] xl:text-[16px] sm:mx-2 xl:mx-10 py-2 flex flex-col justify-around'>
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
            {/* </div> */}
        </>
    )
}

export default Card
