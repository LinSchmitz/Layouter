import React, { useState } from 'react';

export default function CSSOutput({ layoutMode, settings }) {
  const [copied, setCopied] = useState(false);

  const cssCode =
    layoutMode === 'flex'
      ? `
.preview-area {
  display: flex;
  flex-direction: ${settings.flexDirection};
  justify-content: ${settings.justifyContent};
  align-items: ${settings.alignItems};
  gap: ${settings.gap}px;
}`
      : `
.preview-area {
  display: grid;
  grid-template-columns: ${settings.gridTemplateColumns || 'none'};
  grid-template-rows: ${settings.gridTemplateRows || 'none'};
  gap: ${settings.gap}px;
}`;

  function handleCopy() {
    navigator.clipboard.writeText(cssCode.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="css-output-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>CSS Output</h3>
        <button onClick={handleCopy} style={{ fontSize: '0.9rem' }}>
          {copied ? '✔ Copied!' : '📋 Copy CSS'}
        </button>
      </div>

      <pre className="css-output">{cssCode}</pre>
    </div>
  );
}
