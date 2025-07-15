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
  const [show, setShow] = useState(false);

  const [settings, setSettings] = useState({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
          show={show}
          setShow={setShow}
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
                  <SettingsPanel
                    mode={layoutMode}
                    updateSettings={updateSettings}
                  />

                  <LayoutModeToggle mode={layoutMode} setMode={setLayoutMode} />

                  <PreviewArea layoutMode={layoutMode} settings={settings} />
                </div>
                <CSSOutput layoutMode={layoutMode} settings={settings} />
              </>
            }
          />

          {show && <Route path="/about" element={<About />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
