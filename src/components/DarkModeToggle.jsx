import React from 'react';

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-toggle-wrapper">
      <input
        type="checkbox"
        id="dark-toggle"
        className="dark-toggle-input"
        checked={darkMode}
        onChange={toggleDarkMode}
      />

      <label htmlFor="dark-toggle" className="dark-toggle-label"></label>

      <svg
        className="dark-toggle-icon moon"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
      </svg>

      <svg
        className="dark-toggle-icon sun"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
