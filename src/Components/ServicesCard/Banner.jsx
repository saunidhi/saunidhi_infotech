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
        }
    ];

    return (
        <>
            <div className="h-[100%] flex flex-wrap justify-around sm:h-[100%] sm:justify-between  xl:h-[100%px] xl:w-[100%] xl:justify-between" style={{ backgroundImage: `url(${serviceImg})` }}>
                {myData.map((item) => <Card key={item.id} Title={item.CardTitle} info={item.CardData} />)}
            </div>
        </>
    )
}

export default Banner
