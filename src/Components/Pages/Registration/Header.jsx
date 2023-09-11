import React from 'react'
import headerimg from './headerImg.png'
import { FaUserAlt } from "react-icons/fa";
import { BsList } from '@react-icons/all-files/bs/BsList';
import { Link } from 'react-router-dom';

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500/90 mb-3"
        style={{ backgroundImage: `url(${headerimg})`, backgroundSize: '100% 100%' }}>

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" >
              <span className='text-blue-600'>Student</span> Registration (quiz competition)
            </Link>
            <button className=" cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
              <BsList size={25} />
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center transition-all duration-1000" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  to="/">
                  <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  to="/Login">
                  <i className="fab fa-twitter text-lg leading-lg  opacity-75"></i><span className="ml-2">Student login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  to="/signup">
                  <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i><span className="ml-2"><FaUserAlt size={20} /></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header




