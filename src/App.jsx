import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Layout } from './App/Layout/Layout';
import { Dashboard } from './App/Dashboard/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV';
import { Blog } from './App/Blog/Blog';
import { About } from './App/About/About';
import { Techstack } from './App/Techstack/Techstack';
import CookieBanner from './App/Components/Cookies/Cookies';

export function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="about/*" element={<About />} />
          <Route path="tech/*" element={<Techstack />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}
