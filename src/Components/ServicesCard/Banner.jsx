import React from 'react'
import serviceImg from '../Assets/serviceImg.png'

function Banner() {

    return (
        <>
            <div className='grid w-full h-full sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-3 gap-3' style={{ backgroundImage: `url(${serviceImg}) ` }}>

                <div className="card bg-black/90 rounded-xl h-60 text-white w-[80%] mx-auto py-5">
                    <div className='text-center text-2xl my-2'>Bulk Messages</div>
                    <div className='w-fit mx-auto flex flex-col gap-1'>
                        <div> &#62;Bulk Whatsapp</div>
                        <div> &#62;Bulk SMS</div>
                        <div> &#62;Bulk Emails</div>
                    </div>
                </div>

                <div className="card bg-black/90 rounded-xl h-60 text-white w-[80%] mx-auto ">
                    <div className='text-center text-2xl my-2'>Web 3.0</div>
                    <div className='w-fit mx-auto  flex flex-col gap-1'>
                        <div> &#62;E-Sports Tournaments</div>
                        <div> &#62;NFT Launchpads</div>
                        <div> &#62;DeFi Staking Platforms</div>
                        <div> &#62;NFT Development</div>
                    </div>
                </div>

                <div className="card bg-black/90 rounded-xl text-white w-[80%] mx-auto h-60">
                    <div className='text-center text-2xl my-2'>AI Services</div>
                    <div className='w-fit mx-auto  flex flex-col gap-1'>
                        <div> &#62;AI Solution</div>
                        <div> &#62;Android App Development</div>
                        <div> &#62;Digital Video Mixing</div>
                        <div> &#62;Promotional Videos</div>
                        <div> &#62; Social /Media Marketing</div>
                    </div>
                </div>

                <div className="card bg-black/90 rounded-xl h-60 text-white w-[80%] mx-auto">
                    <div className='text-center text-2xl my-2'>Web 2.0</div>
                    <div className='w-fit mx-auto  flex flex-col gap-1'>
                        <div> &#62; UI/UX Design</div>
                        <div> &#62;Web Development</div>
                        <div> &#62;Web Hosting</div>
                    </div>
                </div>

                <div className="card bg-black/90 rounded-xl text-white w-[80%] mx-auto h-60 ">
                    <div className='text-center text-2xl my-2'>HealthCare</div>
                    <div className='w-fit mx-auto flex flex-col gap-1'>
                        <div> &#62; Computation And Systems Biology</div>
                        <div> &#62;AI based Health Care tools</div>
                        <div> &#62;Biological Data Analysis</div>
                        <div> &#62;Big Data Analysis</div>
                        <div> &#62;Health Data Informatics</div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Banner
