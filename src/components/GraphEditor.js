// src/components/GraphEditor.js
import React, { useState } from 'react';
import AddNodeForm from './AddNodeForm';
import AddEdgeForm from './AddEdgeForm';
import GraphVisualization from './GraphVisualization';
import DijkstraAlgorithm from './DijkstraAlgorithm';

const GraphEditor = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNode = (node) => {
    setNodes([...nodes, node]);
  };

  const addEdge = (edge) => {
    setEdges([...edges, edge]);
  };

  return (
    <div>
      <h1>Graph Editor</h1>
      <AddNodeForm addNode={addNode} />
      <AddEdgeForm addEdge={addEdge} nodes={nodes} />
      <GraphVisualization nodes={nodes} edges={edges} />
      <DijkstraAlgorithm nodes={nodes} edges={edges} />
    </div>
  );
};

export default GraphEditor;
