import React, { useEffect, useState } from 'react';
import NavSearchBar from '../../components/NavSearchBar';
import Footer from '../../components/Footer';
import ProfileCards from '../../components/ProfileCards';
import axios from 'axios';

const CommEmbedded = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState([]);
  const [activeTitle, setActiveTitle] = useState("All");
  const [activeSkill, setActiveSkill] = useState("All");

  const menuItems = ["All", ...new Set(data.map((val) => val.title))];
  const skillItems = ["All", ...new Set(data.flatMap((val) => val.skills))];

  const filterItems = (title, skill) => {
    setActiveTitle(title);
    setActiveSkill(skill);

    let filteredData = data;

    if (title !== "All") {
      filteredData = filteredData.filter((item) => item.title === title);
    }

    if (skill !== "All") {
      filteredData = filteredData.filter((item) => item.skills.includes(skill));
    }

    setFilter(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://connect-i645.onrender.com/api/connect/portfolio/portfolio/embeddedSystems');
        setData(response.data.Portfolios);
        setFilter(response.data.Portfolios);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <NavSearchBar />
      <br />
      <div className="pt-10 font-bold text-2xl md:text-4xl font-cascadia mb-5 text-black">
        Embedded Systems Specialist<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span>
      </div>
      <div className='mx-auto p-4'>
        <div className='flex overflow-x-auto space-x-2 my-4'>
          {menuItems.map((title) => (
            <button
              key={title}
              className={`px-4 py-1 rounded shadow-md whitespace-nowrap ${activeTitle === title ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
              onClick={() => filterItems(title, activeSkill)}
            >
              {title}
            </button>
          ))}
        </div>
        <div className='flex overflow-x-auto space-x-2 my-4'>
          {skillItems.map((skill) => (
            <button
              key={skill}
              className={`px-4 py-1 rounded shadow-md whitespace-nowrap ${activeSkill === skill ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
              onClick={() => filterItems(activeTitle, skill)}
            >
              {skill}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap justify-center'>
          {filter.map((item) => (
            <ProfileCards 
              key={item.id}
              name={`${item.firstname} ${item.lastname}`}
              title={item.title}
              description={item.stack}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommEmbedded;
