import React from 'react';

function Skills({ skills }) {
  return (
    <div className="section-wrapper">
      <div className="section-title">Key Skills</div>
      <div className="section-content skills">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
