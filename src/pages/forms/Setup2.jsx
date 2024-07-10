import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { ChevronRight, Trash, Plus, Circle, CircleCheckBig, MoveLeft, MoveRight } from 'lucide-react';

import AnimatedLogo from '../../components/logosandloaders/AnimatedLogo';

const Setup2 = () => {

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
            const response = await fetch('connect-i645.onrender.com/api/connect/post/profile', {
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
        if (stack === 'cyberSecurity') return ['Cyber Security Analyst', 'Ethical Hacker', 'Security Engineer'];
        if (stack === 'dataScience') return ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst'];
        if (stack === 'embeddedSystems') return ['Embedded Systems Engineer', 'Firmware Developer', 'IoT Specialist'];
        if (stack === 'appDevelopment') return ['Mobile App Developer', 'iOS Developer', 'Android Developer'];
        if (stack === 'uiUxDesign') return ['UI Designer', 'UX Designer', 'Product Designer'];
        if (stack === 'webDevelopment') return ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
        return [];
    };

    const getSkills = () => {
        if (stack === 'cyberSecurity') return ['Penetration Testing', 'Network Security', 'Incident Response', 'Firewall Management'];
        if (stack === 'dataScience') return ['Python', 'R', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'];
        if (stack === 'embeddedSystems') return ['C/C++', 'Microcontrollers', 'RTOS', 'Embedded Firmware Development'];
        if (stack === 'appDevelopment') return ['Swift', 'Kotlin', 'Java', 'Android SDK', 'iOS SDK', 'Cross-platform Development'];
        if (stack === 'uiUxDesign') return ['Wireframing', 'Prototyping', 'User Research', 'Adobe XD', 'Figma'];
        if (stack === 'webDevelopment') return ['UI/UX', 'React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'];
        return [];
    };
















    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formData.password !== formData.confirmPassword) {
    //         setPasswordsMatch(false);
    //     } else {
    //         setPasswordsMatch(true);
    //         console.log(formData);
    //         // Add your form submission logic here
    //     }



    // };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-white">
            <div className="md:w-2/3 flex justify-center bg-white relative">
                <div className="absolute mx-auto p-2">
                    <AnimatedLogo />
                </div>
                <div className="md:w-4/5 flex flex-col justify-center p-14 bg-white ">
                    {formPart === 1 ? (
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





                                {/* <div className="mb-4">
                                    <label className="block font-bold mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold mb-1">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Please enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold mb-1">Your phone number</label>
                                    <input
                                        type="text"
                                        name="number"
                                        placeholder="Enter your phone number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold mb-1">Create Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        minLength="8"
                                        maxLength="15"
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                        pattern="(?=.*\d)[A-Za-z\d]{8,}"
                                        title="Password must be at least 8 characters long and contain at least one digit"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Enter password again"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        minLength="8"
                                        maxLength="15"
                                        className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                        pattern="(?=.*\d)[A-Za-z\d]{8,}"
                                        title="Password must be at least 8 characters long and contain at least one digit"
                                        required
                                    />
                                    {!passwordsMatch && (
                                        <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                                    )}
                                </div> */}
                            </div>
                            <div className='flex flex-wrap space-x-6'>
                                <div className="mb-4 w-8/12">
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
                                <div className="mb-4 w-3/12">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                                        Years of experience
                                    </label>
                                    <input
                                        id="experience"
                                        type="number"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        placeholder="How many years have you been developing"
                                        className="block appearance-none w-full bg-green-100 border border-green-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>


                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>


                                <div className="flex flex-wrap gap-1">
                                    <div className='bg-green-300 rounded-xl px-2'>Select skills:</div>
                                    {getSkills().map((skill) => (
                                        <div
                                            key={skill}
                                            className={` px-2 rounded-xl ${skills.includes(skill) ? 'bg-green-200' : 'bg-green-100'} cursor-pointer`}
                                            onClick={() => handleSkillChange(skill)}
                                        >
                                            {skill}
                                            {skills.includes(skill) ? (
                                                <CircleCheckBig
                                                    size={16}
                                                    className="inline ml-2 cursor-pointer"
                                                    onClick={() => handleSkillChange(skill)}
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




                            {/* <div className="mb-4">

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
                            </div> */}

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









                    {/* <h1 className="text-3xl font-cascadia mb-4">
                        Join our <span className="text-devlyGreen">community</span> today
                    </h1>
                    <p className="text-gray-600 mb-6">Become a part of our informative community</p>

                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="mb-4">
                                <label className="block font-bold mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-1">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Please enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-1">Your phone number</label>
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Enter your phone number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-1">Create Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    minLength="8"
                                    maxLength="15"
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    pattern="(?=.*\d)[A-Za-z\d]{8,}"
                                    title="Password must be at least 8 characters long and contain at least one digit"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Enter password again"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    minLength="8"
                                    maxLength="15"
                                    className="w-full px-3 py-2 border-3 border-gray-300 rounded"
                                    pattern="(?=.*\d)[A-Za-z\d]{8,}"
                                    title="Password must be at least 8 characters long and contain at least one digit"
                                    required
                                />
                                {!passwordsMatch && (
                                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                                )}
                            </div>
                        </div>


                        <div className="mb-4 flex items-start">
                            <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="mr-2 mt-1"
                                required
                            />
                            <label>
                                By creating an account you are agreeing to our Terms and Conditions and Privacy Policy
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
                        >
                            CONTINUE
                        </button>

                    </form>
                    <p className="text-center mt-4">
                        Already have an account? <Link to="/login" className="text-devlyGreen">Login</Link>
                    </p> */}

                </div>



            </div>
            <div className="md:w-1/3 hidden md:flex items-center justify-center">
                {formPart === 1 ? (
                    <img src="cover-photo.png" alt="First part" className="w-full h-full object-cover"/>
                ) : (
                    <img src="Cyber.png" alt="Second part" className="w-full h-full object-cover" />
                )}
            </div>
        </div>
    );
};

export default Setup2;
