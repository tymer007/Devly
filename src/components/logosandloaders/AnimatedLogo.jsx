import React, { useEffect, useRef } from 'react';
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
        }, 60000); // 60 seconds pause
      }, 2000); // Animation duration
    };

    startAnimation();

    return () => {
      clearTimeout(startAnimation);
    };
  }, []);

  return (
    <div ref={loaderRef} className="loader font-bold text-3xl custom-font text-white">
      Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
    </div>
  );
};

export default AnimatedLogo;
