import React, { useState } from 'react';
import AddEdgeForm from './AddEdgeForm';
import AddNodeForm from './AddNodeForm';
import GraphVisualization from './GraphVisualization';
import DijkstraAlgorithm from './DijkstraAlgorithm';
import { useNavigate } from 'react-router-dom';

import { XSquare, ArrowLeft } from 'react-feather'; // icones

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
    if (typeof hex !== 'string') return '#0A81FF';
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
    <div className="flex flex-col items-center justify-center shadow-[0px_0px_33px_0px_rgba(0,0,0,0.67)] p-7 m-[20px] rounded-xl md:p-16">
      <h1 className="text-3xl font-bold mb-8 md:text-4xl">Editor de Grafo</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl ">

        {/* Coluna esquerda */}
        <div className="flex flex-col items-start justify-start gap-[40px] ">

          
          <div className='flex flex-col items-start gap-[20px]'>
          {/* Formulário de adição de nó */}
          <div className="flex justify-center">
            <AddNodeForm addNode={addNode} setNodeColor={setNodeColor} />
          </div>

          <div className="flex justify-center">
            <button className="btn btn-outline btn-error" onClick={handleRemoveNode} disabled={!selectedNode}>Remover Nó <XSquare /> </button>
          </div>
          {/* Botão e lógica para remover nó */}

          </div>

          {/* Formulário de adição de aresta */}
          <div className="flex justify-center">
            <AddEdgeForm addEdge={addEdge} nodes={nodes.map(node => node.name)} />
          </div>

          {/* Algoritmo de Dijkstra */}
          <DijkstraAlgorithm nodes={nodes.map(node => node.name)} edges={edges} />

        </div>

        {/* Coluna direita */}
        <div className="bg-gray-100 rounded-xl">
          {/* Visualização do grafo */}
          <GraphVisualization
            nodes={nodes.map(node => ({ ...node, color: getNodeColor(node.name) }))}
            edges={edges}
            onDoubleClick={handleDoubleClick}
            onNodeClick={handleNodeClick}
          />

          {selectedNode && <div className="mt-4 text-lg font-semibold">Nó Selecionado: {selectedNode.name}</div>}
          
        </div>

      </div>

      {/* Botão para voltar à página inicial */}
      <button onClick={() => navigate('/')} className="btn btn-outline btn-accent mt-8 md:mt-12">Voltar para a página inicial <ArrowLeft /> </button>
    </div>
  );
};

export default GraphEditor;
