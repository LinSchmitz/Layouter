import React from 'react';

export default function PreviewArea({ layoutMode, settings }) {
  const getCountFromRepeat = value => {
    const match = value?.match(/repeat\((\d+),/);
    return match ? parseInt(match[1]) : 1;
  };

  const gridColumns = getCountFromRepeat(settings.gridTemplateColumns);
  const gridRows = getCountFromRepeat(settings.gridTemplateRows);

  // const totalBoxes =
  //   layoutMode === 'grid'
  //     ? gridColumns * gridRows
  //     : settings.flexColumns * settings.flexRows;

  const totalBoxes =
    layoutMode === 'grid'
      ? gridColumns * gridRows
      : settings.flexDirection === 'column'
      ? settings.flexRows * settings.flexColumns
      : settings.flexColumns * settings.flexRows;

  const flexStyles =
    layoutMode === 'flex'
      ? {
          display: 'flex',
          flexDirection: settings.flexDirection,
          justifyContent: settings.justifyContent,
          alignItems: settings.alignItems,
          flexWrap: 'wrap',
          gap: `${settings.gap}px`,
          boxSizing: 'border-box',
        }
      : {};

  const gridStyles =
    layoutMode === 'grid'
      ? {
          display: 'grid',
          gridTemplateColumns: settings.gridTemplateColumns,
          gridTemplateRows: settings.gridTemplateRows,
          gap: `${settings.gap}px`,
        }
      : {};

  const gap = settings.gap || 0;
  const boxWidthFlex = `calc((100% - ${(settings.flexColumns - 1) * gap}px) / ${
    settings.flexColumns
  })`;

  return (
    <div className="preview-area" style={{ ...flexStyles, ...gridStyles }}>
      {Array.from({ length: totalBoxes }).map((_, i) => (
        <div
          key={i}
          className="box-item"
          style={layoutMode === 'flex' ? { width: boxWidthFlex } : undefined}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
