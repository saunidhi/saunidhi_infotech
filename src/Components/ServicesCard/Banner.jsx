import React from 'react'
import Card from './Card'
import serviceImg from '../Assets/serviceImg.png'

function Banner() {
    const myData = [
        {
            "id": 1,
            "CardTitle": "Bulk Messages",
            "CardData": [
                "> Bulk Whatsapp",
                "> Bulk SMS",
                "> Bulk Emails"
            ]
        },
        {
            "id": 2,
            "CardTitle": "Web 3.0",
            "CardData": [
                "> E-Sports Tournaments",
                "> NFT Launchpads",
                "> DeFi Staking Plateforms",
                "> NFT Development"
            ]
        },
        {
            "id": 3,
            "CardTitle": "AI Services",
            "CardData": [
                "> AI Solution",
                "> Android App Development",
                "> Digital Video Mixing",
                "> Promotional Videos",
                "> Social /Media Marketing"
            ]
        },
        {
            "id": 4,
            "CardTitle": "Web 2.0",
            "CardData": [
                "> UI/UX Design",
                "> Web Hevelopment",
                "> Web Hosting"
            ]
        },
        {
            "id": 5,
            "CardTitle": "HealthCare",
            "CardData": [
                "> Computation And Systems Biology",
                "> AI based Health Care tools",
                "> Biological Data Analysis",
                "> Big Data Analysis",
                "> Health Data Informatics",
            ]
        }
    ];

    return (
        <>
            <div className="h-[100%] grid px-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4 gap-2 py-5 sm:gap-2 md:py-10 xl:w-[100%]" style={{ backgroundImage: `url(${serviceImg}) ` }}>
                {myData.map((item) => <Card key={item.id} Title={item.CardTitle} info={item.CardData} />)}
            </div>
        </>
    )
}

export default Banner
