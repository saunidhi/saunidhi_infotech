import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home.jsx'
import PageNoteFound from './Components/Pages/PageNoteFound.jsx'
import ContectUs from './Components/Pages/ContectUs/ContectUs.jsx';
import MainFooter from './Components/Footer/MainFooter.jsx';
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx'
import LogIn from './Components/Pages/LogIn/LogIn.jsx';
import SignUp from "./Components/Pages/SignUp/SignUp.jsx"
import AppContext from './Components/Utils/Context.js';
import PortFolio from './Components/Pages/PortFolio/PortFolio.jsx';
import Career from './Components/Pages/Careers/Career.jsx';
import Healthcare from './Components/Pages/Healthcare/Healthcare.jsx';
import Reghome from './Components/Pages/Registration/Reghome.jsx';
import ForgetPassW from './Components/Pages/ForgetPassw/ForgetPassW.jsx';
import Registration from './Components/Pages/RegistrationForms/Registration.jsx';
import AplicationForm from './Components/Pages/RegistrationForms/AplicationForm.jsx';
import Protective from './ProtectiveComponents/Protective.jsx';
// import RegistrationForms from './Components/Pages/RegistrationForms/EducationForm.jsx'
// import UploadDoc from './Components/Pages/RegistrationForms/UploadDoc.jsx';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Routes>

            {/* None protect URLS  */}
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<ContectUs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="portfolio" element={< PortFolio />} />
            <Route path="careers" element={<Career />} />
            <Route path="Healthcare" element={<Healthcare />} />
            <Route path="education" element={<Reghome />} />
            <Route path="Login" element={<LogIn />} />
            <Route path="signup" element={< SignUp />} />
            <Route path="forget" element={< ForgetPassW />} />

            {/* ############################# protect URLS ########################  */}
            <Route path='/Regis' element={<Protective Comp={Registration} />} />
            <Route path='/Apli' element={<Protective Comp={AplicationForm} />} />
            {/* <Route path='/Edu' element={<Protective Comp={RegistrationForms} />} />
            <Route path='/uploadDcos' element={<UploadDoc/>} /> */}

            {/* ########################################################### */}

            {/* 404 page note PageNoteFound */}
            <Route path="*" element={<PageNoteFound />} />
          </Routes>
          <MainFooter />
        </AppContext>
      </BrowserRouter >
    </>
  )
}
