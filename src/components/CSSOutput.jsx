import React, { useState } from 'react';
import './CssOutput.css';

export default function CssOutput({ layoutMode, settings }) {
  const [copied, setCopied] = useState(false);
  const [showCss, setShowCss] = useState(true);

  // const boxCount =
  //   layoutMode === 'grid'
  //     ? (parseInt(settings.gridTemplateColumns.match(/\d+/)?.[0]) || 1) *
  //       (parseInt(settings.gridTemplateRows.match(/\d+/)?.[0]) || 1)
  //     : (settings.flexColumns || 1) * (settings.flexRows || 1);

  const getFlexBoxCount = () => {
    const { flexColumns, flexRows, flexDirection } = settings;
    return flexDirection === 'column'
      ? flexRows * flexColumns
      : flexColumns * flexRows;
  };

  const boxCount =
    layoutMode === 'grid'
      ? (parseInt(settings.gridTemplateColumns.match(/\d+/)?.[0]) || 1) *
        (parseInt(settings.gridTemplateRows.match(/\d+/)?.[0]) || 1)
      : getFlexBoxCount();

  const htmlCode = `<div class="preview-area">
${Array.from({ length: boxCount })
  .map((_, i) => `  <div class="box-item">${i + 1}</div>`)
  .join('\n')}
</div>`.trim();

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
.box-item {
  height: 80px;
  background: #4f46e5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  user-select: none;
  font-weight: 700;
}
`
      : `
.preview-area {
  display: grid;
  grid-template-columns: ${settings.gridTemplateColumns || 'none'};
  grid-template-rows: ${settings.gridTemplateRows || 'none'};
  gap: ${settings.gap}px;
}
.box-item {
  background: #4f46e5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  user-select: none;
  font-weight: 700;
}
`;

  const handleCopy = () => {
    const textToCopy = showCss ? cssCode : htmlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="css-output">
      <div className="buttons-container">
        <h3>Output</h3>
        <div className="btn-group">
          <button onClick={handleCopy} className="copy-btn">
            {copied ? '✔ Copied!' : '📋 Copy'}
          </button>
          <button
            onClick={() => setShowCss(true)}
            className={showCss ? 'active' : ''}
            type="button"
          >
            CSS
          </button>
          <button
            onClick={() => setShowCss(false)}
            className={!showCss ? 'active' : ''}
            type="button"
          >
            HTML
          </button>
        </div>
      </div>
      <div>
        <pre>{showCss ? cssCode : htmlCode}</pre>
      </div>
    </div>
  );
}
