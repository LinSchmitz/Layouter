import React from 'react';
import LayoutModeToggle from './LayoutModeToggle';
import { Link } from 'react-router-dom';

export default function Header({ layoutMode, setLayoutMode }) {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        Layouter
      </Link>
      <LayoutModeToggle layoutMode={layoutMode} setLayoutMode={setLayoutMode} />
      <Link to="/about">About</Link>
    </nav>
  );
}
