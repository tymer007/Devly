import React, { useState } from "react";
import { UilBars, UilTimes, UilSearch } from '@iconscout/react-unicons';
import "./Navbar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    if (openSearch) {
      setOpenSearch(false);
    }
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
    if (openNav) {
      setOpenNav(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 bg-blue-500 shadow-md flex items-center justify-between z-50 ${openSearch ? "openSearch" : ""}`}>
      <UilBars className="text-white text-2xl cursor-pointer navOpenBtn md:hidden" onClick={toggleNav} />
      <a href="#" className="text-white text-xl font-semibold">CodingLab</a>

      <ul className={`fixed top-0 ${openNav ? "left-0" : "-left-full"} h-full w-full max-w-xs bg-gray-900 p-6 flex flex-col space-y-8 justify-center items-center transition-all duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:max-w-none md:p-0`}>
        <UilTimes className="text-white text-2xl cursor-pointer navCloseBtn md:hidden" onClick={toggleNav} />
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-white">Services</a></li>
        <li><a href="#" className="text-white">Products</a></li>
        <li><a href="#" className="text-white">About Us</a></li>
        <li><a href="#" className="text-white">Contact Us</a></li>
      </ul>

      <UilSearch id="searchIcon" className="text-white text-2xl cursor-pointer" onClick={toggleSearch} />
      <div className={`search-box absolute h-12 max-w-md w-full transition-all duration-200 ${openSearch ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} right-4 md:right-20`}>
        <UilSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        <input type="text" placeholder="Search here..." className="h-full w-full border-none outline-none rounded-lg bg-white pl-12 pr-4" />
      </div>
    </nav>
  );
};

export default Navbar;
