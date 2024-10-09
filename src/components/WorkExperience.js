import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <div className="section-wrapper">
      <div className="section-title">Work Experience</div>
      <div className="section-content work-experience">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h4>{exp.jobTitle} ({exp.duration})</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
