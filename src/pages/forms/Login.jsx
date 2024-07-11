import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

import AnimatedLogo from '../../components/logosandloaders/AnimatedLogo';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='w-full bg-white m-h-dvh flex'>
      <div className='hidden bg-white w-full lg:flex lg:w-full lg:h-dvh'>
        <img src="./image 21.png" alt="" className='w-[80%] mt-28 h-[70%]  items-center m-auto' />
      </div>
      <div className='bg-[#DDF7EB] w-[45.5rem]  h-dvh  md:h-dvh md:w-full '>
        <div className='w-10/12 h-auto  lg:w-9/12 bg-white  m-auto p-10 my-8 rounded-lg items-center'>
          <div className='flex justify-center'>
            <AnimatedLogo />
          </div>
          <p className='text-center font-medium mt-3'>Login into your account</p>
          <form className='mt-10'>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-4">Email</label>
              <div className='relative'>
                <input type="email" id="email"
                  className=" bg-[#DDF7EB] mt-3 block w-[95%] px-3 py-2 border m-auto border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                <span className='absolute  right-3 top-1/2 transform -translate-y-1/2 '>
                  <Mail size={20} style={{
                    color: 'white',
                    backgroundColor: '#0DA16C',
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '0.25rem',
                    padding: '0.5rem',
                    right: '2px',
                  }} /></span>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-4">Password</label>
              <div className='relative'>
                <input type="password"
                  id="password"
                  className="bg-[#DDF7EB] mt-3 block w-[95%] m-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                <span
                  className="absolute  right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {formData.password ? (
                    showPassword ? <EyeOff size={20} style={{
                      color: 'white',
                      backgroundColor: '#0DA16C',
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      right: '2px',
                    }} /> : <Eye size={20} style={{
                      color: 'white',
                      backgroundColor: '#0DA16C',
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      right: '2px',
                    }} />
                  ) :
                    (
                      <Lock size={20} style={{
                        color: 'white',
                        backgroundColor: '#0DA16C',
                        width: '2.75rem',
                        height: '2.75rem',
                        borderRadius: '0.25rem',
                        padding: '0.5rem',
                        right: '2px',
                      }} />
                    )}
                </span>
              </div>

            </div>

            <div className="flex items-center justify-between mb-4">

              <div className="text-sm text-center m-auto">
                <a href="#" className="font-medium text-green-600 hover:text-green-500">Forgot password?</a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-[80%] m-auto  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-devlyGreen hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Login now</button>
            </div>
            <div className="mt-5 text-center flex items-center justify-center mb-6 gap-5">
              <div className='w-[40%] h-[0.05rem] bg-slate-500'></div>
              <span className="text-sm text-gray-600 font-medium">OR</span>
              <div className='w-[40%] h-[0.05rem] bg-slate-500'></div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="w-[80%] m-auto flex justify-center py-2 px-4 border-2 border-[#0DA16C] rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Signup now</button>
            </div>
          </form></div>
      </div>
    </div>
  )
};

export default Login