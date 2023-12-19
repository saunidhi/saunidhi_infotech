import React, { useEffect, useState } from 'react'

function ProjectIdeaForm() {
    const [chackVale, setChakVale] = useState(false);
    const [ipAddress, setIPAddress] = useState('')

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => setIPAddress(data.ip))
            .catch(error => console.log(error))
    }, []);


    const [Ideas, setIdeas] = useState({
        username: '',
        userphone: '',
        useremail: '',
        usercompany: '',
        usersocial: '',
        userdesc: ''
        // userIp: ipAddress,

    })

    const Onchange = async (e) => {
        setIdeas({ ...Ideas, [e.target.name]: e.target.value })
    }

    const mystyle = {
        backgroundColor: "#313533",
        fontFamily: "Arial",
    };

    const Onsubmit = async (e) => {
        e.preventDefault();

        setIdeas({
            username: '',
            userphone: '',
            useremail: '',
            usercompany: '',
            usersocial: '',
            userdesc: ''
        })

        const res = await fetch("https://saunidhi-1.saunidhiinfotec.repl.co/projectIdea", {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(Ideas),
        });

        if (res.ok === false) {
            console.log(res);
            alert("your requist send");
        }
        else {
            alert("sorry your request not send please contat to the sanidhi infotech.");
        }
    }

    const CheckBox = (e) => {
        setChakVale(e.target.checked);
    }

    return (
        <>
            <div style={mystyle} className="md:rounded-2xl xl:rounded-2xl xl:mb-6 xl:h-[100%] xl:w-[80%] text-white mx-auto py-4">
                <div className="flex flex-col">
                    <div className="title text-[24px] px-1 xl:text-[35px] mx-auto">Have a project idea? Schedule a call with us!</div>
                    <div className="subtitle mx-3 sm:mx-auto ">Shoot us an email with your request, and we will connect you within one business day.</div>
                </div>

                <form onSubmit={Onsubmit}>
                    <div className="form mt-6 flex flex-wrap md:flex-nowrap mx-5">
                        <div className="flex flex-wrap w-[700px] ">

                            <div className="border-2 rounded-md border-white  bg-gray-700 xl:w-[310px] h-[52px] mx-4 my-3">
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533" }}>Name</label>
                                <input className='w-[100%] h-[100%]  p-2' name='username' onChange={Onchange} value={Ideas.username} required style={{ backgroundColor: "#313533", }} type="text" />
                            </div>
                            <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3 ">
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533", }}>Phone</label>
                                <input className='w-[100%] h-[100%]  p-2' name='userphone' onChange={Onchange} value={Ideas.userphone} required style={{ backgroundColor: "#313533", }} type="number" />
                            </div>
                            <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3">
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533", }}>E-mail</label>
                                <input className='w-[100%] h-[100%]  p-2' name='useremail' onChange={Onchange} value={Ideas.useremail} required style={{ backgroundColor: "#313533", }} type="Email" />
                            </div>
                            <div className="border-2 rounded-md border-white bg-white xl:w-[310px] h-[52px] mx-4 my-3">
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533", }}>Company</label>
                                <input className='w-[100%] h-[100%]  p-2' name='usercompany' onChange={Onchange} value={Ideas.usercompany} required style={{ backgroundColor: "#313533", }} type="text" />
                            </div>
                            <div className="border-2 rounded-md border-white  xl:w-[310px] h-[52px] mx-4 my-3">
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533", }}>Linkedin / Telegram</label>
                                <input className='w-[100%] h-[100%]  p-2' name='usersocial' onChange={Onchange} value={Ideas.usersocial} required style={{ backgroundColor: "#313533", }} type="text" />
                            </div>

                        </div>
                        <div className="flex">
                            <div className="border-2 rounded-md border-white w-[270px] xl:w-[450px] h-[130px] mx-4 my-3" style={{ backgroundColor: "#313533", }}>
                                <label className='absolute mx-3 my-[-13px] z-1 bg px-2' style={{ backgroundColor: "#313533", }}>Message</label>
                                <textarea className='w-[100%] h-[100%] p-2' name='userdesc' onChange={Onchange} value={Ideas.userdesc} required style={{ backgroundColor: "#313533", }} type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="terms flex mx-9 gap-2">
                        <input className='w-[30px] h-[30px] border-2 rounded-md mx-2' type="checkbox" name="chackbtn" id="checkb" onClick={CheckBox} />
                        <p className='text-[14px] text-white'>By proceeding, I confirm that the information provided by me here is accurate. I authorize Saunidhi Infotech and/or its authorized representatives to contact me for any queries. This will override registry on Do Not Disturb (DND)/National Do Not Call (NDNC) </p>
                    </div>
                    {chackVale ?
                        <button type="submit" className={`btn bg-black bg-gray-450 w-[250px] h-[50px] rounded-3xl flex justify-center items-center mx-9 my-3 ${chackVale ? "hover:bg-red-700 cursor-pointer" : ''}`}>
                            GET A FREE CONSULTION
                        </button>
                        : ""
                    }
                </form>
            </div>
        </>
    )
}

export default ProjectIdeaForm
