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
import CommWebDev from './pages/Communitypages.jsx/CommWebDev.jsx'
import Profile from './pages/Dashboard/Profile.jsx'
import CommUIUX from './pages/Communitypages.jsx/CommUIUX.jsx'
import CommMobile from './pages/Communitypages.jsx/CommMobile.jsx'
import CommEmbedded from './pages/Communitypages.jsx/CommEmbedded.jsx'
import CommData from './pages/Communitypages.jsx/CommData.jsx'
import CommCyber from './pages/Communitypages.jsx/CommCyber.jsx'

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
      <Route path='/CommWebDev' element={< CommWebDev/>}/>
      <Route path='/CommUIUX' element={< CommUIUX/>}/>
      <Route path='/CommUIUX' element={< CommCyber/>}/>
      <Route path='/CommUIUX' element={< CommMobile/>}/>
      <Route path='/CommUIUX' element={< CommEmbedded/>}/>
      <Route path='/CommUIUX' element={< CommData/>}/>
      





    </Routes>
  </BrowserRouter>
)
