import React from 'react';
import LayoutModeToggle from './components/LayoutModeToggle';

export function Header() {
  return (
    <nav>
      <p>Logo</p>
      <LayoutModeToggle />
    </nav>
  );
}
