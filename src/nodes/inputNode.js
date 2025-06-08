// inputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';
// import BaseNode from './BaseNode';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

 
//   return (
//     <BaseNode
//       id={id}
//       label="Input"
//       outputHandles={[`${id}-value`]}
//       width={250}
//       height={130}
//     >
//       <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={currName}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//     </BaseNode>
//   );
// };

// src/nodes/inputNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function InputNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      fields={[
        {
          type: 'text',
          label: 'Name',
          stateKey: 'inputName',
        },
        {
          type: 'select',
          label: 'Type',
          stateKey: 'inputType',
          options: ['Text', 'File'],
        },
      ]}
      handles={[
        { id: `${id}-value`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
