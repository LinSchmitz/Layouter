import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LayoutModeToggle from './LayoutModeToggle';
import DarkModeToggle from './DarkModeToggle';

export default function Header({
  layoutMode,
  setLayoutMode,
  darkMode,
  toggleDarkMode,
}) {
  const location = useLocation();

  const isAboutPage = location.pathname === '/about';

  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        🔲Layouter
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LayoutModeToggle
          layoutMode={layoutMode}
          setLayoutMode={setLayoutMode}
        />

        <Link to={isAboutPage ? '/' : '/about'} className="nav-link tooltip">
          <span className={`rotate-question ${isAboutPage ? 'rotated' : ''}`}>
            ?
          </span>
          <span className="tooltip-text">
            {isAboutPage ? 'Back to Layout' : 'About this app'}
          </span>
        </Link>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}
