// // ui.js
// // Displays the drag-and-drop UI
// // --------------------------------------------------

// import { useState, useRef, useCallback } from 'react';
// import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
// import { useStore } from './store';
// import { shallow } from 'zustand/shallow';
// import { InputNode } from './nodes/inputNode';
// import { LLMNode } from './nodes/llmNode';
// import { OutputNode } from './nodes/outputNode';
// import { TextNode } from './nodes/textNode';



// import 'reactflow/dist/style.css';

// const gridSize = 20;
// const proOptions = { hideAttribution: true };
// const nodeTypes = {
//   customInput: InputNode,
//   llm: LLMNode,
//   customOutput: OutputNode,
//   text: TextNode,
// };

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   getNodeID: state.getNodeID,
//   addNode: state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect: state.onConnect,
// });

// export const PipelineUI = () => {
//     const reactFlowWrapper = useRef(null);
//     const [reactFlowInstance, setReactFlowInstance] = useState(null);
//     const {
//       nodes,
//       edges,
//       getNodeID,
//       addNode,
//       onNodesChange,
//       onEdgesChange,
//       onConnect
//     } = useStore(selector, shallow);

//     const getInitNodeData = (nodeID, type) => {
//       let nodeData = { id: nodeID, nodeType: `${type}` };
//       return nodeData;
//     }

//     const onDrop = useCallback(
//         (event) => {
//           event.preventDefault();
    
//           const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//           if (event?.dataTransfer?.getData('application/reactflow')) {
//             const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//             const type = appData?.nodeType;
      
//             // check if the dropped element is valid
//             if (typeof type === 'undefined' || !type) {
//               return;
//             }
      
//             const position = reactFlowInstance.project({
//               x: event.clientX - reactFlowBounds.left,
//               y: event.clientY - reactFlowBounds.top,
//             });

//             const nodeID = getNodeID(type);
//             const newNode = {
//               id: nodeID,
//               type,
//               position,
//               data: getInitNodeData(nodeID, type),
//             };
      
//             addNode(newNode);
//           }
//         },
//         [reactFlowInstance]
//     );

//     const onDragOver = useCallback((event) => {
//         event.preventDefault();
//         event.dataTransfer.dropEffect = 'move';
//     }, []);

//     return (
//         <>
//         <div ref={reactFlowWrapper} style={{width: '100wv', height: '70vh'}}>
//             <ReactFlow
//                 nodes={nodes}
//                 edges={edges}
//                 onNodesChange={onNodesChange}
//                 onEdgesChange={onEdgesChange}
//                 onConnect={onConnect}
//                 onDrop={onDrop}
//                 onDragOver={onDragOver}
//                 onInit={setReactFlowInstance}
//                 nodeTypes={nodeTypes}
//                 proOptions={proOptions}
//                 snapGrid={[gridSize, gridSize]}
//                 connectionLineType='smoothstep'
//             >
//                 <Background color="#aaa" gap={gridSize} />
//                 <Controls />
//                 <MiniMap />
//             </ReactFlow>
//         </div>
//         </>
//     )
// }


// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

// import InputNode from './nodes/inputNode';
// import OutputNode from './nodes/outputNode';
// import TextNode from './nodes/textNode';
// import LLMNode from './nodes/llmNode';

// import NumberInputNode from './nodes/FileNumber';
// import FileUploadNode from './nodes/FileUploadNode';
// import ConfirmationNode from './nodes/ConfirmationNode';
// import SliderNode from './nodes/SlideNode';
// import CheckboxNode from './nodes/CountBox';

// const nodeTypes = {
//   inputNode: InputNode,
//   outputNode: OutputNode,
//   textNode: TextNode,
//   llmNode: LLMNode,

//   numberInputNode: NumberInputNode,
//   fileUploadNode: FileUploadNode,
//   confirmationNode: ConfirmationNode,
//   sliderNode: SliderNode,
//   checkboxNode: CheckboxNode,
// };

// const selector = (state) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   getNodeID: state.getNodeID,
//   addNode: state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect: state.onConnect,
// });

// export const PipelineUI = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);

//   const {
//     nodes,
//     edges,
//     getNodeID,
//     addNode,
//     onNodesChange,
//     onEdgesChange,
//     onConnect
//   } = useStore(selector, shallow);

//   const getInitNodeData = (nodeID, type) => {
//     let nodeData = { id: nodeID, nodeType: `${type}` };
//     return nodeData;
//   };

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();

//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//       if (event?.dataTransfer?.getData('application/reactflow')) {
//         const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//         const type = appData?.nodeType;

   
//         if (typeof type === 'undefined' || !type) {
//           return;
//         }

//         const position = reactFlowInstance.project({
//           x: event.clientX - reactFlowBounds.left,
//           y: event.clientY - reactFlowBounds.top,
//         });

//         const nodeID = getNodeID(type);
//         const newNode = {
//           id: nodeID,
//           type,
//           position,
//           data: getInitNodeData(nodeID, type),
//         };

//         addNode(newNode);
//       }
//     },
//     [reactFlowInstance]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   return (
//     <>
//       <div ref={reactFlowWrapper} style={{ width: '100vw', height: '70vh' }}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           onDrop={onDrop}
//           onDragOver={onDragOver}
//           onInit={setReactFlowInstance}
//           nodeTypes={nodeTypes}
//           proOptions={proOptions}
//           snapGrid={[gridSize, gridSize]}
//           connectionLineType="smoothstep"
//         >
//           <Background color="#aaa" gap={gridSize} />
//           <Controls />
//           <MiniMap />
//         </ReactFlow>
//       </div>
//     </>
//   );
// };

// src/ui.js

import React, { useRef, useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';

import { useStore } from './store'; 
import { shallow } from 'zustand/shallow'; 

import InputNode from './nodes/inputNode';
import OutputNode from './nodes/outputNode';
import TextNode from './nodes/textNode';
import LLMNode from './nodes/llmNode';

import NumberInputNode from './nodes/NumberInputNode';
import FileUploadNode from './nodes/FileUploadNode';
import ConfirmationNode from './nodes/ConfirmationNode';
import SliderNode from './nodes/SliderNode';
import CheckboxNode from './nodes/CheckboxNode';

import 'reactflow/dist/style.css'; // ✅ Make sure this is imported

const proOptions = { hideAttribution: true };
const gridSize = 15;

const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  textNode: TextNode,
  llmNode: LLMNode,
  NumberInputNode: NumberInputNode,
  FileUploadNode: FileUploadNode,
  ConfirmationNode: ConfirmationNode,
  SliderNode: SliderNode,
  CheckboxNode: CheckboxNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: type };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const rawData = event.dataTransfer.getData('application/reactflow');
      if (!rawData) return;

      const appData = JSON.parse(rawData);
      const type = appData?.nodeType;

      if (!type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);
      const newNode = {
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      };

      addNode(newNode);
    },
    [reactFlowInstance, getNodeID, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div ref={reactFlowWrapper} style={{ width: '100vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapToGrid={true}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
      >
        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
