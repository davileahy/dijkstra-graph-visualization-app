// src/components/AddNodeForm.js
import React, { useState } from 'react';
import { PlusCircle } from 'react-feather';

const AddNodeForm = ({ addNode,  }) => {
  const [nodeName, setNodeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNode({ name: nodeName, color: '#0A81FF' });
    setNodeName('');
  };

  return (
    <form className='flex justify-center items-center gap-[10px]' onSubmit={handleSubmit}>
      <input className='input input-bordered input-accent w-full max-w-xs ' type="text" value={nodeName} onChange={(e) => setNodeName(e.target.value)} placeholder="Nome do Nó"  />
        
      <button className="btn btn-accent" type="submit">Adicionar Nó <PlusCircle /> </button>
    </form>
  );
};

export default AddNodeForm;