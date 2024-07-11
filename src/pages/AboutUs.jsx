import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQItem from "./FAQItem";

import { Mail, MapPin, PhoneCall } from "lucide-react";

function AboutUs() {
  const teamMembers = [
    {
      name: "Johnson Enoch",
      role: "Product Designer",
      img: "Ellipse 284.jpg"
    },
    {
      name: "Adams Ajiji",
      role: "UI/UX Designer",
      img: "Ellipse 288.jpg"
    },
    {
      name: "Promise",
      role: "UI Designer",
      img: "Ellipse 288.jpg"
    },
    {
      name: "Emmanuel Samuel",
      role: "Front-End Developer",
      img: "Ellipse 286.jpg",
    },
    {
      name: "Enoch Folorunsho",
      role: "Front-End Developer",
      img: "Ellipse 285.jpg",
    },
    {
      name: "Michael Anyanwu",
      role: "Front-End Developer",
      img: "20240411_171839.jpg",
    },
    {
      name: "Tyrone Freeman",
      role: "Full Stack Developer",
      img: "Ellipse 278.jpg",
    },
    {
      name: "Obasi Obasi",
      role: "Back-End Developer",
      img: "Ellipse 288.jpg"
    },
    {
      name: "Grace Yoila",
      role: "Security Engineer",
      img: "Ellipse 288.jpg"
    },
  ];

  const faqs = [
    {
      question: 'What is Devly?',
      answer: 'Devly is a collaborative and networking platform that brings together tech enthusiasts from around the world. It provides a space for members to connect, collaborate on projects, share knowledge, and build professional relationships.'
    },
    {
      question: 'Who can join Devly?',
      answer: 'Anyone with a passion for technology can join Devly. Whether you\'re a developer, a coder, a designer, a data analyst, or simply interested in the tech industry, Devly welcomes you to be part of our community.'
    },
    {
      question: 'How do I join Devly?',
      answer: 'Joining Devly is simple! Visit our website and sign up for an account. Once registered, you can start exploring the platform, connect with other members, and participate in various activities and events.'
    },
    {
      question: 'What can I do on Devly?',
      answer: 'On Devly, you can collaborate on projects, participate in coding challenges and hackathons, attend tech meetups, and access mentorship programs. You can also share your work, seek advice, and learn from industry experts and peers.'
    },
    {
      question: 'How can I contribute to the community?',
      answer: 'There are many ways to contribute to Devly! You can share your knowledge by mentoring others, and participating in discussions. You can also collaborate on projects and help fellow members with their technical challenges.'
    },
    {
      question: 'How do I stay updated on Devly events and activities?',
      answer: 'Stay updated by following our blog, subscribing to our newsletter, and joining our social media channels. We regularly post updates about upcoming events, new features, and community highlights.'
    },
    {
      question: 'What if I need help or support?',
      answer: 'If you need assistance, our support team is here to help. You can reach out to us through the contact form on our website, and we\'ll get back to you as soon as possible.'
    }
  ];

  return (
    <div>
      <div><Navbar /></div>
      <br />
      <br />
      <br />
      <div className=" text-black">
        <div className="container mx-auto p-4">
          <section className="relative h-96 sm:h-80 md:h-96 lg:h-screen flex items-center justify-center text-white mx-4 sm:mx-8">
            <img
              src="bfdfhhj.jpeg"
              alt="Devly Intro"
              className="absolute inset-0 object-cover w-full h-full z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center z-1 p-4 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                | What is devly and how does it work?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-start ml-4 sm:ml-8">
                We're a networking and portfolio showcase platform empowering tech talent.
              </p>
            </div>
          </section>


          <section className="flex flex-col md:flex-row items-center p-8">
            <img
              src="Frame 45.jpg"
              alt="Question Mark"
              className="w-full md:w-1/2 h-auto"
            />
            <div className="md:ml-8 mt-4 md:mt-0">
              <h2 className="text-xl font-bold text-gray-800">About Us</h2>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Everything To Know About Devly
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Welcome to Devly, your go-to platform for collaboration and
                networking among tech enthusiasts. At Devly, we believe in the power
                of community and the magic that happens when like-minded individuals
                come together to share ideas, innovate, and create. Whether you're a
                seasoned developer, a budding coder, or someone passionate about the
                tech world, Devly provides the perfect environment for you to
                connect, learn, and grow.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-800 transition duration-100">
                Learn More
              </button>
            </div>
          </section>

          <section className="flex justify-center items-center p-4 sm:p-8">
            <div className="bg-green-50 p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-screen-xl text-center">
              <div className="flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  OUR MISSION
                </h2>
                <p className="text-base sm:text-lg text-gray-700 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 text-center mb-2 sm:mb-4">
                  Our mission is to bridge the gap between talent and opportunity. We offer a vibrant space where members can collaborate on projects, exchange knowledge, create personalized resumes, and build professional networks. Devly is designed to foster creativity, enhance skills, and drive technological advancements.
                </p>
                <p className="text-base sm:text-lg text-gray-700 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
                  Join us and be part of a thriving community where innovation knows no bounds. Together, we can shape the future of technology.
                </p>
              </div>
            </div>
          </section>


          <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 font-cascadia">MEET THE TEAM</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 font-cascadia">
                Frequently asked questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="text-left">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-700">
                Join Devly today and be part of a dynamic community where your
                passion for technology can thrive!
              </p>
            </div>
          </section>

          <section className="flex justify-center items-center p-4 sm:p-8 bg-white min-h-screen">
            <div className="max-w-4xl w-full bg-gray-50 p-4 sm:p-8 rounded-lg shadow-md flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 pr-0 sm:pr-4">
                <h2 className="text-2xl font-bold text-green-600 mb-2 font-cascadia">
                  Contact us
                </h2>
                <p className="text-gray-600 mb-6">
                  We are here for you! How can we help?
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-green-50"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-green-50"
                  />
                  <textarea
                    placeholder="Go ahead, We are listening..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 bg-green-50 h-32"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full p-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="w-full sm:w-1/2 pl-0 sm:pl-4 flex flex-col justify-center items-center sm:items-right mt-4 sm:mt-0">
                <img
                  src="image 18.png"
                  alt="Contact us illustration"
                  className="mb-4 md:block lg:block hidden"
                />
                <div className="space-y-4 sm:flex sm:flex-col sm:items-center sm:justify-center">
                  <div className="flex items-center">
                    <MapPin />
                    <p className='ml-2'>House 205, Kwang, Jos, Nigeria</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall />
                    <p className='ml-2'>+234 123 456 ****</p>
                  </div>
                  <div className="flex items-center">
                    <Mail />
                    <p className='ml-2'>contact@devly.ng</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default AboutUs