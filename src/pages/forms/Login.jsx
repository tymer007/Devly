import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock } from 'lucide-react';

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
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-2/3 flex justify-center bg-white relative">
        <div className="absolute mx-auto p-2">
          <AnimatedLogo />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-14 bg-white">
          <h1 className="text-3xl font-cascadia mb-4">
            Welcome back, <span className="text-devlyGreen">log in</span> to continue
          </h1>
          <p className="text-gray-600 mb-6">We've missed you!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-1">Your email</label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="8"
                  maxLength="15"
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  pattern="(?=.*\d)[A-Za-z\d]{8,}"
                  title="Password must be at least 8 characters long and contain at least one digit"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {formData.password ? (
                    showPassword ? <EyeOff size={20} style={{
                      color: 'white',
                      backgroundColor: 'black',
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      right: '2px',
                    }} /> : <Eye size={20} style={{
                      color: 'white',
                      backgroundColor: 'black',
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.25rem',
                      padding: '0.5rem',
                      right: '2px',
                    }} />
                  ) : (
                    <Lock size={20} style={{
                      color: 'white',
                      backgroundColor: 'black',
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
            <p className="text-end mt-4"><Link to="" >Forgot Password?</Link>
            </p>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              CONTINUE
            </button>
          </form>
          <p className="text-center mt-4">
            Create an account with us, <Link to="/signup" className="text-devlyGreen">Sign Up</Link>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 hidden md:flex items-center justify-center">
        <img src="index.jpeg" alt="Form" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login