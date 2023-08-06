import { createContext, useState } from "react";
const newLocal = createContext();

export const Context = newLocal;

const AppContext = (props) => {

    const FrontPageContent = "We are a software development company helping businesses maximize their potential with business process automation and AI / IoT solutions. Our engineering team brings to the table years of experience in outsourced software development as well as a portfolio of successfully delivered machine learning and digital transformation products."

    const [setData] = useState(FrontPageContent)
    const [About, setAbout] = useState()
    const [HomePage, setHomePage] = useState()
    const [ContactData, setContactContent] = useState();

    const HomePageData = async () => {
        const data = await fetch('https://saunidhi-server0.onrender.com/api/home-page');
        if (data.status === 200) {
            setHomePage(await data.json());
        }
    }

    const AboutPageData = async () => {
        const data = await fetch('https://saunidhi-server0.onrender.com/api/about-uses');
        if (data.status === 200) {
            setAbout(await data.json());
        }
    }

    const ContactContent = async () => {
        const data = await fetch('https://saunidhi-server0.onrender.com/api/contect-us-contents');
        if (data.status === 200) {
            setContactContent(await data.json());
        }
    }

    return (<Context.Provider value={{ setData, HomePage, HomePageData, About, AboutPageData, ContactContent, ContactData }}>
        {props.children}
    </Context.Provider>
    );
}

export default AppContext;