import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Components/Pages/Home.jsx'
import PageNoteFound from './Components/Pages/PageNoteFound.jsx'
import ContectUs from './Components/Pages/ContectUs/ContectUs.jsx';
import MainFooter from './Components/Footer/MainFooter.jsx';
import AboutUs from './Components/Pages/AboutUs/AboutUs.jsx'
import BlogMain from './Components/Blog/BlogMain.jsx';
import AppContext from './Components/Utils/Context.js';
import PortFolio from './Components/Pages/PortFolio/PortFolio.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contect" element={<ContectUs />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blog" element={<BlogMain />} />
            <Route path="portfolio" element={< PortFolio/>} />
            <Route path="*" element={<PageNoteFound />} />
          </Routes>
          <MainFooter />
        </AppContext>

      </BrowserRouter>
    </>
  )
}
