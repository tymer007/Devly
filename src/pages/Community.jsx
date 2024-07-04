import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { UilSearch } from '@iconscout/react-unicons';
import AnimatedLogo from '../components/logosandloaders/AnimatedLogo';
import NavSearchbar from '../components/NavSearchBar';
import Footer from '../components/Footer';

function Community() {

  return (
    <div>

      <div><NavSearchbar /></div>

      <br />
      <div className='pt-10 px-4'>
        {/* Community Header Component */}

        <div className="font-bold text-4xl font-cascadia text-black">
          Community<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
        </div>
        <div>
          Today was a good day!
        </div>
        <div className="p-5">
          <Link to="/webdevprofile">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">view my profile</button>
          </Link>


        </div>


      </div>
      <div><Footer /></div>
    </div>
  );
}

export default Community;
