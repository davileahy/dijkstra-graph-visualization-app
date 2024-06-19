import React, { useState } from 'react';
import AddEdgeForm from './AddEdgeForm';
import AddNodeForm from './AddNodeForm';
import GraphVisualization from './GraphVisualization';
import DijkstraAlgorithm from './DijkstraAlgorithm';
import { useNavigate } from 'react-router-dom';

import { XSquare, ArrowLeft } from 'react-feather'; // ícones

const defaultGraphs = {
  example1: {
    nodes: [
      { name: 'A', color: '#0A81FF' },
      { name: 'B', color: '#0A81FF' },
      { name: 'C', color: '#0A81FF' }
    ],
    edges: [
      { from: 'A', to: 'B', weight: 1 },
      { from: 'B', to: 'C', weight: 2 },
      { from: 'A', to: 'C', weight: 3 }
    ]
  },
  example2: {
    nodes: [
      { name: 'Node1', color: '#FF5733' },
      { name: 'Node2', color: '#FF5733' },
      { name: 'Node3', color: '#FF5733' },
      { name: 'Node4', color: '#FF5733' }
    ],
    edges: [
      { from: 'Node1', to: 'Node2', weight: 4 },
      { from: 'Node2', to: 'Node3', weight: 1 },
      { from: 'Node3', to: 'Node4', weight: 2 },
      { from: 'Node1', to: 'Node4', weight: 5 }
    ]
  },
  tree: {
    nodes: [
      { name: 'Root', color: '#0A81FF' },
      { name: 'Child1', color: '#FF5733' },
      { name: 'Child2', color: '#FF5733' },
      { name: 'Grandchild1', color: '#FFC300' },
      { name: 'Grandchild2', color: '#FFC300' },
      { name: 'Grandchild3', color: '#FFC300' }
    ],
    edges: [
      { from: 'Root', to: 'Child1', weight: 1 },
      { from: 'Root', to: 'Child2', weight: 1 },
      { from: 'Child1', to: 'Grandchild1', weight: 1 },
      { from: 'Child1', to: 'Grandchild2', weight: 1 },
      { from: 'Child2', to: 'Grandchild3', weight: 1 }
    ]
  },
  completeGraph: {
    nodes: [
      { name: 'V1', color: '#0A81FF' },
      { name: 'V2', color: '#FF5733' },
      { name: 'V3', color: '#FFC300' },
      { name: 'V4', color: '#DAF7A6' },
      { name: 'V5', color: '#900C3F' }
    ],
    edges: [
      { from: 'V1', to: 'V2', weight: 2 },
      { from: 'V1', to: 'V3', weight: 4 },
      { from: 'V1', to: 'V4', weight: 6 },
      { from: 'V1', to: 'V5', weight: 8 },
      { from: 'V2', to: 'V3', weight: 1 },
      { from: 'V2', to: 'V4', weight: 3 },
      { from: 'V2', to: 'V5', weight: 5 },
      { from: 'V3', to: 'V4', weight: 7 },
      { from: 'V3', to: 'V5', weight: 9 },
      { from: 'V4', to: 'V5', weight: 2 }
    ]
  },
  cyclicGraph: {
    nodes: [
      { name: 'A', color: '#0A81FF' },
      { name: 'B', color: '#FF5733' },
      { name: 'C', color: '#FFC300' },
      { name: 'D', color: '#DAF7A6' },
      { name: 'E', color: '#900C3F' }
    ],
    edges: [
      { from: 'A', to: 'B', weight: 3 },
      { from: 'B', to: 'C', weight: 4 },
      { from: 'C', to: 'D', weight: 5 },
      { from: 'D', to: 'E', weight: 6 },
      { from: 'E', to: 'A', weight: 7 },
      { from: 'A', to: 'C', weight: 2 },
      { from: 'B', to: 'D', weight: 3 },
      { from: 'C', to: 'E', weight: 4 }
    ]
  }
};

const GraphEditor = () => {
  const [nodes, setNodes] = useState(defaultGraphs.example1.nodes);
  const [edges, setEdges] = useState(defaultGraphs.example1.edges);
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
        const weight = parseFloat(prompt(`Insira o peso da aresta entre ${edgeStartNode.name} e ${selectedNodeObj.name}`, '1'));
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

  const handleGraphChange = (event) => {
    const selectedGraph = defaultGraphs[event.target.value];
    setNodes(selectedGraph.nodes);
    setEdges(selectedGraph.edges);
    setSelectedNode(null);
    setEdgeStartNode(null);
  };

  return (
    <div className="flex flex-col items-center justify-center shadow-[0px_0px_33px_0px_rgba(0,0,0,0.67)] p-7 m-[20px] rounded-xl md:p-16">
      <h1 className="text-3xl font-bold mb-8 md:text-4xl">Editor de Grafo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Coluna esquerda */}
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <div className="flex flex-col items-start gap-[20px]">
            {/* Seletor de grafos padrão */}
            <div className="flex justify-center">
              <select className="form-select" onChange={handleGraphChange}>
                <option value="example1">Grafo Exemplo 1</option>
                <option value="example2">Grafo Exemplo 2</option>
                <option value="tree">Grafo em Árvore</option>
                <option value="completeGraph">Grafo Completo</option>
                <option value="cyclicGraph">Grafo com Ciclos</option>
              </select>
            </div>

            {/* Formulário de adição de nó */}
            <div className="flex justify-center">
              <AddNodeForm addNode={addNode} setNodeColor={setNodeColor} />
            </div>

            {/* Botão e lógica para remover nó */}
            <div className="flex justify-center">
              <button className="btn btn-outline btn-error" onClick={handleRemoveNode} disabled={!selectedNode}>
                Remover Nó <XSquare />
              </button>
            </div>
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
      <button onClick={() => navigate('/')} className="btn btn-outline btn-accent mt-8 md:mt-12">
        Voltar para a página inicial <ArrowLeft />
      </button>
    </div>
  );
};

export default GraphEditor;
