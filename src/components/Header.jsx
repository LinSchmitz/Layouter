import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutModeToggle from './LayoutModeToggle';
import DarkModeToggle from './DarkModeToggle';

export default function Header({
  show,
  setShow,
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

        <Link
          to="/about"
          className="nav-link tooltip"
          onClick={() => setShow(show => !show)}
        >
          {show ? '-' : '?'}

          <span className="tooltip-text">About this app</span>
        </Link>

        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
}
