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
  flex-wrap: wrap;
  gap: ${settings.gap}px;
}
.preview-area > div {
  width: calc((100% - ${(settings.flexColumns - 1) * settings.gap}px) / ${
          settings.flexColumns
        });
}
`
      : `
.preview-area {
  display: grid;
  grid-template-columns: ${settings.gridTemplateColumns || 'none'};
  grid-template-rows: ${settings.gridTemplateRows || 'none'};
  gap: ${settings.gap}px;
}
`;

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
          marginBottom: '8px',
        }}
      >
        <h3>CSS Output</h3>
        <button onClick={handleCopy} style={{ fontSize: '0.9rem' }}>
          {copied ? '✔ Copied!' : '📋 Copy CSS'}
        </button>
      </div>

      <pre className="css-output" style={{ whiteSpace: 'pre-wrap' }}>
        {cssCode}
      </pre>
    </div>
  );
}
