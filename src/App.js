import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalProfile from './components/PersonalProfile';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  // State object to store the resume data
  const [resumeData] = useState({
    name: "Zh Rimel",
    title: "Data Scientist",
    contact: {
      email: "abc@gmail.com",
      web: "abc.github.io/abc",
      phone: "01234567890"
    },
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    workExperience: [
      {
        jobTitle: "Job Title at Company",
        duration: "August 2022 – December 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        jobTitle: "Job Title 2 at Company 2",
        duration: "August 2020 – December 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    skills: ["A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill", "A Key skill"],
    education: [
      {
        degree: "BS in Computer Science",
        school: "New Jersey Institute of Technology",
        years: "2018 - 2022",
        gpa: "3.9"
      },
      {
        degree: "MS in Data Science",
        school: "New Jersey Institute of Technology",
        years: "2022 - 2023",
        gpa: "4.0"
      }
    ]
  });

  return (
    <div className="App">
      <Header name={resumeData.name} title={resumeData.title} contact={resumeData.contact} />
      <PersonalProfile profile={resumeData.profile} />
      <WorkExperience experiences={resumeData.workExperience} />
      <Skills skills={resumeData.skills} />
      <Education education={resumeData.education} />
    </div>
  );
}

export default App;
