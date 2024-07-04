import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

import AnimatedLogo from '../../components/logosandloaders/AnimatedLogo';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      console.log(formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-2/3 flex justify-center bg-white relative">
        <div className="absolute mx-auto p-2">
          <AnimatedLogo />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-14 bg-white ">
          <h1 className="text-3xl font-cascadia mb-4">
            Join our <span className="text-devlyGreen">community</span> today
          </h1>
          
          <p className="text-gray-600 mb-6">Become a part of our informative community</p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-bold mb-1">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  required
                />
              </div>
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
                <label className="block font-bold mb-1">Your phone number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Create Password</label>
                <input
                  type="password"
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
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter password again"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength="8"
                  maxLength="15"
                  className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                  pattern="(?=.*\d)[A-Za-z\d]{8,}"
                  title="Password must be at least 8 characters long and contain at least one digit"
                  required
                />
                {!passwordsMatch && (
                  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                )}
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 mt-1"
                required
              />
              <label>
                By creating an account you are agreeing to our Terms and Conditions and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              CONTINUE
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-devlyGreen">Login</Link>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 hidden md:flex items-center justify-center">
        <img src="community.jpg" alt="Form" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
