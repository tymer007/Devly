import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { UilBars, UilTimes, UilSearch } from '@iconscout/react-unicons';
import { X, Tally1 } from "lucide-react";
import AnimatedLogo from '../components/logosandloaders/AnimatedLogo';
import "./NavBar.css";

const NavSearchBar = () => {
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

    <nav className={`fixed top-0 left-0 w-full bg-[#F4FFFA] p-2 bg-[#DDF7EB]px-4 flex items-center justify-between z-50 ${openSearch ? "openSearch" : ""}`}>
      {/* <UilBars className="text-white text-2xl cursor-pointer navOpenBtn md:hidden" onClick={toggleNav} /> */}
      <div><AnimatedLogo />
      </div>

      <div className="flex justify-center flex-1">
        <div className="relative w-400px hidden sm:block">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full py-2 px-4 pr-14 rounded-3xl bg-devlyMint focus:outline-none focus:bg-white shadow-md"
            style={{ width: "100%" }}
          />
          <Tally1 className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <UilSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <UilSearch id="searchIcon" className="text-slate-700 text-2xl cursor-pointer block sm:hidden" onClick={toggleSearch} />

      <div className={`search-box absolute h-10 max-w-md w-11/12 transition-all duration-200 ${openSearch ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} left-1/2  -translate-x-1/2 top-1/2 transform -translate-y-1/2`}>
        <div>
          <Tally1 className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <X className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={toggleSearch} />
        </div>
        <input type="text" placeholder="Search here..." className="h-full w-full border-none outline-none rounded-3xl bg-devlyMint pl-12 pr-4 shadow-md" />
      </div>

      <div className="flex items-center space-x-2">
        <img src="user-photo.png" className="w-8 h-8 rounded-md" /> {/* Replace with actual profile picture */}
        <div className="hidden md:flex flex-col items-start"> {/* Hide on small screens */}
          <Link to="/profile"><h4 className="font-semibold">Go to Dashboard</h4></Link>
          <span className="text-sm">Log Out</span>
        </div>
      </div>

    </nav>
  );
};

export default NavSearchBar;
