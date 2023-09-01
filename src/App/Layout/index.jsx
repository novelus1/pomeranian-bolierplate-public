import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { ErrorBoundary } from './ErrorBoundary';
import { AppFooter } from './AppFooter';
import './styles/layout.css';

export const Layout = () => {
  return (
    <ErrorBoundary>
      <div className="layout-container">
        <AppHeader />
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
