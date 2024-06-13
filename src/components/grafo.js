import React, { useState } from 'react';
import { dijkstra } from '../algorithms/dijkstra';
import './grafo.css';

const Graph = () => {
  const [graph, setGraph] = useState({
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
  });
  const [startNode, setStartNode] = useState('A');
  const [endNode, setEndNode] = useState('D');
  const [result, setResult] = useState(null);

  const findPath = () => {
    const res = dijkstra(graph, startNode, endNode);
    setResult(res);
  };

  return (
    <div className="graph-container">
      <h2>Grafo de Visualização</h2>
      <div className="input-container">
        <label>
          Nó Inicial:
          <input value={startNode} onChange={(e) => setStartNode(e.target.value)} />
        </label>
        <label>
          Nó Final:
          <input value={endNode} onChange={(e) => setEndNode(e.target.value)} />
        </label>
        <button onClick={findPath}>Encontrar Caminho</button>
      </div>
      {result && (
        <div className="result">
          <h3>Resultado</h3>
          <p>Distância: {result.distance}</p>
          <p>Caminho: {result.path.join(' -> ')}</p>
        </div>
      )}
      <div className="graph-visualization">
        {/* Renderização do grafo e caminho */}
      </div>
    </div>
  );
};

export default Graph;
