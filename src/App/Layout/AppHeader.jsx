import React from 'react';
import startItLogo from '../Images/start-it-logo.svg';
import Navbar from '../Components/NavbarMenu/Navbar';
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
      <div className="navigation__menu">
        <Navbar />
      </div>
    </header>
  );
}
