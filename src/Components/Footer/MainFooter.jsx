import React from 'react'
import Bottom from './Bottom'
import FooterBanner from './FooterBanner'
import Footer from './Footer'
import FirstFooter from "./FirstFooter";

function MainFooter() {
  return (
    <>
      <Bottom />
      <div>
        <FooterBanner />
        <FirstFooter />
        <Footer />
      </div>
    </>
  )
}

export default MainFooter
