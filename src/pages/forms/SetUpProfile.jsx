import React, { useState } from 'react';
import { ChevronRight, Trash, Plus } from 'lucide-react';

const SetUpProfile = () => {
  const [formPart, setFormPart] = useState(1);
  const [stack, setStack] = useState('');
  const [title, setTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [portfolio, setPortfolio] = useState('');

  const handleNext = () => {
    setFormPart(formPart + 1);
  };

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      stack,
      title,
      experience,
      skills,
      portfolio,
    };
    console.log(formData);

    try {
      const response = await fetch('https://health-4-u5fi.onrender.com/api/betta/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Response from API:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getTitles = () => {
    if (stack === 'frontend') return ['Frontend Developer', 'UI/UX Designer'];
    if (stack === 'backend') return ['Backend Developer', 'Database Administrator'];
    return [];
  };

  const getSkills = () => {
    if (stack === 'frontend') return ['React', 'Tailwind CSS', 'JavaScript'];
    if (stack === 'backend') return ['Node.js', 'Express', 'MongoDB'];
    return [];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {formPart === 1 ? (
          <>
            <h2 className="text-center text-xl mb-6">Tell us what you do</h2>

            <div className="mb-4">

              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stack">
                Stack
              </label>
              <select
                id="stack"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolio">
                Portfolio
              </label>
              <input
                id="portfolio"
                type="text"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="Do you have a personal portfolio"
                className="block appearance-none w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                What's your Title
              </label>
              <select
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block appearance-none w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select title</option>
                {getTitles().map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                Years of experience
              </label>
              <select
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="block appearance-none w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select number</option>
                {[...Array(11).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
              <div className="flex flex-wrap">
                {getSkills().map((skill) => (
                  <div
                    key={skill}
                    className={`m-1 p-2 rounded ${skills.includes(skill) ? 'bg-green-200' : 'bg-green-100'} cursor-pointer`}
                    onClick={() => handleSkillChange(skill)}
                  >
                    {skill}
                    {skills.includes(skill) ? (
                      <Trash
                        size={16}
                        className="inline ml-2 cursor-pointer"
                        onClick={() => handleSkillChange(skill)}
                      />
                    ) : (
                      <Plus size={16} className="inline ml-2 cursor-pointer" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next <ChevronRight className="inline" />
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-xl mb-6">Review and Submit</h2>
            <div className="mb-4">
              <p><strong>Stack:</strong> {stack}</p>
              <p><strong>Title:</strong> {title}</p>
              <p><strong>Experience:</strong> {experience} years</p>
              <p><strong>Portfolio:</strong> {portfolio}</p>
              <p><strong>Skills:</strong> {skills.join(', ')}</p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setFormPart(1)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="mt-6">
        {formPart === 1 ? (
          <img src="/path/to/first-image.png" alt="First part" />
        ) : (
          <img src="/path/to/second-image.png" alt="Second part" />
        )}
      </div>
    </div>
  );
};

export default SetUpProfile;
