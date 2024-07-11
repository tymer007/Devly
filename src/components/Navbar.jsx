import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import AnimatedLogo from "./logosandloaders/AnimatedLogo.jsx";
import "./NavBar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-2 px-4 bg-devlyMint flex items-center justify-between z-50 mb-10">

      <div><AnimatedLogo /></div>

      <ul className={`fixed top-0 ${openNav ? "left-0" : "-left-full"} h-full w-full max-w-xs bg-green-100 p-6 flex flex-col space-y-8 justify-center items-center transition-all duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:max-w-none md:p-0`}>
        {/* <div className='inline-grid fixed top-2'>
          <a href="#" className='font-extrabold font-mono text-3xl text-devlyGreen p-0 m-0 lg:hidden'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></a>
        </div> */}
        <li><a href="/" className="text-slate-600 font-medium hover:font-semibold hover:text-devlyGreen">Home</a></li>
        <li><a href="/community" className="text-slate-600 font-medium hover:text-devlyGreen">Community</a></li>
        <li><a href="/aboutus" className="text-slate-600 font-medium hover:text-devlyGreen">About Us</a></li>
        {/* <li><a href="#" className="text-slate-600 font-medium hover:text-devlyGreen">Blog</a></li> */}
        <li className="md:hidden flex flex-col space-y-4 mt-8">
          <Link to="/login" className="text-slate-700 rounded-lg px-4 py-2 font-bold">Login</Link>
          <Link to="/signup" className="text-white bg-devlyGreen font-bold rounded-lg px-4 py-2">Register</Link>
          {/* <button className="text-white rounded-lg px-4 py-2 font-bold">Login</button>
          <button className="text-white bg-devlyGreen font-bold rounded-lg px-4 py-2">Register</button> */}
        </li>
      </ul>

      <div className="hidden md:flex space-x-4">
        <Link to="/login" className="text-black font-semibold rounded-lg p-2">Login</Link>
        <Link to="/signup" className="text-white font-bold bg-devlyGreen rounded-lg px-4 py-2">Register</Link>
        {/* <button className="text-black font-semibold rounded-lg px-0 py-0">Login</button>
        <button className="text-white font-bold bg-devlyGreen rounded-lg px-4 py-2">Register</button> */}
      </div>

      {openNav ? (
        <UilTimes className="text-devlyGreen text-2xl cursor-pointer md:hidden" onClick={toggleNav} />
      ) : (
        <UilBars className="text-devlyGreen text-2xl cursor-pointer md:hidden" onClick={toggleNav} />
      )}
    </nav>
  );
};

export default Navbar;
