// src/nodes/checkboxNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function CheckboxNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Checkbox"
      fields={[
        {
          type: 'select',
          label: 'Checked',
          stateKey: 'checked',
          options: ['True', 'False'],
        },
      ]}
      handles={[
        { id: `${id}-source`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
