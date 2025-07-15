import React from 'react';
import { Link } from 'react-router-dom';
import LayoutModeToggle from './LayoutModeToggle';

export default function Header() {
  return (
    <nav className="nav-bar">
      {/* Logo that redirects to "/" */}
      <Link to="/" className="logo">
        Layouter
      </Link>

      <LayoutModeToggle />

      {/* Link to About page */}
      <Link to="/about" className="nav-link">
        About
      </Link>
    </nav>
  );
}
