// src/nodes/sliderNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export default function SliderNode({ id, data }) {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Slider"
      fields={[
        {
          type: 'text',
          label: 'Min',
          stateKey: 'min',
        },
        {
          type: 'text',
          label: 'Max',
          stateKey: 'max',
        },
      ]}
      handles={[
        { id: `${id}-source`, type: 'source', position: Position.Right },
      ]}
    />
  );
}
