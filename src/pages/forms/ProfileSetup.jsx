import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AnimatedLogo from '../../components/logosandloaders/AnimatedLogo';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { Circle, CircleCheckBig, MoveLeft, MoveRight, Camera, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ProfileSetup = () => {
    // Form
    const [formPart, setFormPart] = useState(1);
    const handleNext = () => {
        setFormPart(formPart + 1);
    };

    const handleBack = () => {
        setFormPart(formPart - 1);
    };

    // Stack
    const [stack, setStack] = useState('');
    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [portfolio, setPortfolio] = useState('');

    const getTitles = () => {
        if (stack === 'cyberSecurity') return ['Cyber Security Analyst', 'Ethical Hacker', 'Security Engineer'];
        if (stack === 'dataScience') return ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst'];
        if (stack === 'embeddedSystems') return ['Embedded Systems Engineer', 'Firmware Developer', 'IoT Specialist'];
        if (stack === 'appDevelopment') return ['Mobile App Developer', 'iOS Developer', 'Android Developer'];
        if (stack === 'uiUxDesign') return ['UI Designer', 'UX Designer', 'Product Designer (UI & UX)'];
        if (stack === 'webDevelopment') return ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
        return [];
    };

    // Skills
    const [skills, setSkills] = useState([]);

    const handleSkillChange = (skill) => {
        setSkills((prevSkills) =>
            prevSkills.includes(skill)
                ? prevSkills.filter((s) => s !== skill)
                : [...prevSkills, skill]
        );
    };

    const getSkills = () => {
        if (stack === 'cyberSecurity') return ['Penetration Testing', 'Network Security', 'Incident Response', 'Firewall Management'];
        if (stack === 'dataScience') return ['Python', 'R', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'];
        if (stack === 'embeddedSystems') return ['C/C++', 'Microcontrollers', 'RTOS', 'Embedded Firmware Development'];
        if (stack === 'appDevelopment') return ['Swift', 'Kotlin', 'Java', 'Android SDK', 'iOS SDK', 'Cross-platform Development'];
        if (stack === 'uiUxDesign') return ['Wireframing', 'Prototyping', 'User Research', 'Adobe XD', 'Figma'];
        if (stack === 'webDevelopment') return ['UI/UX', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Ai Proficient'];
        return [];
    };

    // Personal
    const [profileImage, setProfileImage] = useState(null);
    const [bio, setBio] = useState('');
    const [country, setCountry] = useState('');
    const [remote, setRemote] = useState('');
    const [languages, setLanguages] = useState(['English']);
    const [newLanguage, setNewLanguage] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddLanguage = () => {
        if (newLanguage && !languages.includes(newLanguage)) {
            setLanguages([...languages, newLanguage]);
            setNewLanguage('');
        }
    };

    const handleRemoveLanguage = (lang) => {
        setLanguages(languages.filter(language => language !== lang));
    };

    // Educational
    const [degrees, setDegrees] = useState([]);
    const [newDegree, setNewDegree] = useState({ degree: '', course: '', institution: '', year: '' });
    const [certificates, setCertificates] = useState([]);
    const [newCertificate, setNewCertificate] = useState('');

    const handleAddDegree = () => {
        if (newDegree.degree && newDegree.course && newDegree.institution && newDegree.year) {
            setDegrees([...degrees, newDegree]);
            setNewDegree({ degree: '', course: '', institution: '', year: '' });
        }
    };

    const handleAddCertificate = () => {
        if (newCertificate) {
            setCertificates([...certificates, newCertificate]);
            setNewCertificate('');
        }
    };

    // Accounts
    const accounts = [];
    const [githubUsername, setGithubUsername] = useState('');
    const [linkedinUsername, setLinkedinUsername] = useState('');
    const [twitterUsername, setTwitterUsername] = useState('');
    const [instagramUsername, setInstagramUsername] = useState('')

    if (githubUsername) {
        accounts.push({ platform: 'github', link: `https://www.github.com/${githubUsername}` });
    }
    if (linkedinUsername) {
        accounts.push({ platform: 'linkedin', link: `https://www.linkedin.com/in/${linkedinUsername}` });
    }
    if (twitterUsername) {
        accounts.push({ platform: 'twitter', link: `https://www.twitter.com/${twitterUsername}` });
    }
    if (instagramUsername) {
        accounts.push({ platform: 'instagram', link: `https://www.instagram.com/${instagramUsername}` });
    }

    // Submit
    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = {
            stack,
            title,
            experience,
            skills,
            portfolio,
            bio,
            country,
            remote,
            languages,
            profileImage,
            degrees,
            certificates,
            accounts
        };
        console.log(formData);

        try {
            const response = await fetch('https://connect-i645.onrender.com/api/connect/post/profile--------------set', {
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

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white">
            <div className="md:w-2/3 flex justify-center bg-white relative">
                <div className="absolute mx-auto p-2">
                    <AnimatedLogo />
                </div>
                <div className="md:w-4/5 flex flex-col justify-center p-14 bg-white ">
                    {/* Stack */}
                    {formPart === 1 && (
                        <>
                            <h1 className="text-3xl font-cascadia mb-4">
                                Join our <span className="text-devlyGreen">community</span> today
                            </h1>
                            <p className="text-gray-600 mb-6">Let's Dive into your tech skills and roles</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="mb-4">

                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stack">
                                        Stack
                                    </label>
                                    <select
                                        id="stack"
                                        value={stack}
                                        onChange={(e) => setStack(e.target.value)}
                                        className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        required
                                    >
                                        <option value="">Select Stack</option>
                                        <option value="cyberSecurity">Cyber Security</option>
                                        <option value="dataScience">Data Science</option>
                                        <option value="embeddedSystems">Embedded Systems</option>
                                        <option value="appDevelopment">Mobile App Development</option>
                                        <option value="uiUxDesign">UI UX Design</option>
                                        <option value="webDevelopment">Web Development</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                        Your Role
                                    </label>
                                    <select
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        required
                                    >
                                        <option value="">Select Title</option>
                                        {getTitles().map((title) => (
                                            <option key={title} value={title}>
                                                {title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            <div className='flex flex-wrap -mx-3'>
                                <div className="mb-4 w-full sm:w-8/12 px-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolio">
                                        Do you have a Personal Portfolio?
                                    </label>
                                    <input
                                        id="portfolio"
                                        type="url"
                                        value={portfolio}
                                        onChange={(e) => setPortfolio(e.target.value)}
                                        placeholder="Paste link here"
                                        className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                                <div className="mb-4 w-full sm:w-4/12 px-3">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                                        Years of experience
                                    </label>
                                    <input
                                        id="experience"
                                        type="number"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        placeholder=""
                                        className="block appearance-none w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div>

                                    <button
                                        type="button"
                                        className="font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <MoveLeft className="inline" /> Return
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next <MoveRight className="inline" />
                                </button>
                            </div>

                        </>
                    )}
                    {/* Skills */}
                    {formPart === 2 && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>


                                <div className="flex flex-wrap gap-1">
                                    <div className='bg-green-300 rounded-3xl px-2 py-2'>Select skills:</div>
                                    {getSkills().map((skill) => (
                                        <div
                                            key={skill}
                                            className={` px-2 rounded-3xl py-2 ${skills.includes(skill) ? 'bg-green-200' : 'bg-green-100'} cursor-pointer`}
                                            onClick={() => handleSkillChange(skill)}
                                        >
                                            {skill}
                                            {skills.includes(skill) ? (
                                                <CircleCheckBig
                                                    size={16}
                                                    className="inline ml-2 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleSkillChange(skill);
                                                    }}
                                                />
                                            ) : (
                                                <Circle size={16} className="inline ml-2 cursor-pointer" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div>

                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <MoveLeft className="inline" /> Return
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next <MoveRight className="inline" />
                                </button>
                            </div>
                        </>
                    )}
                    {/* Personal */}
                    {formPart === 3 && (
                        <>

                            <div className="flex justify-center mb-4">
                                <label htmlFor="profileImage" className="cursor-pointer">
                                    {profileImage ? (
                                        <div className='flex flex-col items-center'>
                                            <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-devlyMint border-2 shadow-md" />
                                            <div className='flex justify-center items-center'>
                                                <div className='text-gray-700 text-sm font-medium'>Change Profile Picture</div>
                                                <br />
                                                <Camera
                                                    strokeWidth={2.5}
                                                    size={14}
                                                    color='#374151'
                                                    className='ml-1'
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <img src="update-dp.png" className="w-32 h-32 rounded-full object-cover shadow-md" />
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">Bio</label>
                                <textarea
                                    id="bio"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Tell us about you..."
                                    className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    rows="4"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country of Residence</label>
                                    <select
                                        id="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        <option value="">Select Country</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                        <option value="UK">UK</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Nigeria">Nigeria</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remote">Open to work remote?</label>
                                    <select
                                        id="remote"
                                        value={remote}
                                        onChange={(e) => setRemote(e.target.value)}
                                        className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Languages Spoken</label>
                                <div className="mt-2 flex">
                                    <input
                                        type="text"
                                        value={newLanguage}
                                        onChange={(e) => setNewLanguage(e.target.value)}
                                        placeholder="Add a language"
                                        className="flex-grow bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddLanguage}
                                        className="ml-2 bg-green-500 text-white py-2 px-4 rounded"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap mt-1">
                                    {languages.map((lang, index) => (
                                        <div key={index} className="bg-green-200 text-gray-700 px-2 py-1 rounded-full m-1 flex items-center">
                                            {lang}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveLanguage(lang)}
                                                className="ml-1 font-semibold"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div>


                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <MoveLeft className="inline" /> Return
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next <MoveRight className="inline" />
                                </button>
                            </div>
                        </>
                    )}
                    {/* Educational */}
                    {formPart === 4 && (
                        <>

                            <div className="flex flex-col justify-center mb-4">

                                <>
                                    <h2 className="text-center text-xl mb-6">Fill in your educational information</h2>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Do you have a tech-related degree?</label>
                                        <div className="flex space-x-2">
                                            <select
                                                value={newDegree.degree}
                                                onChange={(e) => setNewDegree({ ...newDegree, degree: e.target.value })}
                                                className="flex-grow bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            >
                                                <option value="">Degree</option>
                                                <option value="B.Sc">B.Sc</option>
                                                <option value="M.Sc">M.Sc</option>
                                                <option value="Ph.D">Ph.D</option>
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Course of Study"
                                                value={newDegree.course}
                                                onChange={(e) => setNewDegree({ ...newDegree, course: e.target.value })}
                                                className="flex-grow bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Institution"
                                                value={newDegree.institution}
                                                onChange={(e) => setNewDegree({ ...newDegree, institution: e.target.value })}
                                                className="flex-grow bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Year of Graduation"
                                                value={newDegree.year}
                                                onChange={(e) => setNewDegree({ ...newDegree, year: e.target.value })}
                                                className="flex-grow bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleAddDegree}
                                            className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
                                        >
                                            Add Degree
                                        </button>
                                        <div className="mt-2">
                                            {degrees.map((deg, index) => (
                                                <div key={index} className="bg-green-200 text-gray-700 px-2 py-1 rounded-full m-1 flex items-center">
                                                    {`${deg.degree} in ${deg.course}, ${deg.institution} (${deg.year})`}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Certificates</label>
                                        <input
                                            type="text"
                                            placeholder="Enter certificate"
                                            value={newCertificate}
                                            onChange={(e) => setNewCertificate(e.target.value)}
                                            className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddCertificate}
                                            className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
                                        >
                                            Add Certificate
                                        </button>
                                        <div className="mt-2">
                                            {certificates.map((cert, index) => (
                                                <div key={index} className="bg-green-200 text-gray-700 px-2 py-1 rounded-full m-1 flex items-center">
                                                    {cert}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </>
                            </div>

                            <div className="flex justify-between">
                                <div>


                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <MoveLeft className="inline" /> Return
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next <MoveRight className="inline" />
                                </button>
                            </div>
                        </>
                    )}
                    {/* Accounts */}
                    {formPart === 5 && (
                        <>

                            <div className="flex flex-col justify-center mb-4">

                                <>

                                    <div className="p-8">
                                        <div className="mb-4 flex items-center">
                                            <Github className="mr-2" />
                                            <input
                                                type="text"
                                                placeholder="Github Username"
                                                value={githubUsername}
                                                className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e) => setGithubUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4 flex items-center">
                                            <Linkedin className="mr-2" />
                                            <input
                                                type="text"
                                                placeholder="LinkedIn Username"
                                                value={linkedinUsername}
                                                className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e) => setLinkedinUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4 flex items-center">
                                            <Twitter className="mr-2" />
                                            <input
                                                type="text"
                                                placeholder="Twitter Username"
                                                value={twitterUsername}
                                                className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e) => setTwitterUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4 flex items-center">
                                            <Instagram className="mr-2" />
                                            <input
                                                type="text"
                                                placeholder="Instagram Username"
                                                value={instagramUsername}
                                                className="block w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e) => setInstagramUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                </>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="font-bold py-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <MoveLeft className="inline" /> Return
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next <MoveRight className="inline" />
                                </button>
                            </div>
                        </>
                    )}
                    {/* Review */}
                    {formPart === 6 && (
                        <form onSubmit={handleSubmit}>
                            <h2 className="text-center text-xl mb-6">Review and Submit</h2>
                            <div className="mb-4">
                                <p><img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-devlyMint border-2 shadow-md" /></p>
                                <p><strong>Stack:</strong> {stack}</p>
                                <p><strong>Title:</strong> {title}</p>
                                <p><strong>Experience:</strong> {experience} years</p>
                                <p><strong>Portfolio:</strong> <a href={portfolio} className='text-blue-600' target="_blank">{portfolio}</a></p>
                                <p><strong>Skills:</strong> {skills.join(', ')}</p>
                                <p><strong>Bio:</strong> {bio}</p>
                                <p><strong>Country of Residence:</strong> {country}</p>
                                <p><strong>Open to work Remote:</strong> {remote}</p>
                                <p><strong>Languages:</strong> {languages.join(', ')}</p>
                                <p><strong>Degrees:</strong> {degrees.map((deg, index) => (
                                    <ul>
                                        <li key={index} className="list-disc ml-6">
                                            {`${deg.degree} in ${deg.course}, ${deg.institution} (${deg.year})`}
                                        </li>
                                    </ul>
                                ))}</p>
                                <p><strong>Certificates:</strong> {certificates.map((cert, index) => (
                                    <ul>
                                        <li key={index} className="list-disc ml-6">
                                            {cert}
                                        </li>
                                    </ul>
                                ))}

                                </p>

                                <p>

                                    <h3>Added Social Accounts:</h3>
                                    {accounts.map((account, index) => (
                                        <div key={index}>
                                            <strong>{account.platform}:</strong> {account.link}
                                        </div>
                                    ))}
                                </p>
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
            </div>
            {/* Background Image */}
            <div className="md:w-1/3 hidden md:flex items-center justify-center">
                {formPart === 1 && (
                    <img src="cover-photo.png" alt="First part" className="w-full h-full object-cover" />
                )}
                {formPart === 2 && (
                    <img src="Cyber.png" alt="Second part" className="w-full h-full object-cover" />
                )}
                {formPart === 3 && (
                    <img src="customer-care.png" alt="Second part" className="w-full h-full object-cover" />
                )}
                {formPart === 4 && (
                    <img src="data.png" alt="Second part" className="w-full h-full object-cover" />
                )}
                {formPart === 5 && (
                    <img src="data.png" alt="Second part" className="w-full h-full object-cover" />
                )}
                {formPart === 6 && (
                    <img src="data.png" alt="Second part" className="w-full h-full object-cover" />
                )}
            </div>
        </div>
    );
};

export default ProfileSetup;
