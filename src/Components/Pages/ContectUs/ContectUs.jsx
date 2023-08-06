import React, { useContext, useEffect } from 'react'
import ContectUsBgImg from "../ContectUs/ContectUsBgImg.png"
import ContectUsInfo from './ContectUsInfo'
import ContectUsForm from './ContectUsForm'
import { Context } from '../../Utils/Context'


function ContectUs() {

    const { ContactContent, ContactData } = useContext(Context);
    const BaseAPi = ContactData?.data[0]?.attributes;

    useEffect(() => {
        ContactContent();
    }, []);

    return (
        <>
            {/* Navbar Background color */}
            <div className="h-[4rem] bg-slate-800 md:h-[4rem] xl:h-[7rem]"></div>

            {/* this tag for only image manage*/}
            <div className="h-[100%] bg-no-repeat w-[100%] md:h-[100%]">
                <div style={{ backgroundImage: `url(${ContectUsBgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '101% 100%' }}>

                    <div className=' h-[60vh] flex flex-col justify-center px-4 gap-6 md:mx-20 '>
                        <div className="text-xl md:text-2xl text-white">{BaseAPi?.Titile}</div>
                        <div className='text-3xl md:text-4xl text-white'>{BaseAPi?.Heading_1}</div>
                    </div>

                </div>
            </div>
            <div className="md:flex justify-around md:mb-20">

                <div className="md:w-[500px]">
                    <ContectUsInfo />
                </div>
                <div className="mx-auto w-[90%] md:mt-[-100px] md:w-[500px]">
                    <ContectUsForm />
                </div>
            </div>
        </>
    )
}

export default ContectUs
