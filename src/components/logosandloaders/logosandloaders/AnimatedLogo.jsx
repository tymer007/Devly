import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;

    const startAnimation = () => {
      loader.classList.add('animate');
      setTimeout(() => {
        loader.classList.remove('animate');
        loader.classList.add('visible');
        setTimeout(() => {
          loader.classList.remove('visible');
          startAnimation();
        }, 10000); // 60 seconds pause
      }, 2000); // Animation duration
    };

    startAnimation();

    return () => {
      clearTimeout(startAnimation);
    };
  }, []);

  return (
    <Link to="/" >
      <div ref={loaderRef} className="loader text-3xl text-devlyGreen font-cascadia">
        Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
      </div>
    </Link>
  );
};

export default AnimatedLogo;
