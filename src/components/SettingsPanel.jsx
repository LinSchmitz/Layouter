import React from 'react';
import FlexSettings from './FlexSettings';
import GridSettings from './GridSettings';

export default function SettingsPanel({ mode, updateSettings, settings }) {
  return (
    <div className="settings-panel">
      {mode === 'flex' && (
        <FlexSettings settings={settings} updateSettings={updateSettings} />
      )}
      {mode === 'grid' && (
        <GridSettings settings={settings} updateSettings={updateSettings} />
      )}
      {!['flex', 'grid'].includes(mode) && <p>Please select a layout mode</p>}
    </div>
  );
}
