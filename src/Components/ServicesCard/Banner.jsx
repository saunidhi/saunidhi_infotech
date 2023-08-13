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
                "> NFT launchpads",
                "> DeFi staking plateforms",
                "> NFT devlopment"
            ]
        },
        {
            "id": 3,
            "CardTitle": "Legal Services",
            "CardData": [
                "> AI Solution",
                "> Android App DEVelopment",
                "> Digital Video Mixing",
                "> Prpmotional Videos",
                "> Social /media Marketing"
            ]
        },
        {
            "id": 4,
            "CardTitle": "Web 2.0",
            "CardData": [
                "> UI/UX design",
                "> web devlopment",
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
            <div className="h-[100%] flex flex-wrap px-3 gap-2 py-5 justify-between sm:h-max sm:justify-between sm:gap-2 sm:px-4 xl:flex-nowrap md:flex-nowrap md:py-0 md:pt-10 md:h-max xl:h-max xl:w-[100%] xl:justify-between xl:pt-6" style={{ backgroundImage: `url(${serviceImg})` }}>
                {myData.map((item) => <Card key={item.id} Title={item.CardTitle} info={item.CardData} />)}
            </div>
        </>
    )
}

export default Banner
