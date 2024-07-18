import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewPassword from '../../../DevlyProject/Devly---Network-Portfolio-Site/src/NewPassword.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
     <Route path='/' element={<NewPassword />}/>
    </Routes>
  </BrowserRouter>
)
