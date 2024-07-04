import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (

    <div>
      <div><Navbar /></div>
      <div className='pt-10 px-4 pb-4'>
      <br />
      <br /><div className="font-bold text-4xl font-cascadia text-black">
        Welcome to Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
      </div>

      </div>
      <div><Footer /></div>

    </div>
  )
}

export default Home