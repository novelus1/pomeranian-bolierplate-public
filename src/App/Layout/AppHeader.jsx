import React from 'react';
import startItLogo from '../Images/start-it-logo.svg';
import { Link } from 'react-router-dom';
import './styles/header.css';

export function AppHeader() {
  return (
    <header className="navigation">
      <div>
        <a
          href="https://pomeranianstartit.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={startItLogo} className="logo" alt="logo" srcSet="" />
        </a>
      </div>
      <div className="link-container">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </div>
    </header>
  );
}
