// src/components/GraphEditor.js
import React, { useState } from 'react';
import AddEdgeForm from './AddEdgeForm';
import AddNodeForm from './AddNodeForm';
import GraphVisualization from './GraphVisualization';
import DijkstraAlgorithm from './DijkstraAlgorithm';
import RemoveNodeForm from './RemoveNodeForm';

const GraphEditor = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeColor, setNodeColor] = useState('#0A81FF'); // Cor padrão: azul
  const [edgeStartNode, setEdgeStartNode] = useState(null);

  const addNode = (node) => {
    setNodes([...nodes, node]);
  };

  const addEdge = (edge) => {
    setEdges([...edges, edge]);
  };
  
  const removeNode = (nodeName) => {
    setNodes(nodes.filter(node => node.name !== nodeName));
    setEdges(edges.filter(edge => edge.from !== nodeName && edge.to !== nodeName));
  };

  const handleDoubleClick = (coords) => {
    const nodeName = `Node${nodes.length + 1}`;
    addNode({ name: nodeName, color: nodeColor });
  };

  const invertColor = (hex) => {
    const color = hex.substring(1); // remove #
    const rgb = parseInt(color, 16); // convert to integer
    const inverted = (0xffffff ^ rgb).toString(16).padStart(6, '0'); // invert color and convert to hex
    return `#${inverted}`;
  };

  const handleNodeClick = (nodeName) => {
    const selectedNodeObj = nodes.find(node => node.name === nodeName);

    if (!edgeStartNode) {
      setEdgeStartNode(selectedNodeObj);
    } else {
      if (selectedNode && selectedNode.name !== nodeName) {
        const weight = parseFloat(prompt(`Enter weight for the edge between ${edgeStartNode.name} and ${selectedNodeObj.name}`, '1'));
        if (!isNaN(weight)) {
          addEdge({ from: edgeStartNode.name, to: selectedNodeObj.name, weight });
          setSelectedNode(null);
        }
      }
      setEdgeStartNode(null);
    }
    setSelectedNode(selectedNodeObj);
  };

  const getNodeColor = (nodeName) => {
    if (selectedNode && selectedNode.name === nodeName) {
      return invertColor(selectedNode.color);
    }
    const node = nodes.find(node => node.name === nodeName);
    return node ? node.color : '#000000';
  };

  return (
    <div>
      <h1>Graph Editor</h1>
      <AddNodeForm addNode={addNode} setNodeColor={setNodeColor} />
      <RemoveNodeForm nodes={nodes} removeNode={removeNode} />
      <AddEdgeForm addEdge={addEdge} nodes={nodes.map(node => node.name)} />
      <DijkstraAlgorithm nodes={nodes.map(node => node.name)} edges={edges} />
      <GraphVisualization
        nodes={nodes.map(node => ({ ...node, color: getNodeColor(node.name) }))}
        edges={edges}
        onDoubleClick={handleDoubleClick}
        onNodeClick={handleNodeClick}
      />
      {selectedNode && <div>Selected Node: {selectedNode.name}</div>}
    </div>
  );
};

export default GraphEditor;