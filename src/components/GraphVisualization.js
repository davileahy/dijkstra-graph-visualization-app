// src/components/GraphVisualization.js
import React, { useRef, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const GraphVisualization = ({ nodes, edges }) => {
  const fgRef = useRef();

  const graphData = {
    nodes: nodes.map(node => ({ id: node })),
    links: edges.map(edge => ({
      source: edge.from,
      target: edge.to,
      value: edge.weight
    }))
  };

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force('link').distance(link => link.value * 10);
    }
  }, [edges]);

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={graphData}
      nodeLabel="id"
      linkDirectionalArrowLength={6}
      linkDirectionalArrowRelPos={1}
    />
  );
};

export default GraphVisualization;
