// import React from 'react';

// export default function PreviewArea({ layoutMode, settings }) {
//   const getCountFromRepeat = value => {
//     const match = value?.match(/repeat\((\d+),/);
//     return match ? parseInt(match[1]) : 1;
//   };

//   const gridColumns = getCountFromRepeat(settings.gridTemplateColumns);
//   const gridRows = getCountFromRepeat(settings.gridTemplateRows);

//   // const totalBoxes =
//   //   layoutMode === 'grid'
//   //     ? gridColumns * gridRows
//   //     : settings.flexColumns * settings.flexRows;

//   const totalBoxes =
//     layoutMode === 'grid'
//       ? gridColumns * gridRows
//       : settings.flexDirection === 'column'
//       ? settings.flexRows * settings.flexColumns
//       : settings.flexColumns * settings.flexRows;

//   const flexStyles =
//     layoutMode === 'flex'
//       ? {
//           display: 'flex',
//           flexDirection: settings.flexDirection,
//           justifyContent: settings.justifyContent,
//           alignItems: settings.alignItems,
//           flexWrap: 'wrap',
//           gap: `${settings.gap}px`,
//           boxSizing: 'border-box',
//         }
//       : {};

//   const gridStyles =
//     layoutMode === 'grid'
//       ? {
//           display: 'grid',
//           gridTemplateColumns: settings.gridTemplateColumns,
//           gridTemplateRows: settings.gridTemplateRows,
//           gap: `${settings.gap}px`,
//         }
//       : {};

//   const gap = settings.gap || 0;
//   const boxWidthFlex = `calc((100% - ${(settings.flexColumns - 1) * gap}px) / ${
//     settings.flexColumns
//   })`;

//   return (
//     <div className="preview-area" style={{ ...flexStyles, ...gridStyles }}>
//       {Array.from({ length: totalBoxes }).map((_, i) => (
//         <div
//           key={i}
//           className="box-item"
//           style={layoutMode === 'flex' ? { width: boxWidthFlex } : undefined}
//         >
//           {i + 1}
//         </div>
//       ))}
//     </div>
//   );
// }

import React from 'react';

export default function PreviewArea({ layoutMode, settings }) {
  const getCountFromRepeat = value => {
    const match = value?.match(/repeat\((\d+),/);
    return match ? parseInt(match[1]) : 1;
  };

  const gridColumns = getCountFromRepeat(settings.gridTemplateColumns);
  const gridRows = getCountFromRepeat(settings.gridTemplateRows);

  const totalBoxes =
    layoutMode === 'grid'
      ? gridColumns * gridRows
      : settings.flexColumns * settings.flexRows;

  const gap = settings.gap || 0;

  const layoutStyles =
    layoutMode === 'flex'
      ? {
          display: 'flex',
          flexDirection: settings.flexDirection,
          justifyContent: settings.justifyContent,
          alignItems: settings.alignItems,
          flexWrap: 'wrap',
          gap: `${gap}px`,
        }
      : {
          display: 'grid',
          gridTemplateColumns: settings.gridTemplateColumns,
          gridTemplateRows: settings.gridTemplateRows,
          gap: `${gap}px`,
        };

  const getFlexItemStyle = () => {
    if (layoutMode !== 'flex') return;

    const style = {
      width:
        settings.flexDirection === 'row'
          ? `calc((100% - ${(settings.flexColumns - 1) * gap}px) / ${
              settings.flexColumns
            })`
          : '80px',
      height:
        settings.flexDirection === 'column'
          ? `calc((100% - ${(settings.flexRows - 1) * gap}px) / ${
              settings.flexRows
            })`
          : '80px',
    };

    return style;
  };

  return (
    <div className="preview-area" style={layoutStyles}>
      {Array.from({ length: totalBoxes }).map((_, i) => (
        <div key={i} className="box-item" style={getFlexItemStyle()}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}
