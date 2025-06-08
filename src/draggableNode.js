// draggableNode.js

// export const DraggableNode = ({ type, label }) => {
//     const onDragStart = (event, nodeType) => {
//       const appData = { nodeType }
//       event.target.style.cursor = 'grabbing';
//       event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
//       event.dataTransfer.effectAllowed = 'move';
//     };
  
//     return (
//       <div
//         className={type}
//         onDragStart={(event) => onDragStart(event, type)}
//         onDragEnd={(event) => (event.target.style.cursor = 'grab')}
//         style={{ 
//           cursor: 'grab', 
//           minWidth: '80px', 
//           height: '60px',
//           display: 'flex', 
//           alignItems: 'center', 
//           borderRadius: '8px',
//           backgroundColor: '#1C2536',
//           justifyContent: 'center', 
//           flexDirection: 'column'
//         }} 
//         draggable
//       >
//           <span style={{ color: '#fff' }}>{label}</span>
//       </div>
//     );
//   };
  

import React from 'react';

export const DraggableNode = ({ type, label, color = '#1C2536' }) => {
  const onDragStart = (event, nodeType) => {
    // Create a custom drag preview element
    const dragPreview = document.createElement('div');
    dragPreview.style.width = '80px';
    dragPreview.style.height = '60px';
    dragPreview.style.background = color;
    dragPreview.style.borderRadius = '8px';
    dragPreview.style.display = 'flex';
    dragPreview.style.alignItems = 'center';
    dragPreview.style.justifyContent = 'center';
    dragPreview.style.color = 'white';
    dragPreview.style.fontWeight = '600';
    dragPreview.style.fontSize = '14px';
    dragPreview.style.userSelect = 'none';
    dragPreview.innerHTML = label;

    // Position off-screen so user doesn't see it
    dragPreview.style.position = 'absolute';
    dragPreview.style.left = '-9999px';

    document.body.appendChild(dragPreview);

    // Set data with the plain node type string (what React Flow expects)
 event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));

    event.dataTransfer.effectAllowed = 'move';

    // Set the custom drag preview image (centered)
    event.dataTransfer.setDragImage(dragPreview, 40, 30);

    // Cleanup the drag preview after a tick
    setTimeout(() => {
      document.body.removeChild(dragPreview);
    }, 0);

    // Change cursor while dragging
    event.target.style.cursor = 'grabbing';
  };

  return (
    <div
      className={`draggable-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: color,
        justifyContent: 'center',
        flexDirection: 'column',
        userSelect: 'none',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}
      draggable
    >
      <span style={{ pointerEvents: 'none' }}>{label}</span>
    </div>
  );
};
