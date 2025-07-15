import React, { useState, useEffect } from 'react';

export default function GridSettings({ settings, updateSettings }) {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);

  useEffect(() => {
    updateSettings({
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    });
  }, [columns, rows, updateSettings]);

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
