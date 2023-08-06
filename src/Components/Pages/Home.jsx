import MainfacilityCard from "../Facility/MainfacilityCard"
import Mainfront from "../Mainfront"
import OurService from "../OurService"
import ProjectIdeaCard from "../ProjectIdeaCard"
import Banner from "../ServicesCard/Banner"
import TeamCard from "../TeamCard/TeamCard"
import technicalEexpert from '../Assets/technicalExpert.png'
import technicalTeam from '../Assets/technicalTeam.png'
import earn from '../Assets/earn.png';
import AddBanner from "../AddBanner";
import ProjectIdeaForm from "../ProjectIdeaForm";

function Home() {
    return (
        <>
            <Mainfront />
            <div id="Service">
                <OurService />
            </div>

            {/* there are 4 cards */}
            <Banner />

            <ProjectIdeaCard />

            <div className="my-[-2rem]">
                <MainfacilityCard />
            </div>

            <div className="flex justify-around flex-wrap w-[90%] mx-auto mt-5 md:mt-10 md:flex-nowrap">
                <TeamCard image={technicalEexpert} title={"Technology experts"} text={"We have hands-on experience with various blockchain and business automation projects, including the OLWay supply chain and logistics platform, the RPA solution, and others."} />
                <TeamCard image={technicalTeam} title={"Fully-fledged tech team"} text={"As a full-cycle development company that’s been around for years, we have the skill set to build literally any blockchain or process automation app all the way from business analysis to launch."} />
                <TeamCard image={earn} title={"Understanding your business"} text={"When set out to work on your project, we don’t just focus on the technological agenda. We aim to understand your company’s strategic direction so we can help you get the desired results."} />
            </div>

            <div className="xl:mt-24">
                <AddBanner />
            </div>

            <div id="ProjectIdea" className="my-10" >
                <ProjectIdeaForm />
            </div>
        </>
    )
}

export default Home
