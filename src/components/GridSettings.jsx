import React, { useState, useEffect } from 'react';

export default function GridSettings({ settings, updateSettings }) {
  const [columns, setColumns] = useState(() => {
    const match = settings.gridTemplateColumns?.match(/\d+/);
    return match ? Number(match[0]) : 3;
  });

  const [rows, setRows] = useState(() => {
    const match = settings.gridTemplateRows?.match(/\d+/);
    return match ? Number(match[0]) : 2;
  });

  useEffect(() => {
    const newGridTemplateColumns = `repeat(${columns}, 1fr)`;
    const newGridTemplateRows = `repeat(${rows}, 1fr)`;

    // Only update if values changed to avoid infinite loops
    if (
      settings.gridTemplateColumns !== newGridTemplateColumns ||
      settings.gridTemplateRows !== newGridTemplateRows
    ) {
      updateSettings({
        gridTemplateColumns: newGridTemplateColumns,
        gridTemplateRows: newGridTemplateRows,
      });
    }
  }, [
    columns,
    rows,
    updateSettings,
    settings.gridTemplateColumns,
    settings.gridTemplateRows,
  ]);

  return (
    <div className="grid-settings space-y-4">
      <div>
        <label>Number of Columns:</label>
        <input
          type="number"
          min="1"
          value={columns}
          onChange={e => setColumns(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Number of Rows:</label>
        <input
          type="number"
          min="1"
          value={rows}
          onChange={e => setRows(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Gap (px):</label>
        <input
          type="number"
          value={settings.gap}
          onChange={e => updateSettings({ gap: Number(e.target.value) })}
        />
      </div>
    </div>
  );
}
