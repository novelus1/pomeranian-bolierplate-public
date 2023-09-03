import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutAside from '../Components/AboutAside/AboutAside';
import AboutSections from '../Components/AboutSections/AboutSections';

import './style.css';

export function About() {
  return (
    <Routes>
      <Route path="" element={<AboutLayout />} />
    </Routes>
  );
}
function AboutLayout() {
  return (
    <div className='about__wrapper'>
      <AboutAside />
      <AboutSections />
    </div>
  );
}