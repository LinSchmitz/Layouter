import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewArea from './components/PreviewArea';
import CSSOutput from './components/CSSOutput';
import About from './components/About';
import LayoutModeToggle from './components/LayoutModeToggle';

export default function App() {
  const [layoutMode, setLayoutMode] = useState('flex');
  const [darkMode, setDarkMode] = useState(false);

  const [settings, setSettings] = useState({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    flexColumns: 3, // columns per row
    flexRows: 2, // number of rows (total boxes = columns * rows)

    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  function updateSettings(newSettings) {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header
          layoutMode={layoutMode}
          setLayoutMode={setLayoutMode}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Routes>
          {/* Main Layout Page */}
          <Route
            path="/"
            element={
              <>
                <div className="main-body">
                  {' '}
                  <PreviewArea layoutMode={layoutMode} settings={settings} />
                  <SettingsPanel
                    mode={layoutMode}
                    settings={settings}
                    updateSettings={updateSettings}
                  />
                  {/* <LayoutModeToggle mode={layoutMode} setMode={setLayoutMode} /> */}
                </div>
                <CSSOutput layoutMode={layoutMode} settings={settings} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
