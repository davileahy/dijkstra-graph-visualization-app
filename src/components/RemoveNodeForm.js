import React, { useState } from 'react';

const RemoveNodeForm = ({ nodes, removeNode }) => {
  const [selectedNode, setSelectedNode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    removeNode(selectedNode);
    setSelectedNode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedNode}
        onChange={(e) => setSelectedNode(e.target.value)}
      >
        <option value="">Selecionar Nó</option>
        {nodes.map(node => (
          <option key={node.name} value={node.name}>{node.name}</option>
        ))}
      </select>
      <button type="submit"> Nó</button>
    </form>
  );
};

export default RemoveNodeForm;