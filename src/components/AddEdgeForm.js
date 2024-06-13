// src/components/AddEdgeForm.js
import React, { useState } from 'react';

const AddEdgeForm = ({ addEdge, nodes }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEdge({ from, to, weight: parseFloat(weight) });
    setFrom('');
    setTo('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="">From</option>
        {nodes.map((node, index) => (
          <option key={index} value={node}>{node}</option>
        ))}
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="">To</option>
        {nodes.map((node, index) => (
          <option key={index} value={node}>{node}</option>
        ))}
      </select>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight"
      />
      <button type="submit">Add Edge</button>
    </form>
  );
};

export default AddEdgeForm;
