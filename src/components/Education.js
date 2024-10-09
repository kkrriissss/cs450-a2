import React from 'react';

function Education({ education }) {
  return (
    <div className="section-wrapper">
      <div className="section-title">Education</div>
      <div className="section-content education">
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.school}</h4>
            <p>{edu.degree}</p>
            <p>{edu.years}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
