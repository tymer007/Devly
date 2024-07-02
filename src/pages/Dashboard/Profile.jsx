import React from 'react';
import { Link } from 'react-router-dom';
import { User, Handshake, LogOut, FileText, Settings } from "lucide-react";

import Dashboard, { DashboardItem } from './Dashboard.jsx';
import WebDevProfile from '../profiles/WebDevProfile.jsx';

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
        <div>
          <div><WebDevProfile /></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
