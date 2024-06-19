// src/components/AddEdgeForm.js
import React, { useState } from 'react';

const AddEdgeForm = ({ addEdge, nodes }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from !== to) {
      const edgeWeight = parseFloat(weight);
      if (!isNaN(edgeWeight)) {
        if (edgeWeight < 0) {
          alert('O peso da aresta não pode ser negativo.');
        } else {
          addEdge({ from, to, weight: edgeWeight });
          setFrom('');
          setTo('');
          setWeight('');
        }
      } else {
        alert('Por favor, insira um peso válido para a aresta.');
      }
    } else {
      alert('Não é possível conectar um nó a si mesmo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="">De</option>
        {nodes.map((node, index) => (
          <option key={index} value={node}>{node}</option>
        ))}
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="">Para</option>
        {nodes.map((node, index) => (
          <option key={index} value={node}>{node}</option>
        ))}
      </select>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Peso"
        required
      />
      <button type="submit">Adicionar Aresta</button>
    </form>
  );
};

export default AddEdgeForm;