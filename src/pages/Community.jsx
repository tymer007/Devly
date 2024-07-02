import React, { useState } from "react";
import { UilSearch } from '@iconscout/react-unicons';
import AnimatedLogo from '../components/logosandloaders/AnimatedLogo';
import NavSearchbar from '../components/NavSearchBar';

function Community() {

  return (
    <div>

      <div><NavSearchbar /></div>

      <br />
      <div className='pt-10 px-4'>
        {/* Community Header Component */}
        
        <div className="font-bold text-3xl custom-font text-black">
          Community<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
        </div>
        <div>
          Today was a good day!
        </div>

      </div>
    </div>
  );
}

export default Community;
