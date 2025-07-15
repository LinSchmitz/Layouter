import React from 'react';

export default function LayoutModeToggle({ layoutMode, setLayoutMode }) {
  return (
    <div className="layout-toggle">
      <button
        className={layoutMode === 'flex' ? 'active' : ''}
        onClick={() => setLayoutMode('flex')}
      >
        Flex
      </button>
      <button
        className={layoutMode === 'grid' ? 'active' : ''}
        onClick={() => setLayoutMode('grid')}
      >
        Grid
      </button>
    </div>
  );
}
