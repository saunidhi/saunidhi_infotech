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
     ${location.pathname === "/Login" ? "hidden" : "block"} 
     ${location.pathname === "/signup" ? "hidden" : "block"}
     ${location.pathname === "/education" ? "hidden" : "block"}
     ${location.pathname === "/forget" ? "hidden" : "block"}
     ${location.pathname === "/Regis" ? "hidden" : "block"}
     ${location.pathname === "/Edu" ? "hidden" : "block"}
     ${location.pathname === "/uploadDocs" ? "hidden" : "block"}
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
