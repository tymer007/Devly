import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Link2, BrainCircuit, MapPin, Phone, Mail, Linkedin, Github, Twitter, Instagram, Facebook, GraduationCap, Award, Dribbble } from 'lucide-react'

const WebDevProfile = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md overflow-hidden w-full max-w-full">
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="cover-photo.png"
            alt="cover photo"
          />
          <img
            className="w-32 h-32 rounded-full border-4 border-red-500 absolute top-28 left-1/2 transform -translate-x-1/2 md:left-40 md:transform-none shadow-lg"
            src="doctress.jpg"
            alt="Author"
          />
        </div>
        <div className='flex justify-end pr-4 pt-4 md:pr-40'>
          <button type="submit" className="bg-[#D73D00] text-white py-2 px-4 rounded-md hover:bg-orange-700">
            Community
          </button>
        </div>
        <div className="px-4 md:px-14 py-4">
          <div className="flex flex-col items-center md:items-start mt-16 md:mt-0 md:ml-32 md:px-28">
            <h2 className="text-2xl font-semibold">Emily Carter</h2>
            <span className="text-gray-500">Dr Journalist / Gynaecologist</span>
          </div>
          <p className="text-gray-600 mb-6 mt-4 md:ml-32 md:px-28">Dr. Emily Carter is a renowned physician specializing in women's health, with a distinguished career in both clinical practice and academic research. She earned her medical degree from Johns Hopkins University and completed her residency in Obstetrics and Gynecology at the Mayo Clinic.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-28">

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">About</h3>

              <div className='flex space-x-2 pb-1'>
                <Link2 />
                <a href="www.google.com" className='text-blue-600'>visit-my-personal-portfolio</a>
              </div>

              <div className='flex flexspace-x-2 pb-1'>
                <div>

                  <BrainCircuit strokeWidth={1.5} className='mr-1.5' />
                </div>

                <div>

                  <ul className='flex flex-wrap gap-1 text-gray-700'>
                    <li className='rounded-xl bg-slate-300 px-2'>frontend</li>
                    <li className='rounded-xl bg-slate-300 px-2'>backend</li>
                    <li className='rounded-xl bg-slate-300 px-2'>react</li>
                    <li className='rounded-xl bg-slate-300 px-2'>tailwindcss</li>
                    <li className='rounded-xl bg-slate-300 px-2'>html-css</li>
                    <li className='rounded-xl bg-slate-300 px-2'>ai-proficiency</li>
                  </ul>
                </div>

              </div>
              <hr className="my-2 border-gray-300" />

              <div className='flex space-x-2 pb-1'>

                <div>
                  <GraduationCap strokeWidth={1.5} />
                </div>
                <ol>
                  <li className='text-gray-700'>B.Sc. in Computer Science, University of Tech (2014-2018)</li>
                </ol>

              </div>

              <div className='flex space-x-2 pb-1'>

                <div>
                <Award strokeWidth={1.5} />
                </div>
                <ol className='text-gray-700'>
                  <li className=''>AWS Certified Solutions Architect</li>
                  <li className=''>Certified ScrumMaster (CSM)</li>
                </ol>

              </div>



              <hr className="my-2 border-gray-300" />


              <div className='flex space-x-2 pb-1'>
                <MapPin strokeWidth={1.5} />
                <div className='text-gray-700 break-all'>Plateau State, Nigeria.</div>
              </div>

              <div className='flex space-x-2 pb-1'>
                <Phone strokeWidth={1.5} />
                <div className='text-gray-700'>+234 703 382 ****</div>
              </div>

              
              <div className='flex space-x-2 pb-1 '>
                <Mail strokeWidth={1.5} />
                <div className='text-gray-700 break-all'>sebastianmurphy@mail.com</div>
              </div>
            

              <hr className="my-2 border-gray-300" />

              <div className='flex flex-wrap justify-center gap-3 px-8 text-gray-700 pb-2'>
                <Github strokeWidth={1.5} />
                <Dribbble strokeWidth={1.5} />
              </div>
              <div className='flex flex-wrap justify-center gap-3 px-6 text-gray-700'>
                <Linkedin strokeWidth={1.5} />
                <Twitter strokeWidth={1.5} />
                <Instagram strokeWidth={1.5} />
                <Facebook strokeWidth={1.5} />
              </div>
            </div>

            <div className="col-span-2 pb-5">
              <h3 className="text-lg text-center font-semibold mb-4 text-[#D73D00]">Projects</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((article, index) => (
                  <div key={index} className="flex flex-col cursor-pointer md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <img
                      className="w-full md:w-1/4 h-24 object-cover rounded-lg"
                      src="b-cancer.jpeg"
                      alt="Article"
                    />
                    <div className="w-full md:w-3/4">
                      <h4 className="text-md font-semibold hover:text-customOrange">How to Avoid Breast Cancer </h4>
                      <p className="text-gray-500 text-sm mb-2">By Emily Carter &middot; Posted on 28th May, 2024 </p>
                      <p className="text-gray-700 mb-2">
                        Breast cancer remains one of the most prevalent and impactful diseases affecting women worldwide. This article delves into the lates...</p>
                      <div className='flex flex-col text-end'>
                        <a href="#" className="text-[#18CDCD] text-sm font-bold">Read more</a>
                      </div>
                    </div>
                  </div>

                ))}
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="flex items-center justify-center bg-[#18CDCD] text-white rounded-md hover:bg-teal-500">
                    <ArrowLeft />
                  </button>
                  <button className="flex items-center justify-center bg-[#18CDCD] text-white rounded-md hover:bg-teal-500">
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevProfile;
