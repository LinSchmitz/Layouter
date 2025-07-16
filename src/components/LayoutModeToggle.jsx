import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LayoutModeToggle({ layoutMode, setLayoutMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = mode => {
    // If not on '/' path, navigate to it before changing layout mode
    if (location.pathname !== '/') {
      navigate('/');
    }
    setLayoutMode(mode);
  };

  return (
    <div className="layout-toggle">
      <button
        className={layoutMode === 'flex' ? 'active' : ''}
        onClick={() => handleClick('flex')}
      >
        Flex
      </button>
      <button
        className={layoutMode === 'grid' ? 'active' : ''}
        onClick={() => handleClick('grid')}
      >
        Grid
      </button>
    </div>
  );
}
