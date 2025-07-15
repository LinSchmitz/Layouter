import React from 'react';
import { Link } from 'react-router-dom';
import LayoutModeToggle from './LayoutModeToggle';
import DarkModeToggle from './DarkModeToggle';

export default function Header({
  layoutMode,
  setLayoutMode,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        Layouter
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <LayoutModeToggle
          layoutMode={layoutMode}
          setLayoutMode={setLayoutMode}
        />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
}
