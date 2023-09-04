import React from 'react';
import startItLogo from '../Images/start-it-logo.svg';
import { Link } from 'react-router-dom';
import './styles/header.css';
import Navbar from '../Components/NavbarMenu/Navbar';

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
        {/* <Link to="/" className='nav-link'>Home</Link>
        <Link to="/faq" className='nav-link'>FAQ</Link> */}
        {/* {window.location.pathname !== '/dashboard' && (
          <li><Link to="/other">Other</Link></li>
        )} */}
        <Navbar />
      </div>
    </header>
  );
}
