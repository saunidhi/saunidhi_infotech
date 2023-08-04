import { createContext, useState } from "react";
export const Context = createContext();

const AppContext = (props) => {

    const FrontPageContent = "We are a software development company helping businesses maximize their potential with business process automation and AI / IoT solutions. Our engineering team brings to the table years of experience in outsourced software development as well as a portfolio of successfully delivered machine learning and digital transformation products."

    const [setData] = useState(FrontPageContent)
    const [About, setAbout] = useState()

    const AboutPageData = async () => {
        const data = await fetch('https://saunidhi-server0.onrender.com/api/about-uses');
        if (data.status === 200) {
            setAbout(await data.json());
        }
    }

    return (<Context.Provider value={{ setData, About, AboutPageData }}>
        {props.children}
    </Context.Provider>
    );
}

export default AppContext;