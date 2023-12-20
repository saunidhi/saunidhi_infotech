import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

function PageNoteFound() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title = "404 Page Not Found";
  }, [])

  return (
    <div>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VB1ZSX32N1"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VB1ZSX32N1');
          `}
        </script>
      </Helmet>
      
      <main className="h-screen w-full flex flex-col justify-center items-center bg-slate-800">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>

            <Link to='/' className="relative block px-8 py-3 bg-slate-800 hover:bg-red-600 border border-current hover:text-white">
              Go Home
            </Link>
          </a>
        </button>
      </main>
    </div>
  )
}

export default PageNoteFound
