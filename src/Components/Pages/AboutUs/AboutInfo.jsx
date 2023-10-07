import React from 'react'
import BannerBg from './BannerBg.png'

function AboutInfo() {

    return (
        <>
            <div className=' p-2 flex flex-col gap-3 md:mx-8 '>
                <span className='text-2xl sm:text-3xl md:text-4xl py-4'>About Saunidhi InfoTech</span>

                <p className='md:text-xl'>Saunidhi InfoTech is a global leader in business cloud software and AI products for companies in industry specific markets. Saunidhi Infotech builds complete industry suites in the cloud and efficiently deploys technology that puts the user experience first, leverages data science, and integrates easily into existing systems.</p>

                <p className='md:text-xl'>In Healthcare informatics, also known as health informatics or health data informatics, is a dynamic and multidisciplinary field that harnesses the power of technology and data management to revolutionize healthcare delivery. At its core, healthcare informatics is about optimizing patient care, enhancing clinical decision-making, and streamlining healthcare operations. Here, we explore some key facets of this transformative field.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>1. Data at the Heart of Healthcare:</span> At the foundation of healthcare informatics lies data—vast and diverse. From electronic health records (EHRs) to patient-generated data from wearables, the volume, variety, and velocity of healthcare data are unprecedented. Informaticians play a pivotal role in managing, securing, and making sense of this data.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>2. Advancing Patient Care:</span> The ultimate goal of healthcare informatics is to improve patient outcomes. By providing healthcare professionals with timely and accurate information, informatics tools facilitate better clinical decision-making, leading to more effective and personalized patient care.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>3. Bridging the Gap with Interoperability:</span> In the complex landscape of healthcare, different systems and providers need to communicate seamlessly. Achieving interoperability—where data can flow effortlessly across healthcare entities—has been a central challenge and priority.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>4. Precision Medicine and Personalized Care:</span> One of the most exciting frontiers of healthcare informatics is precision medicine. By analyzing an individual's genomic data, informatics can help tailor treatments and therapies to each patient's unique genetic makeup, ushering in a new era of personalized care.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>5. From Administrative Efficiency to Quality Improvement:</span> Healthcare informatics isn't limited to clinical applications; it extends to administrative functions too. Billing, resource allocation, and workflow optimization are areas where informatics can drive efficiency. It also plays a critical role in monitoring and enhancing the quality of healthcare services.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>6. Remote Care with Telehealth:</span> In an increasingly connected world, telehealth and telemedicine are rapidly gaining ground. Health informatics enables remote consultations, continuous patient monitoring, and the delivery of healthcare services beyond the confines of traditional healthcare settings.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>7. Research and Public Health:</span> Health informatics contributes significantly to research endeavors. It aids in analyzing large datasets for epidemiological studies, clinical trials, and outcomes research. Additionally, it plays a crucial role in public health surveillance and rapid response to health threats.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>8. Ethical and Legal Considerations:</span> As healthcare informatics advances, it grapples with complex ethical and legal issues. These include safeguarding patient privacy, navigating data ownership, and ensuring informed consent in an era of data-driven healthcare.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>9. The Ongoing Evolution:</span> The field of healthcare informatics is ever-evolving. Professionals in this field must stay abreast of technological advancements and regulatory changes to continue to harness the potential of data and technology for the betterment of healthcare.</p>

                <p className='md:text-xl'>
                    <span className='font-bold'>10. Patient-Centric Paradigm:</span> Perhaps the most transformative aspect of healthcare informatics is its role in shifting the healthcare paradigm towards patient-centered care. Patients are becoming active participants in their health, with access to their medical records and a say in their treatment decisions.</p>

                <p className='md:text-xl my-5 md:w-[650px]'>Over 60  organisations worldwide rely on Saunidhi InfoTech to help overcome market disruptions and achieve business-wide digital transformation.</p>

            </div>

            {/* overfilow problem */}
            <div className='h-[100%] bg-[#F6F5F5] sm:w-[90%] mx-auto md:my-[10rem]'>
                <span className='flex justify-center text-[20px] py-3 md:text-[30px]'>Sauidhi InfoTech stats at a glance</span>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-[50%] gap-5'>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>50+</span>
                            <span className='text-[12px] md:text-[20px]'>CUSTOMERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>15+</span>
                            <span className='text-[12px] md:text-[20px]'> CLOUD CUSTOMERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>20+</span>
                            <span className='text-[12px] md:text-[20px]'>EMPLOYEES</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>15+</span>
                            <span className='text-[12px] md:text-[20px]'>SUPPORT EXPERTS</span>
                        </div>
                    </div>

                    <div className='flex flex-col  w-[50%] gap-5'>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>5+</span>
                            <span className='text-[12px] md:text-[20px]'>PARTNERS</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>2+</span>
                            <span className='text-[12px] md:text-[20px]'>OFFICES</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>1+</span>
                            <span className='text-[12px] md:text-[20px]'>COUNTRIES WITH SAUNIDHI INFOTECH OFFICE</span>
                        </div>
                        <div className='flex flex-col p-2' >
                            <span className='text-[40px] md:text-[70px]'>2+</span>
                            <span className='text-[12px] md:text-[20px]'>COUNTRIES WHERE CUSTOMERS ARE LOCATED</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:h-[613px]' style={{ backgroundImage: `url(${BannerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                <div className='flex text-white flex-wrap gap-6 py-4 md:gap-0 md:flex-nowrap md:pt-[7rem] xl:pt-[3rem]'>
                    <div className="flex flex-col px-3 gap-3 md:w-[40%] md:h-[100%] md:mx-auto xl:w-[40%]">
                        <span className='uppercase'>WORKPLACE</span>
                        <span className='text-[22px] md:text-[25px] xl:text-[36px]'>Culture of connexion</span>
                        <p className='xl:text-[24px] md:text-[18px]'>We strive to be an awesome place to work. We believe that inclusion and diversity feed innovation. We cultivate an inclusive work environment, solicit and implement ideas from all employees, foster professional development and personal well-being, and encourage volunteerism in our communities. Our diverse and global workforce—with all our varied perspectives, identities, and backgrounds—leads Saunidhi InfoTech to brighter ideas and better business decisions.</p>
                    </div>

                    <div className="flex flex-col gap-2 px-3 md:w-[40%] md:mx-auto xl:w-[40%]">
                        <span className='uppercase'>CAREERS</span>
                        <span className='text-[22px] md:text-[25px] xl:text-[36px]'>Join our talented team
                        </span>
                        <p className='xl:text-[24px] md:text-[18px]'>At Saunidhi InfoTech you’ll work with some of the world’s most talented technologists, designers, support specialists, account reps, managers, and leaders. We recruit passionate people of integrity, and invest in in their success—because Saunidhi InfoTech’s future is driven by our people’s capabilities and commitment.</p>
                    </div>
                </div>
            </div>

            <div className='h-[14rem] flex items-center justify-center'>
                <div className=' border-2 border-red-600 bg-gradient-to-t from-red-300  to-gray-300  rounded-full text-center shadow-md shadow-red-500 flex flex-col justify-center gap-3 w-[300px] h-[100px] sm:w-[450px] sm:h-[100px] md:w-[40rem] md:h-[110px] xl:w-[50rem] xl:h-[130px]'>
                    <div className='uppercase text-[13px] sm:text-[15px] md:text-[18px]'>LATEST SAUNIDHI INFOTECH</div>
                    <div className='text-[20px] sm:text-[22px] md:text-[25px]'>News & media coverage</div>
                </div>
            </div>

            {/* <div className='card flex flex-col-reverse h-[18rem] my-5 gap-3 md:flex md:flex-row md:w-[100%] md:h-[20rem] md:gap-3 '>

                <div className="card bg-blue-600 rounded-lg uppercase h-[44px] w-[210px] flex justify-center items-center text-white mx-auto hover:bg-blue-800">Locations</div>

                <div className="card bg-[#D9D9D9] py-5 px-2 h-[100%] rounded-2xl mx-2 md:w-[30rem] md:rounded-3xl md:mx-auto">
                    <div className='md:mx-5'>MEDIA COVERAGE</div>
                    <div className='my-3 mx-5 md:mx-10 md:text-xl'>What does a paper company know about ERP? Quite a bit as it turns out</div>
                    <div className='mx-5 text-[13px] md:mx-10 md:text-sm'>Koch Industries COO James Hannan and Saunidhi Infotech CEO Kevin Samuelson discuss the business partnership that could catalyze the type of change many ERP customers have been looking for.</div>
                </div>
            </div> */}
        </>
    )
}

export default AboutInfo
