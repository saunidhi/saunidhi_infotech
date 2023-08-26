import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.jsx'
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

export default function App() {

  return (
    <>
      <BrowserRouter>
        <AppContext>
          <NavBar />
          <Routes>
            {/* Clinte page urls */}
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<ContectUs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="portfolio" element={< PortFolio />} />
            <Route path="careers" element={<Career />} />
            <Route path="Healthcare" element={<Healthcare />} />
            <Route path="education" element={<Reghome />} />
            <Route path="Login" element={<LogIn />} />
            <Route path="signup" element={< SignUp />} />
            {/* page note PageNoteFound */}
            <Route path="*" element={<PageNoteFound />} />
          </Routes>
          {/* <MainFooter /> */}
        </AppContext>
      </BrowserRouter >
    </>
  )
}
