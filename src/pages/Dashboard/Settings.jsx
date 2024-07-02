import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard, { DashboardItem } from './Dashboard.jsx';
import { User, Handshake, LogOut, FileText, Settings } from "lucide-react";

const Profile = () => {
  return (
    <>
      {/* Dashboard */}
      <div className="flex">
        <Dashboard>
          <hr className="my-3 border-gray-600" />
          <DashboardItem icon={<Handshake size={20} />} text="Community" alert />
          <DashboardItem icon={<User size={20} />} text="Your Profile" active />
          <DashboardItem icon={<FileText size={20} />} text="Resume and Cards" />
          <DashboardItem icon={<Settings size={20} />} text="Settings" />
          <DashboardItem icon={<LogOut size={20} />} text="Log Out" />
        </Dashboard>
        <div className="flex-1 p-4">
            <div className='font-extrabold font-mono text-2xl p-0 m-0'>Settings<span className='p-0 m-0 font-bold font-sans text-2xl'>_</span></div>
          
          <p>Finish setting up your profile</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
