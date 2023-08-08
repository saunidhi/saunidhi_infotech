import React from 'react'

function Front() {
    return (
        <>
            {/* Navbar Background color */}
            <div className="h-[4rem] bg-[#00000080] md:h-[4rem] xl:h-[7rem]"></div>

            <div className="bg-[#00000080] h-[50vh] w-[100%] pt-16 sm:h-[70vh] ">
                <div className="text-white w-[90%] mx-auto h-[20rem] flex flex-col gap-4">

                    <div className='uppercase flex gap-8 text-xs'>
                        <span>Products</span>
                        <span>CloudSuite™ Healthcare</span>
                    </div>

                    <div className='text-2xl'>
                        CloudSuite™ Healthcare
                    </div>
                    <div className='text-sm'>
                        Empowering healthcare systems with modern, cloud-based ERP
                    </div>

                </div>

                
            </div>
        </>
    )
}

export default Front
