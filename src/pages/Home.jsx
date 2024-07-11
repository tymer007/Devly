import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  const steps = [
    {
      number: '1',
      title: 'Create Your Profile',
      description: 'Sign up for free and create a detailed profile. Include your skills, experiences, and personal achievements to make a memorable first impression.',
      image: 'image 14.png'
    },
    {
      number: '2',
      title: 'Showcase Your Projects',
      description: 'Upload and organize your projects. Share detailed descriptions, images, and links to demonstrate your capabilities and technical expertise.',
      image: 'image 15.png'
    },
    {
      number: '3',
      title: 'Connect with the Community',
      description: 'Explore profiles, join groups, and connect with peers and potential collaborators. Build relationships that can lead to exciting career opportunities.',
      image: 'image 16.png'
    },
    {
      number: '4',
      title: 'Find Opportunities',
      description: 'Browse through job listings and project proposals that match your skills. Apply directly through the platform and start working on meaningful tech ventures.',
      image: 'image 17.png'
    }
  ];

  return (

    <div>
      <div><Navbar /></div>
      <br />
      <br />
      <div className='pt-10 px-4 pb-4'>
        <div>
          <div>
            {/* herosection */}
            <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-10 md:px-20">
              <p className="text-sm sm:text-base md:text-lg text-[#0DA16C] font-bold">100% FREE Collaboration Platform</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-1 sm:mb-2">Welcome to Devly: Where</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-9">Collaboration Meets Innovation</h1>
              <p className="text-base sm:text-lg md:text-xl">Devly is a cutting-edge networking platform designed to bring tech professionals together, fostering</p>
              <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">unending collaboration and groundbreaking innovation.</p>
              <button className="bg-[#0DA16C] text-white px-4 sm:px-6 py-2 rounded-md">Get Started</button>
            </section>



            {/* whoisdevly section */}
            <section className="py-5 px-4 sm:px-10 md:px-20">
              <div className="container mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl text-left font-bold mb-4 sm:mb-8">Who's on Devly?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">UI/UX Designers</h3>
                      <p className="text-gray-600">Lorem isup en shou tengen sama Itadori kun</p>
                    </div>
                    <img src="image9.png" alt="UI/UX Designers" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">Front-end Developers</h3>
                      <p className="text-gray-600">Leverage Kaggle's models, notebooks & datasets.</p>
                    </div>
                    <img src="image 11.png" alt="Front-end Developers" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">Back-end Developers</h3>
                      <p className="text-gray-600">Advance ML with our pre-trained model hub & competitions.</p>
                    </div>
                    <img src="image 12.png" alt="Back-end Developers" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">Cyber Security Experts</h3>
                      <p className="text-gray-600">Lorem isup en shou tengen sama Itadori kun</p>
                    </div>
                    <img src="image 10.png" alt="Cyber Security Experts" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">Embedded Systems Specialist</h3>
                      <p className="text-gray-600">Leverage Kaggle's models, notebooks & datasets.</p>
                    </div>
                    <img src="image 13.png" alt="Embedded Systems Specialist" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                  <div className="p-4 sm:p-6 rounded-lg flex gap-4 sm:gap-6">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg sm:text-xl">Data Analyst</h3>
                      <p className="text-gray-600">Advance ML with our pre-trained model hub & competitions.</p>
                    </div>
                    <img src="image 29.png" alt="Data Analyst" className="h-16 w-16 sm:h-20 sm:w-20 mb-4" />
                  </div>
                </div>
              </div>
            </section>




            {/* how it works section */}
            <section className="py-12 bg-white">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-600 mb-8">Start showcasing your tech talent and connecting with industry professionals in just four easy steps.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row p-6 bg-green-50 rounded-lg shadow-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-4">
                        {step.number}
                      </div>
                      <div className="flex flex-col md:flex-row md:flex-grow items-center">
                        <div className="md:ml-4 text-center md:text-left">
                          <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                        <img src={step.image} alt={step.title} className="w-full md:w-1/2 mt-4 md:mt-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>


            {/* key features section  */}
            <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20">
              <div className="container mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Key Features</h2>
                <p className="mb-4 sm:mb-8 text-gray-600">
                  We offer a comprehensive suite of features designed to empower tech professionals like you. Discover how our platform can elevate your career and enhance your collaborative efforts.
                </p>
                <div className="flex flex-col lg:flex-row items-center">
                  <img src="image 2.jpg" alt="Explore our community of tech enthusiasts" className="w-full lg:w-1/2 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-8" />
                  <div className="lg:w-1/2 text-left">
                    <p className="text-base sm:text-lg text-[#0DA16C] font-bold">FEATURES</p>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Explore our community of tech enthusiasts</h3>
                    <p className="mb-2 sm:mb-4 text-gray-600">
                      Collaborate with tech like-minded professionals from around the globe. Build your network, share ideas, and explore new opportunities.
                    </p>
                    <a href="#explore" className="inline-block bg-[#0DA16C] text-white font-semibold py-2 px-4 rounded">
                      Go to Community
                    </a>
                  </div>
                </div>
              </div>
            </section>


            {/* resume section */}
            <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20 bg-[#DDF7EB]">
              <div className="container mx-auto text-center">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 text-left lg:mr-8 mb-8 lg:mb-0">
                    <h3 className="text-lg sm:text-xl text-[#0DA16C] font-semibold mb-2 sm:mb-4">FEATURES</h3>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Free built-in resume templates</h2>
                    <p className="mb-4 sm:mb-8 text-gray-600 text-justify">
                      Devly's Resume Builder is designed to help you create a standout resume effortlessly. Whether you're just starting your career or looking to make a change, our intuitive tool provides everything you need to showcase your skills and experience.
                    </p>
                    <a href="#resume" className="inline-block bg-[#0DA16C] text-white font-semibold py-2 px-4 rounded">
                      Read More
                    </a>
                  </div>
                  <img src="image 3.jpg" alt="Free built-in resume templates" className="w-full lg:w-1/2 rounded-lg shadow-md" />
                </div>
              </div>
            </section>


            {/* business card section */}
            <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-20">
              <div className="container mx-auto text-center">
                <div className="flex flex-col lg:flex-row items-center">
                  <img src="image 4.png" alt="Eye catching business cards" className="w-full lg:w-1/2 rounded-lg mb-4 sm:mb-8 lg:mb-0 lg:mr-8" />
                  <div className="lg:w-1/2 text-left">
                    <h3 className="text-lg sm:text-xl text-[#0DA16C] font-semibold mb-2 sm:mb-4">FEATURES</h3>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Eye catching business cards</h2>
                    <p className="mb-4 sm:mb-8 text-gray-600">
                      Stand out from the crowd with our custom business card feature! Perfect for professionals, freelancers, and entrepreneurs looking to make a lasting impression.
                    </p>
                    <a href="#business-cards" className="inline-block bg-[#0DA16C] text-white font-semibold py-2 px-4 rounded">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>


            {/* last part section  */}
            <section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="pt-6 shadow-lg rounded-lg">
                      <div className="flow-root rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 text-center font-medium">A Global community</h3>
                          <p className="mt-5 text-base leading-6 text-center">
                            Utilise our platform to get jobs from anywhere in the world
                          </p>
                          <div className="mt-6">
                            <div className='font-extrabold font-cascadia text-lg text-devlyGreen text-center p-0 m-0'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 shadow-lg rounded-lg">
                      <div className="flow-root rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 text-center font-medium">Totally free to use</h3>
                          <p className="mt-5 text-base leading-6 text-center">
                            Devly's features are completely free to use, making it unique from other collaborative platforms.
                          </p>
                          <div className="mt-6">
                            <div className='font-extrabold font-cascadia text-lg text-devlyGreen text-center p-0 m-0'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 shadow-lg rounded-lg">
                      <div className="flow-root rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <h3 className="mt-8 text-lg leading-6 text-gray-900 text-center font-medium">Can serve as your Portfolio</h3>
                          <p className="mt-5 text-base leading-6 text-center">
                            Share your profile to your recipients and use them as portfolios.
                          </p>
                          <div className="mt-6">
                            <div className='font-extrabold font-cascadia text-lg text-devlyGreen text-center p-0 m-0'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
      <div><Footer /></div>

    </div>
  )
}

export default Home