import React from 'react';

export default function FlexSettings({ settings, updateSettings }) {
  return (
    <div className="flex-settings space-y-4">
      <div>
        <label>Flex Direction:</label>
        <select
          value={settings.flexDirection}
          onChange={e => updateSettings({ flexDirection: e.target.value })}
        >
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select>
      </div>

      <div>
        <label>Justify Content:</label>
        <select
          value={settings.justifyContent}
          onChange={e => updateSettings({ justifyContent: e.target.value })}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </select>
      </div>

      <div>
        <label>Align Items:</label>
        <select
          value={settings.alignItems}
          onChange={e => updateSettings({ alignItems: e.target.value })}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="stretch">stretch</option>
          <option value="baseline">baseline</option>
        </select>
      </div>

      <div>
        <label>Gap (px):</label>
        <input
          type="number"
          min="0"
          value={settings.gap}
          onChange={e => updateSettings({ gap: Number(e.target.value) })}
        />
      </div>

      <div>
        <label>Number of Columns:</label>
        <input
          type="number"
          min="1"
          value={settings.flexColumns}
          onChange={e =>
            updateSettings({ flexColumns: Number(e.target.value) })
          }
        />
      </div>

      <div>
        <label>Number of Rows:</label>
        <input
          type="number"
          min="1"
          value={settings.flexRows}
          onChange={e => updateSettings({ flexRows: Number(e.target.value) })}
        />
      </div>
    </div>
  );
}
