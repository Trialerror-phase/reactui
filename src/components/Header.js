// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <header className="header" style={headerStyle}>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
