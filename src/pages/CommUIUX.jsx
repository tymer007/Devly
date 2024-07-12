import React from 'react'
import NavSearchBar from '../components/NavSearchBar'
import Footer from '../components/Footer'

const CommUIUX = () => {
  return (
    <div>
      <NavSearchBar />
      <br />
      <div className=" pt-10 font-bold text-2xl md:text-4xl font-cascadia  mb-5 text text-black">
          UI/UX Designers<span className='p-0 m-0 font-semibold font-sans text-2xl '>_</span>
        </div>
      <Footer />
    </div>
  )
}

export default CommUIUX;
