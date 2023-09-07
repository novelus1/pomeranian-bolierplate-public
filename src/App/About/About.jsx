import { Route, Routes } from 'react-router-dom';
import AboutAside from '../Components/SectionComponents/AboutAside/AboutAside';
import AboutSections from '../Components/SectionComponents/AboutSections/AboutSections';

import './About.css';

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
      <div className='about__aside-container'>
        <AboutAside />
      </div>
      <div className='about__about-container'>
        <AboutSections />
      </div>
    </div>
  );
}