import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-devlyGreen text-white py-8 px-4 m-4 rounded-3xl bottom-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-cascadia mb-2">Contact</h2>
          <p>contact@devly.ng</p>
          <p className="mb-4">+234 549 454 ****</p>
          <div className="flex space-x-3">
            <Link to="/signup">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">Get Started</button>
            </Link>
            {/* <button className="border border-black text-black font-bold py-2 px-4 rounded">Send Email</button> */}
            {/* <form action=""><input type="email"
              name="email"
              placeholder="Sign up to our Newsletter"
              className="border border-black text-black font-medium py-2 px-4 rounded w-56"
              required /></form> */}
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank">
              <Facebook className="text-black" size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank">

              <Twitter className="text-black" size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank">

              <Linkedin className="text-black" size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <Instagram className="text-black" size={24} />

            </a>
            {/* <a href="https://www.youtube.com" target="_blank">

              <Youtube className="text-black" size={24} />
            </a> */}
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-cascadia mb-2">Community</h2>
          <ul className="space-y-2">
            <li>Web Developers</li>
            <li>UI/UX</li>
            <li>Cyber Security</li>
            <li>Embedded Systems</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-cascadia mb-2">About</h2>
          <ul className="space-y-2">
            <li>How it works</li>
            <li>Featured</li>
            <li>Contact us</li>
          </ul>
        </div>
        {/* <div className="flex flex-col items-start">
          <h2 className="text-xl font-cascadia mb-2">Support</h2>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Help Docs</li>
            <li>Email Us</li>
            <li>Feature Request</li>
            <li>Status Page</li>
          </ul>
        </div> */}
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        <p className="space-x-2">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Acceptable Use Policy</span>
          <span>Cookie Policy</span>
          <span>Cancellation Policy</span>
        </p>
        <p className='font-medium'><span className='font-black'>&copy;</span> 2024 <span className='text-devlyMint font-cascadia'>Devly<span className='font-sans'>_</span></span> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
