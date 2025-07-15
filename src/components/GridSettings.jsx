import React from 'react';

export default function GridSettings({ settings, updateSettings }) {
  return (
    <div className="grid-settings space-y-4">
      <div>
        <label>Grid Template Columns:</label>
        <input
          type="text"
          value={settings.gridTemplateColumns || ''}
          placeholder="e.g., 1fr 2fr"
          onChange={e =>
            updateSettings({ gridTemplateColumns: e.target.value })
          }
        />
      </div>

      <div>
        <label>Grid Template Rows:</label>
        <input
          type="text"
          value={settings.gridTemplateRows || ''}
          placeholder="e.g., auto auto"
          onChange={e => updateSettings({ gridTemplateRows: e.target.value })}
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
