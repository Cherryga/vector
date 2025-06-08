// src/nodes/numberInputNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function NumberInputNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Number Input"
      fields={[
        {
          type: 'text',
          label: 'Label',
          stateKey: 'label',
        },
        {
          type: 'select',
          label: 'Format',
          stateKey: 'format',
          options: ['Integer', 'Float', 'Currency'],
        },
      ]}
      handles={[
        { id: `${id}-value`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
