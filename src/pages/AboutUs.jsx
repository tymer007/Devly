import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs() {
  return (

    <div>
      <div><Navbar /></div>
      <br />
      <br />
      <br />
      <div className="font-bold text-4xl font-cascadia text-black">
        About Us<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default AboutUs