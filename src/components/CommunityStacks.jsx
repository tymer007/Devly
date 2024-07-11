import React from 'react'

const CommunityStacks = ({ title, description, image, isReversed }) => {
  return (
    <div className={`flex font-inter flex-col-reverse md:flex-row ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between w-full md:w-[85%] md:h-[16.375rem] md:px-11  bg-[#E2F3E5] shadow-xl rounded-3xl p-4 mb-12`}>
        <div className={`text-left font-inter md:text-left mb-4 md:mb-0 ${isReversed ? 'md:ml-18' : 'md:mr-18'}`}>
            <div className="flex items-center">
                <h1 className="text-2xl font-inter md:text-4xl  font-bold ">{title}</h1>
            </div>
            <h4 className="text-gray-800 text-lg md:text-xl md:mt-8 ">
                {description}
            </h4>
        </div>
        <div className="w-50 md:w-52">
            <img src={image} alt="stackImages" className='md:w-full w-[65%] mx-auto'/>
        </div>
    </div>
        
    
        
    
  )
}

export default CommunityStacks
