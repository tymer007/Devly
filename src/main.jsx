import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Login from './pages/forms/Login.jsx'
import SignUp from './pages/forms/SignUp.jsx'
import ProfileSetup from './pages/forms/ProfileSetup.jsx'
import Community from './pages/Community.jsx'
import AboutUs from './pages/AboutUs.jsx'
import WebDevProfile from './pages/profiles/WebDevProfile.jsx'

import Profile from './pages/Dashboard/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/AboutUs' element={< AboutUs/>}/>
      <Route path='/Community' element={< Community/>}/>

      <Route path='/Login' element={< Login/>}/>
      <Route path='/SignUp' element={< SignUp/>}/>
      <Route path='/ProfileSetup' element={< ProfileSetup/>}/>

      <Route path='/WebDevProfile' element={< WebDevProfile/>}/>

      <Route path='/Profile' element={< Profile/>}/>






    </Routes>
  </BrowserRouter>
)
