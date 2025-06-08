// toolbar.js

// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {

//     return (
//         <div style={{ padding: '10px' }}>
//             <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
//                 <DraggableNode type='customInput' label='Input' />
//                 <DraggableNode type='llm' label='LLM' />
//                 <DraggableNode type='customOutput' label='Output' />
//                 <DraggableNode type='text' label='Text' />
//             </div>
//         </div>
//     );
// };



import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const nodeTypes = [
    { type: 'customInput', label: 'Input', color: '#FF6B6B' },
    { type: 'llm', label: 'LLM', color: '#4ECDC4' },
    { type: 'customOutput', label: 'Output', color: '#FFE66D' },
    { type: 'text', label: 'Text', color: '#A78BFA' },
    { type: 'number', label: 'Number', color: '#F7A072' },
    { type: 'file', label: 'File', color: '#83C5BE' },
    { type: 'confirmation', label: 'Confirmation', color: '#F87171' }, // red-400
    { type: 'slider', label: 'Slider', color: '#60A5FA' }, // blue-400
    { type: 'checkbox', label: 'Checkbox', color: '#34D399' } // green-400
  ];

  return (
    <div style={{ 
      padding: '16px',
      background: '#1C2536',
      borderRadius: '8px',
      height: '100%',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ 
        color: 'white', 
        margin: '0 0 16px 0',
        fontSize: '14px',
        fontWeight: '600'
      }}>
        NODE PALETTE
      </h3>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '12px',
        overflowY: 'auto',
        maxHeight: 'calc(100% - 40px)'
      }}>
        {nodeTypes.map((node) => (
          <DraggableNode 
            key={node.type}
            type={node.type}
            label={node.label}
            color={node.color}
          />
        ))}
      </div>
    </div>
  );
};
