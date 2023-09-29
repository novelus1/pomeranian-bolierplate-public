import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './App/Components/SectionComponents/NotFound/NotFound';
import { Layout } from './App/Layout/Layout';
import { Dashboard } from './App/Dashboard/Dashboard';
import { About } from './App/About/About';
import { Techstack } from './App/Techstack/Techstack';
import { Projects } from './App/Projects/Projects';
import { HitTheMoleGame } from './App/Components/ProjectComponents/HitTheMoleGame/HitTheMoleGame';
import { Form } from './App/Components/ProjectComponents/Form/Form';
import { MemoGame } from './App/Components/ProjectComponents/MemoGame/MemoGame'
import TodoList from './App/Components/ProjectComponents/ToDoListNew/ToDoList';
import CookieBanner from './App/Components/SectionComponents/Cookies/Cookies'
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="about/*" element={<About />} />
          <Route path="tech/*" element={<Techstack />} />
          <Route path="*" element={<NotFound />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="/projects/hit-the-mole" element={<HitTheMoleGame />} />
          <Route path="/projects/form" element={<Form />} />
          <Route path="/projects/memo-game" element={<MemoGame />} />
          <Route path="/projects/to-do-list" element={<TodoList />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}