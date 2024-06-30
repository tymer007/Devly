import React, { useState } from "react";
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import "./NavBar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-2 bg-blue-500 shadow-md flex items-center justify-between z-50 mb-10">
      <div className='inline-grid'>
        <a href="#" className='font-extrabold font-mono text-3xl text-white p-0 m-0'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></a>
      </div>

      <ul className={`fixed top-0 ${openNav ? "left-0" : "-left-full"} h-full w-full max-w-xs bg-gray-900 p-6 flex flex-col space-y-8 justify-center items-center transition-all duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:max-w-none md:p-0`}>
        <div className='inline-grid fixed top-2'>
          <a href="#" className='font-extrabold font-mono text-3xl text-white p-0 m-0 lg:hidden'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></a>
        </div>
        <li><a href="#" className="text-white font-medium hover:text-neutral-500">Home</a></li>
        <li><a href="#" className="text-white font-medium hover:text-neutral-500">Community</a></li>
        <li><a href="#" className="text-white font-medium hover:text-neutral-500">About Us</a></li>
        <li><a href="#" className="text-white font-medium hover:text-neutral-500">Blog</a></li>
        <li className="md:hidden flex flex-col space-y-4 mt-8">
          <button className="text-white rounded-lg px-4 py-2 font-bold">Login</button>
          <button className="text-white bg-slate-950 font-bold rounded-lg px-4 py-2">Register</button>
        </li>
      </ul>

      <div className="hidden md:flex space-x-4">
        <button className="text-white font-bold rounded-lg px-0 py-0">Login</button>
        <button className="text-white font-bold bg-blue-900 rounded-lg px-4 py-2">Register</button>
      </div>

      {openNav ? (
        <UilTimes className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleNav} />
      ) : (
        <UilBars className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleNav} />
      )}
    </nav>
  );
};

export default Navbar;
