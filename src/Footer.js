import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/frances-zhao" target="_blank" rel="noopener noreferrer">github</a>
        <a href="https://www.linkedin.com/in/francesfyzhao" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="mailto:frances.zhao@uwaterloo.ca">email</a>
        <a href='/Frances Resume.pdf' target="_blank" rel="noopener noreferrer">resume !</a>
      </div>
      <p>{currentYear} &copy; FRANCES ZHAO. made with love, sweat, and tears ˚ʚ♡ɞ˚</p>
    </footer>
  );
}

export default Footer;