import React, { useState } from 'react';

import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewArea from './components/PreviewArea';
import CSSOutput from './components/CSSOutput';
import Footer from './components/Footer';

export default function App() {
  // Selected layout mode: 'flex' or 'grid'
  const [layoutMode, setLayoutMode] = useState('flex');

  // General settings (you can extend this later)
  const [settings, setSettings] = useState({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    // For Grid, you can add settings here like columns, rows, etc.
  });

  // Update settings from SettingsPanel
  function updateSettings(newSettings) {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }

  return (
    <div className="app-container">
      {/* Header containing logo and Flex/Grid toggle */}
      <Header layoutMode={layoutMode} setLayoutMode={setLayoutMode} />

      <div className="main-body">
        {/* Settings panel (changes depending on Flex or Grid mode) */}
        <SettingsPanel
          layoutMode={layoutMode}
          settings={settings}
          updateSettings={updateSettings}
        />

        {/* Visual layout preview */}
        <PreviewArea layoutMode={layoutMode} settings={settings} />
      </div>

      {/* Generated CSS code display */}
      <CSSOutput layoutMode={layoutMode} settings={settings} />

      {/* Footer with buttons */}
      <Footer />
    </div>
  );
}

// export default function App() {
//   return (
//     <div>
//       <h2>Layouter</h2>
//       <Header />
//       <p>Sidebar </p>
//       <p>Preview Area</p>
//       <p>Code box</p>
//     </div>
//   );
// }
