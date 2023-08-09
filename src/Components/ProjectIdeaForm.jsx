import React from 'react'

function projectIdeaForm() {
    const mystyle = {
        backgroundColor: "#313533",
        fontFamily: "Arial",
    };

    const CheckBox = () => {
        const element = document.getElementById("checkbox").value;
        // console.log(element);
    }

    return (
        <>
            <div style={mystyle} className="md:rounded-2xl xl:rounded-2xl xl:mb-6 xl:h-[100%] xl:w-[80%] text-white mx-auto py-4">
                <div className="flex flex-col">
                    <div className="title text-[24px] px-1 xl:text-[35px] mx-auto">Have a project idea? Schedule a call with us!</div>
                    <div className="subtitle mx-3 sm:mx-auto ">Shoot us an email with your request, and we will connect you within one business day.</div>
                </div>

                <div className="form mt-6 flex flex-wrap md:flex-nowrap mx-5">
                    <div className="flex flex-wrap w-[700px] ">

                        <div className="border-2 rounded-md border-white  bg-gray-700  xl:w-[310px] h-[52px] mx-4 my-3">
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>Name</label>
                            <input className='w-[100%] h-[100%]  p-2' style={{ backgroundColor: "#313533", }} type="text" />
                        </div>
                        <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3 ">
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>Phone</label>
                            <input className='w-[100%] h-[100%]  p-2' style={{ backgroundColor: "#313533", }} type="number" />
                        </div>
                        <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3">
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>E-mail</label>
                            <input className='w-[100%] h-[100%]  p-2' style={{ backgroundColor: "#313533", }} type="Email" />
                        </div>
                        <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3">
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>Company</label>
                            <input className='w-[100%] h-[100%]  p-2' style={{ backgroundColor: "#313533", }} type="text" />
                        </div>
                        <div className="border-2 rounded-md border-white  xl:w-[310px] h-[52px] mx-4 my-3">
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>Linkedin-Telegram</label>
                            <input className='w-[100%] h-[100%]  p-2' style={{ backgroundColor: "#313533", }} type="text" />
                        </div>

                    </div>
                    <div className="flex">
                        <div className="border-2 rounded-md border-white w-[270px] xl:w-[450px] h-[130px] mx-4 my-3" style={{ backgroundColor: "#313533", }}>
                            <label className='absolute mx-3 my-[-13px] z-10 bg px-2' style={{ backgroundColor: "#313533", }}>Message</label>
                            <textarea className='w-[100%] h-[100%] p-2' style={{ backgroundColor: "#313533", }} type="text" />
                        </div>
                    </div>
                </div>

                <div className="terms flex mx-9 gap-2">
                    <input className='w-[30px] h-[30px] border-2 rounded-md mx-2' onClick={CheckBox} type="checkbox" name="" id="checkbox" />
                    <p className='text-[14px] text-white'>i consent to Aetsoft JSC processing my personal information as set out in the Privacy Policy and Cookie Policy and
                        that, given the global nature of Aetsoft JSC  business ,such processing may take place outside of my home jurisdiction.</p>
                </div>
                <div className="btn bg-black  w-[250px] h-[50px] rounded-3xl flex justify-center items-center mx-9 my-3 hover:bg-red-700 cursor-pointer" disabled>
                    GET A FREE CONSULTION
                </div>
            </div>
        </>
    )
}

export default projectIdeaForm
