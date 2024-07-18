import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewPassword from './NewPassword.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
     {/* <Route path='/' element={
    <ProtectedRoute>
    <NewPassword />
  </ProtectedRoute>}/> */}
  <Route path='/NewPassword/:passwordtoken' element={<NewPassword />}/>
  </Routes>
  </BrowserRouter>
)
