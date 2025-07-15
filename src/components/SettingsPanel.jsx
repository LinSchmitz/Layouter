import React from 'react';
// import FlexSettings from './FlexSettings';
// import GridSettings from './GridSettings';

export default function SettingsPanel({ mode }) {
  return (
    <div className="settings-panel">
      {mode === 'flex'
        ? 'FlexSettings'
        : mode === 'grid'
        ? 'GridSettings'
        : 'Select a mode'}

      {/* {mode === 'flex' ? <FlexSettings /> : mode === 'grid' ? <GridSettings /> : <p>Please select a mode</p>} */}
    </div>
  );
}
