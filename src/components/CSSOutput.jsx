import React from 'react';

export default function CSSOutput({ layoutMode, settings }) {
  const output =
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

  return <pre className="css-output">{output}</pre>;
}
