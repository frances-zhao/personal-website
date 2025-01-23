import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="left-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="right-header">
        <Link to="/">about</Link>
        <Link to="/works">works</Link>
        <Link to="/extras">extras</Link>
      </div>
    </header>
  );
};

export default Header;