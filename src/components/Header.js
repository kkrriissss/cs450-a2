import React from 'react';

function Header({ name, title, contact }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="header-right">
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Web: <a href={contact.web} target="_blank" rel="noopener noreferrer">{contact.web}</a></p>
        <p>Mobile: {contact.phone}</p>
      </div>
    </div>
  );
}

export default Header;
