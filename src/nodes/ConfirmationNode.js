// src/nodes/confirmationNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function ConfirmationNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Confirmation"
      fields={[
        {
          type: 'select',
          label: 'Confirm?',
          stateKey: 'confirmed',
          options: ['Yes', 'No'],
        },
      ]}
      handles={[
        { id: `${id}-target`, type: 'target', position: Position.Left },
        { id: `${id}-source`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
