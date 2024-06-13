// src/components/AddNodeForm.js
import React, { useState } from 'react';

const AddNodeForm = ({ addNode }) => {
  const [nodeName, setNodeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNode(nodeName);
    setNodeName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nodeName}
        onChange={(e) => setNodeName(e.target.value)}
        placeholder="Node Name"
      />
      <button type="submit">Add Node</button>
    </form>
  );
};

export default AddNodeForm;
