// src/components/AddNodeForm.js
import React, { useState } from 'react';

const AddNodeForm = ({ addNode, setNodeColor }) => {
  const [nodeName, setNodeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNode({ name: nodeName, color: setNodeColor });
    setNodeName('');
  };

  const handleColorChange = (e) => {
    setNodeColor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        placeholder="Nome do Nó"
      />
      <input
        type="color"
        onChange={handleColorChange}
      />
      <button type="submit">Adicionar Nó</button>
    </form>
  );
};

export default AddNodeForm;