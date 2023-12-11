import { createContext, useState } from "react";
const newLocal = createContext();

export const Context = newLocal;

const AppContext = (props) => {

    const FrontPageContent = "We are a software development company helping businesses maximize their potential with business process automation and AI / IoT solutions. Our engineering team brings to the table years of experience in outsourced software development as well as a portfolio of successfully delivered machine learning and digital transformation products."

    const [setData] = useState(FrontPageContent)
    const [formData, setformData] = useState({ email: '', passw: '' });

    return (<Context.Provider value={{ setData,  formData, setformData }}>
        {props.children}
    </Context.Provider>
    );
}

export default AppContext;