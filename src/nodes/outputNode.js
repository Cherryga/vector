// outputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
//   const [outputType, setOutputType] = useState(data.outputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setOutputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-value`}
//       />
//       <div>
//         <span>Output</span>
//       </div>
//       <div>
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
//           <select value={outputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">Image</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// }


// src/nodes/outputNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function OutputNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      fields={[
        {
          type: 'text',
          label: 'Name',
          stateKey: 'outputName',
        },
        {
          type: 'select',
          label: 'Type',
          stateKey: 'outputType',
          options: ['Text', 'Image'],
        },
      ]}
      handles={[
        { id: `${id}-value`, type: 'target', position: Position.Left },
      ]}
    />
  );
}
