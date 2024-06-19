import React, { useState } from 'react';
import AddEdgeForm from './AddEdgeForm';
import AddNodeForm from './AddNodeForm';
import GraphVisualization from './GraphVisualization';
import DijkstraAlgorithm from './DijkstraAlgorithm';
import { useNavigate } from 'react-router-dom';

const GraphEditor = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeColor, setNodeColor] = useState('#0A81FF');
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
    if (typeof hex !== 'string') return '#0A81FF'; // Ensure hex is a string
    const color = hex.substring(1);
    const rgb = parseInt(color, 16);
    const inverted = (0xffffff ^ rgb).toString(16).padStart(6, '0');
    return `#${inverted}`;
  };

  const navigate = useNavigate();


  const handleNodeClick = (nodeName) => {
    const selectedNodeObj = nodes.find(node => node.name === nodeName);
    if (!selectedNodeObj) {
      console.error('Nó selecionado não encontrado');
      return; // Adiciona uma verificação para evitar erros
    }
    if (!edgeStartNode) {
      setEdgeStartNode(selectedNodeObj);
    } else {
      if (selectedNode && selectedNode.name !== nodeName) {
        const weight = parseFloat(prompt(`Insira  ${edgeStartNode.name} and ${selectedNodeObj.name}`, '1'));
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
    return node ? node.color : '#0A81FF';
  };

  const handleRemoveNode = () => {
    if (selectedNode) {
      removeNode(selectedNode.name);
      setSelectedNode(null); // Deseleciona o nó após removê-lo
    }
  };
  
  return (
    <div className="bg-black p-11 h-[963] max-h-[963] w-1 ">
      <h1 className="text-2xl font-bold mb-4">Graph Editor</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="space-y-4">

          <div className="flex justify-center">
            <AddNodeForm addNode={addNode} setNodeColor={setNodeColor} />
          </div>

          <div className="flex justify-center">
            {/* <RemoveNodeForm nodes={nodes} removeNode={removeNode} /> */}
          </div>

          <div className="flex justify-center">
            <button className='btn btn-error' onClick={handleRemoveNode} disabled={!selectedNode}>Remover Nó</button>
          </div>
          <AddEdgeForm addEdge={addEdge} nodes={nodes.map(node => node.name)} />
          <DijkstraAlgorithm nodes={nodes.map(node => node.name)} edges={edges} />
        </div>
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <GraphVisualization
            nodes={nodes.map(node => ({ ...node, color: getNodeColor(node.name) }))}
            edges={edges}
            onDoubleClick={handleDoubleClick}
            onNodeClick={handleNodeClick}
          />
          {selectedNode && <div className="mt-4 text-lg font-semibold">Nó Selecionado: {selectedNode.name}</div>}
        </div>
        <button onClick={() => navigate('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">
         Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default GraphEditor;
