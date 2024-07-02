import React, { useEffect, useRef } from 'react';
import './CommunityHeader.css';

const CommunityHeader = () => {
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
    <div ref={loaderRef} className="loader font-bold text-3xl custom-font text-black">
      Community<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
    </div>
  );
};

export default CommunityHeader;
