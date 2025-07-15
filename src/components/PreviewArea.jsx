import React from 'react';

export default function PreviewArea({ layoutMode, settings }) {
  const containerStyles =
    layoutMode === 'flex'
      ? {
          display: 'flex',
          flexDirection: settings.flexDirection,
          justifyContent: settings.justifyContent,
          alignItems: settings.alignItems,
          gap: `${settings.gap}px`,
        }
      : {
          display: 'grid',
          gridTemplateColumns: settings.gridTemplateColumns,
          gridTemplateRows: settings.gridTemplateRows,
          gap: `${settings.gap}px`,
        };

  // 🔍 Extract number from repeat(x, 1fr)
  const getCountFromRepeat = value => {
    const match = value?.match(/repeat\((\d+),/);
    return match ? parseInt(match[1]) : 1;
  };

  const columns = getCountFromRepeat(settings.gridTemplateColumns);
  const rows = getCountFromRepeat(settings.gridTemplateRows);
  const totalBoxes = layoutMode === 'grid' ? columns * rows : 6;

  return (
    <div className="preview-area" style={containerStyles}>
      {Array.from({ length: totalBoxes }).map((_, i) => (
        <div key={i} className="box-item">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
