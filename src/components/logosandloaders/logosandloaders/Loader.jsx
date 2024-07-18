import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader font-cascadia text-4xl text-devlyMint">
        Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
      </div>
    </div>
  );
};

export default Loader;
