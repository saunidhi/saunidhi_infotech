import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = (props) => {

    const FrontPageContent = "We are a software development company helping businesses maximize their potential with business process automation and AI / IoT solutions. Our engineering team brings to the table years of experience in outsourced software development as well as a portfolio of successfully delivered machine learning and digital transformation products."

    const [setData,getData] = useState(FrontPageContent)

    return (<Context.Provider value={{setData}}>
        {props.children}
    </Context.Provider>
    );
}

export default AppContext;