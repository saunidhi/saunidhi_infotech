import React from 'react'

function WorkCard(props) {
    return (
        <>
          <div className='bg-white text-xl h-[5rem] w-[100%] flex justify-center items-center'>
                {props.text}
            </div>
        </>
    )
}

export default WorkCard
