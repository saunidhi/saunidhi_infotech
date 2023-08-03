import React from 'react'

function Slider() {
    return (
        <div>
            <div className='flex gap-3' data-slick='{"slidesToShow": 4, "slidesToScroll": 4,autoplay:true,autoplaySpeed:3000 , centerMode:true ,arrows:true}'>
                
            <button type="button" class="slick-next">Prev</button>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>1</h3></div>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>2</h3></div>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>3</h3></div>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>4</h3></div>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>5</h3></div>
                <div className='bg-red-600 h-[10rem] w-[30%]'><h3>6</h3></div>
                <button type="button" class="slick-next">Next</button>
            </div>
        </div>
    )
}

export default Slider
