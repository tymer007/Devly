
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLogo from '../components/logosandloaders/AnimatedLogo';
import Footer from '../components/Footer';
import CommunityStackCard from '../components/StackComponent';



function Community() {
  const Stacks = [
    {
      title:"Web Development",
      description: "Check out our list of Developers on Devly",
      image:"webdev.png"
    },
    {
      title:"Mobile App Development",
      description: "View cybersecurity experts on Devly",
      image:"data.png"
    },
    {
      title:"Data Science",
      description: "Check out our list of data scientists",
      image:"data.png"
    },
    {
      title:"Cybersecurity",
      description: "View cybersecurity experts on Devly",
      image:"Cyber.png"
    },
    {
      title:"Embedded Systems",
      description: "Embedded system specialists are on Devly too",
      image:"embedded.png"
    },
    {
      title:"UI/UX Design",
      description: "Check out UI/UX designers on Devly",
      image:"uiux.png"
    }
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full p-2 bg-[#F4FFFA] px-4 flex items-center justify-between z-50">
        <div><AnimatedLogo /></div>
        <div className="flex items-center space-x-2">
          <img src="user-photo.png" className="w-8 h-8 rounded-md" alt="User" />
          <div className="hidden md:flex flex-col items-start">
            <Link to="/profile"><h4 className="font-semibold">Go to Dashboard</h4></Link>
            <span className="text-sm">Log Out</span>
          </div>
        </div>
      </nav>

      <br />
      <div className='pt-10 px-4'> 
        <div className="font-bold text-2xl md:text-4xl font-cascadia  mb-5 text text-black">
          Community<span className='p-0 m-0 font-semibold font-sans text-2xl '>_</span>
        </div>

        <div
        style={
          {display: 'flex',
            flexDirection: 'column',
            backgroundImage: "url('./Frame 217.jpg')",
            backgroundRepeat: 'no-repeat',
        }}  
        className=' flex flex-col  w-[95%] font-inter mx-auto relative h-32 md:h-72 lg:h-96 rounded-sm md:rounded-2xl bg-contain bg-no-repeat'>
          {/* <img src="./Frame 217.jpg" alt="CommImg" className="w-[95%] mx-auto relative " /> */}
          <div className='flex  ml-8 mt-3 md:mt-8 lg:mt-20 md: md:ml-12 lg:ml-20 absolute w-full '>
            <span className='bg-black  w-1 md:w-2 md:h-10 rounded-l-lg mr-6 shadow-2xl '></span>
            <h1 className='   text-white text-lg md:text-4xl font-bold md:max-w-[100%]'>Welcome To The Devly Community</h1>
          </div>
          
          <p className='absolute md:mt-20 lg:mt-36 text-white hidden md:flex md:text-xl md:max-w-[65%] md:ml-20 lg:ml-28  font-thin'>You can view user profiles and connect with them, create you cards and resumes, and even share your profile link as a mini portfolio</p>
        </div>

        <section className="flex flex-col items-center px-4 mt-12 md:px-0">
          {Stacks.map((stack, index) => (
            <CommunityStackCard
              key={index}
              title={stack.title}
              description={stack.description}
              image={stack.image}
              isReversed={index % 2 !== 0}
            />
          ))}
        </section>
      </div>
      
          <div className="bg-white  font-inter md:px-24 py-8 flex flex-col-reverse md:flex-row items-center">
            <div className="w-2/3">
              <h2 className="text-lg md:text-2xl font-bold mb-4 max-w-[100%] md:max-w-[50%]">Remember, Showcase Your Work to the World</h2>
              <p className="text-gray-700 mb-4 max-w-[70%]">At Devly, we believe in the power of showcasing your achievements. With our Share Your Portfolio feature, you can easily display your projects, skills, and accomplishments for the world to see. Whether you’re a developer, designer, or tech enthusiast, our platform allows you to create a stunning portfolio that highlights your best work.</p>
              <button className="bg-[#0DA16C] text-white px-4 py-2 rounded hover:bg-green-600">EDIT PROFILE</button>
            </div>
            <div className="w-1/3">
              <img src="./People.jpg" alt="" className="w-full h-full"/>
            </div>
          </div>
      

  
          <div className="bg-white md:px-24 py-8 flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="w-2/3 md:ml-48 lg:ml-64">
              <h2 className="text-lg md:text-2xl font-bold mb-4  md:max-w-[50%]">Craft the Perfect Resume with Ease</h2>
              <p className="text-gray-700 mb-4 max-w-[90%]">Stand out from the crowd with a professionally designed resume, made simple with Devly's Create Your Resume with Templates feature. Choose from a variety of customizable templates that cater to different styles and industries. Our tool guides you through each step, ensuring your resume is comprehensive and polished.</p>
              <button className="bg-[#0DA16C] text-white px-4 py-2 rounded hover:bg-green-600">CREATE MY RESUME</button>
            </div>
            <div className="w-1/3">
              <img src="./image 28.jpg" alt="" className="w-full h-auto"/>
            </div>
          </div>
    
    

    
          <div className="bg-white md:px-24 py-8 flex flex-col-reverse md:flex-row items-center">
            <div className="w-2/3">
              <h2 className="text-2xl font-bold mb-4 md:max-w-[50%]">Customize Your Business Cards and make a Lasting Impression</h2>
              <p className="text-gray-700 mb-4 max-w-[70%]">our business card is often the first impression you make. With Devly’s Customize Your Business Cards feature, you can design unique, professional cards that reflect your personal brand. Choose from a wide range of templates and personalize them to suit your style.</p>
              <button className="bg-[#0DA16C] text-white px-4 py-2 rounded hover:bg-green-600">GET MY BUSINESS CARD</button>
            </div>
            <div className="w-1/3">
              <img src="./image 7.png" alt="" className="w-full h-auto"/>
            </div>
          </div>
    
  
      <Footer />
    </div>
  );
}

export default Community;
