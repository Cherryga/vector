// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
// src/nodes/textNode.js



// import BaseNode from './BaseNode';
// import { Position } from 'reactflow';

// export default function TextNode({ id, data }) {
//   return (
//     <BaseNode
//       id={id}
//       data={data}
//       title="Text"
//       fields={[
//         {
//           type: 'text',
//           label: 'Text',
//           stateKey: 'text',
//         },
//       ]}
//       handles={[
//         { id: `${id}-output`, type: 'source', position: Position.Right },
//       ]}
//     />
//   );
// }


import BaseNode from './BaseNode';
import { Position } from 'reactflow';
import { useState, useEffect } from 'react';

export default function TextNode({ id, data, setData }) {
  const [variables, setVariables] = useState([]);

  // Detect variables in text
  useEffect(() => {
    if (!data.text) {
      setVariables([]);
      return;
    }
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const vars = [];
    let match;
    while ((match = regex.exec(data.text)) !== null) {
      if (!vars.includes(match[1])) vars.push(match[1]);
    }
    setVariables(vars);
  }, [data.text]);

  // Prepare handles: variable handles on left + existing output handle on right
  const handles = [
    ...variables.map((v, index) => ({
      id: v,
      type: 'target',
      position: Position.Left,
      style: { top: 40 + index * 20, background: '#ff0077' },
    })),
    { id: `${id}-output`, type: 'source', position: Position.Right },
  ];

  // Pass fields with controlled input (if BaseNode supports onChange or setData)
  const fields = [
    {
      type: 'textarea', // Use textarea for resizing (if supported)
      label: 'Text',
      stateKey: 'text',
      value: data.text,
      onChange: (val) => {
        if (setData) setData({ ...data, text: val });
      },
      // Optionally, pass style or props to control auto resize here if BaseNode supports it
    },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      fields={fields}
      handles={handles}
      // optionally, add style or className for resizing node container if supported
    />
  );
}
