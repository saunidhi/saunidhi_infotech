import React from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import PageNoteFound from './Components/Pages/PageNoteFound.jsx';
import ContectUs from './Components/Pages/ContectUs/ContectUs.jsx';
import MainFooter from './Components/Footer/MainFooter.jsx';
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx';
import LogIn from './Components/Pages/LogIn/LogIn.jsx';
import AppContext from './Components/Utils/Context.js';
import Career from './Components/Pages/Careers/Career.jsx';
import Healthcare from './Components/Pages/Healthcare/Healthcare.jsx';
import Reghome from './Components/Pages/Registration/Reghome.jsx';
import ForgetPassW from './Components/Pages/ForgetPassw/ForgetPassW.jsx';
import Registration from './Components/Pages/RegistrationForms/Registration.jsx';
import AplicationForm from './Components/Pages/RegistrationForms/AplicationForm.jsx';
import Protective from './ProtectiveComponents/Protective.jsx';
import RegistrationForms from './Components/Pages/RegistrationForms/EducationForm.jsx';
import UploadDoc from './Components/Pages/RegistrationForms/UploadDoc.jsx';
import Download from './Components/Pages/RegistrationForms/Download.jsx';
import FinalSubmit from './Components/Pages/RegistrationForms/FinalSubmit.jsx';
import Onlineoffline from './Components/Pages/FormFillinngWay/Onlineoffline.jsx'
import SemiOnline from './Components/Pages/RegistrationForms/SemiOnline.jsx';
import ReactGA from 'react-ga';

export default function App() {

  useEffect(() => {
    ReactGA.initialize('G-VB1ZSX32N1');
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Routes>
            {/* None protect URLS  */}
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<ContectUs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="careers" element={<Career />} />
            <Route path="Healthcare" element={<Healthcare />} />
            <Route path="education" element={<Reghome />} />
            <Route path="Login" element={<LogIn />} />
            <Route path="forget" element={< ForgetPassW />} />

            {/* ########################### Registration forms ################## */}
            <Route path='/New-Registration' element={<Onlineoffline />} />
            <Route path='/FillOnline' element={<Registration />} />
            <Route path='/SemiOnline' element={<SemiOnline />} />
            <Route path='/AplicationForm' element={<AplicationForm />} />
            <Route path='/RegistrationForm' element={<RegistrationForms />} />
            <Route path='/uploadDocs' element={<UploadDoc />} />
            <Route path='/finalsubmit' element={<FinalSubmit />} />

            {/* ############################# protect URLS ######################## */}
            <Route path='/download' element={<Protective Comp={Download} />} />
            {/* ########################################################### */}

            {/* 404 page note PageNoteFound */}
            <Route path="*" element={<PageNoteFound />} />


          </Routes>
          <MainFooter />
        </AppContext>
      </BrowserRouter >

      {/* ads.txt file link */}
      <footer>
        {/* <a href="/ads.txt" target="_blank" rel="noopener noreferrer"></a> */}
      </footer>
    </>
  )
}
