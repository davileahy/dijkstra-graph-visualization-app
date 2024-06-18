// src/components/DijkstraAlgorithm.js
import React, { useState } from 'react';
import { findPath } from '../algorithms/dijkstra';

const DijkstraAlgorithm = ({ nodes, edges }) => {
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');
  const [path, setPath] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const graph = {};
    edges.forEach(edge => {
      if (!graph[edge.from]) {
        graph[edge.from] = {};
      }
      graph[edge.from][edge.to] = edge.weight;
    });
    const shortestPath = findPath(graph, startNode, endNode);
    if (shortestPath.length === 0) {
      alert('No path found between the selected nodes.');
    } else {
      setPath(shortestPath);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={startNode} onChange={(e) => setStartNode(e.target.value)}>
          <option value="">Nó Inicial</option>
          {nodes.map((node, index) => (
            <option key={index} value={node}>{node}</option>
          ))}
        </select>
        <select value={endNode} onChange={(e) => setEndNode(e.target.value)}>
          <option value="">Nó Final</option>
          {nodes.map((node, index) => (
            <option key={index} value={node}>{node}</option>
          ))}
        </select>
        <button type="submit">Achar o Caminho Mais Curto</button>
      </form>
      {path && path.length > 0 && <div>Shortest Path: {path.join(' -> ')}</div>}
    </div>
  );
};

export default DijkstraAlgorithm;