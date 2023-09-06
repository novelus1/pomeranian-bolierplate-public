import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/SectionComponents/NotFound/NotFound';
import { Layout } from './App/Layout/Layout';
import { Dashboard } from './App/Dashboard/Dashboard';
import { CV } from './App/CV/CV';
import { About } from './App/About/About';
import { Techstack } from './App/Techstack/Techstack';
import { Projects } from './App/Projects/Projects';
import CookieBanner from './App/Components/SectionComponents/Cookies/Cookies';
import HitTheMoleGame from './App/Components/ProjectComponents/MoleGame/HitTheMoleGame';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="about/*" element={<About />} />
          <Route path="tech/*" element={<Techstack />} />
          <Route path="hit-the-mole" element={<HitTheMoleGame />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}