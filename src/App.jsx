import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Loader from './components/Loader.jsx'
import Logo from './components/Logo.jsx'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
      <div><Home /></div>
      <br />
      <div><Logo /></div>
      {/* <div><Loader /></div> */}

    </>
  )
}

export default App
