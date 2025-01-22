import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-header">
        <a href="#home">frances zhao</a>
      </div>
      <div className="right-header">
        <a href="#about">about</a>
        <a href="#projects">works</a>
        <a href="#writing">extra !</a>
      </div>
    </header>
  );
};

export default Header;
