import React from 'react'
import Bottom from './Bottom'
import FooterBanner from './FooterBanner'
import Footer from './Footer'
import FirstFooter from "./FirstFooter";
import { useLocation } from 'react-router-dom';

function MainFooter() {

  let location = useLocation();

  return (
    <>
      <div className={`
     ${location.pathname === "/login" ? "hidden" : "block"} 
     ${location.pathname === "/signup" ? "hidden" : "block"}
     ${location.pathname === "/education" ? "hidden" : "block"}
     ${location.pathname === "/forget" ? "hidden" : "block"}
     ${location.pathname === "/Regis" ? "hidden" : "block"}
     ${location.pathname === "/Edu" ? "hidden" : "block"}
     ${location.pathname === "/uploadDocs" ? "hidden" : "block"}
     ${location.pathname === "/Apli" ? "hidden" : "block"}
     ${location.pathname === "/download" ? "hidden" : "block"}
     ${location.pathname === "/New-Registration" ? "hidden" : "block"}
     ${location.pathname === "/AplicationForm" ? "hidden" : "block"}
     ${location.pathname === "/RegistrationForm" ? "hidden" : "block"}
     ${location.pathname === "/finalsubmit" ? "hidden" : "block"}
     ${location.pathname === "/SemiOnline" ? "hidden" : "block"}
     ${location.pathname === "/FillOnline" ? "hidden" : "block"}
      `}>
        <Bottom />
        <FooterBanner />
      </div>
      <FirstFooter />
      <Footer />
    </>
  )
}

export default MainFooter
