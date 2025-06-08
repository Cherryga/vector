// src/nodes/fileUploadNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function FileUploadNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="File Upload"
      fields={[
        {
          type: 'text',
          label: 'File Label',
          stateKey: 'fileLabel',
        },
      ]}
      handles={[
        { id: `${id}-file`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
