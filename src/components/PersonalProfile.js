import React from 'react';

function PersonalProfile({ profile }) {
  return (
    <div className="section-wrapper">
      <div className="section-title">Personal Profile</div>
      <div className="section-content">
        <p>{profile}</p>
      </div>
    </div>
  );
}

export default PersonalProfile;
