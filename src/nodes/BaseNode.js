// import React from "react";
// import { Handle, Position } from "reactflow";

// const BaseNode = ({
//   id,
//   label,
//   inputHandles = [],
//   outputHandles = [],
//   children,
//   height = 100,
//   width = 200,
// }) => {
//   return (
//     <div style={{ width, height, border: "1px solid black", padding: 10 }}>
//       <div>
//         <strong>{label}</strong>
//       </div>

//       {/* Custom component content */}
//       <div>{children}</div>

//       {/* Input Handles */}
//       {inputHandles.map((handleId, index) => (
//         <Handle
//           key={`in-${handleId}`}
//           type="target"
//           position={Position.Left}
//           id={handleId}
//           style={{ top: 40 + index * 20 }}
//         />
//       ))}

//       {/* Output Handles */}
//       {outputHandles.map((handleId, index) => (
//         <Handle
//           key={`out-${handleId}`}
//           type="source"
//           position={Position.Right}
//           id={handleId}
//           style={{ top: 40 + index * 20 }}
//         />
//       ))}
//     </div>
//   );
// };

// export default BaseNode;


// src/nodes/BaseNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

const inputTypes = ['Text', 'File', 'Image', 'Number'];

export default function BaseNode({
  id,
  data,
  title = 'Node',
  handles = [],
  fields = [],
  style = {},
}) {
  // fields = [{ type: 'text'|'select', label, stateKey, options? }]
  // handles = [{ id, type: 'source'|'target', position: Position, style? }]

  // Initialize state for each field based on data or default
  const initialFieldStates = {};
  fields.forEach((f) => {
    initialFieldStates[f.stateKey] = data?.[f.stateKey] ?? (f.type === 'select' ? f.options[0] : '');
  });

  const [fieldStates, setFieldStates] = useState(initialFieldStates);

  const onFieldChange = (key) => (e) => {
    const value = e.target.value;
    setFieldStates((prev) => ({ ...prev, [key]: value }));
    if (data?.onChange) {
      data.onChange(key, value); // optional callback to inform parent store
    }
  };

  return (
    <div style={{ width: 220, minHeight: 80, border: '1px solid black', padding: 8, borderRadius: 6, background: '#fff', ...style }}>
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{title}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {fields.map(({ type, label, stateKey, options }) => (
          <label key={stateKey} style={{ fontSize: 12 }}>
            {label}:
            {type === 'text' && (
              <input
                type="text"
                value={fieldStates[stateKey]}
                onChange={onFieldChange(stateKey)}
                style={{ width: '100%', marginTop: 2, padding: 4, fontSize: 12 }}
              />
            )}
            {type === 'select' && (
              <select
                value={fieldStates[stateKey]}
                onChange={onFieldChange(stateKey)}
                style={{ width: '100%', marginTop: 2, padding: 4, fontSize: 12 }}
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </label>
        ))}
      </div>

      {/* Render Handles */}
      {handles.map(({ id: hid, type, position, style: hStyle }) => (
        <Handle key={hid} type={type} position={position} id={hid} style={hStyle} />
      ))}
    </div>
  );
}
