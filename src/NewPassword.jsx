import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AnimatedLogo from './components/logosandloaders/AnimatedLogo';
import Loader from './components/logosandloaders/logosandloaders/Loader';

const NewPassword = () => {
  const { passwordtoken } = useParams();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!passwordtoken) {
      setError('Invalid or missing token.');
      console.log(passwordtoken);
    }
  }, [passwordtoken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await axios.post('https://connect-i645.onrender.com/api/connect/password/reset-password', {
        passwordtoken,
        password,
      });

      setLoading(false);
      navigate('https://devlyng.vercel.app/Login'); // Redirect to the full URL of the login page on success
    } catch (error) {
      setLoading(false);
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='w-full bg-white m-h-dvh flex '>
      {loading && <Loader />}
      <div className='hidden bg-white w-full lg:flex lg:w-full lg:h-dvh'>
        <img src="./image 21.png" alt="" className='object-contain items-center p-12' />
      </div>
      <div className='bg-[#DDF7EB] w-[45.5rem] h-dvh md:h-dvh md:w-full'>
        <div className='w-10/12 h-auto lg:w-9/12 bg-white m-auto p-10 my-8 rounded-lg items-center mt-[30%]'>
          <div className='flex justify-center'>
            <AnimatedLogo />
          </div>
          <p className='text-center font-bold text-xl mt-3'>Password Recovery</p>
          {error && <p className="text-center text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input 
              type="password"
              placeholder='Enter New Password'
              className="bg-[#DDF7EB] border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-3 block w-[100%] px-3 py-2 border m-auto rounded-md shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input 
              type="password"
              placeholder='Confirm Password'
              className="bg-[#DDF7EB] border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-3 block w-[100%] px-3 py-2 border m-auto rounded-md shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-[80%] m-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-devlyGreen hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
