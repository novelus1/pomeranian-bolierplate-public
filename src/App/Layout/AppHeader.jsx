import React from 'react';

import startItLogo from '../Images/start-it-logo.svg';

import { Link } from 'react-router-dom';

import './styles/header.css';

export function AppHeader() {
  return (
    <header className="navigation">
      <div>
        <Link to="/">
          <img src={startItLogo} className="logo" alt="" srcSet="" />
        </Link>
      </div>
    </header>
  );
}
