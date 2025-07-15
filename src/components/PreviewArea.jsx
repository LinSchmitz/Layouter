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

  return (
    <div className="preview-area" style={containerStyles}>
      <div className="box-item">1</div>
      <div className="box-item">2</div>
      <div className="box-item">3</div>
    </div>
  );
}
