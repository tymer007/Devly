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


        <section className="flex flex-col items-center px-4 md:px-0">

          <Link to="/">

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:mr-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">Web Development</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">Check out our list of Developers</h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="webdev.png" alt="web developer" />
              </div>
            </div>
          </Link>

          <Link to="/">

            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:ml-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">Mobile App Development</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">
                  View the profile of mobile app developers
                </h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="appdev.png" alt="mobile app developer" />
              </div>
            </div>
          </Link>

          <Link to="/">

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:mr-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">Data Science</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">
                  check out our list of data scientists
                </h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="data.png" alt="datascientist" />
              </div>
            </div>
          </Link>


          <Link to="/">

            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:ml-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">Cyber Security</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">
                  View the profile of mobile app developers
                </h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="Cyber.png" alt="cyber security engineer" />
              </div>
            </div>
          </Link>

          <Link to="/">

            <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:mr-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">Embedded Systems</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">
                  check out our list of data scientists
                </h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="embedded.png" alt="embedded systems" />
              </div>
            </div>
          </Link>

          <Link to="/">

            <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full md:w-[1060px] bg-devlyMint shadow-md rounded-2xl p-4 mb-12">
              <div className="text-left md:text-right mb-4 md:mb-0 md:ml-18">
                <div className="flex items-center">
                  <h1 className="text-5xl font-cascadia">UI/UX Design</h1>
                </div>
                <h4 className="text-gray-800 text-xl m-3">
                  View the profile of mobile app developers
                </h4>
              </div>
              <div className="w-50 md:w-52">
                <img src="uiux.png" alt="ui/ux designer" />
              </div>
            </div>
          </Link>



        </section>



      </div>
      <div><Footer /></div>
    </div>
  );
}

export default Community;
