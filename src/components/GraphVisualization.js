// src/components/GraphVisualization.js
import React, { useRef, useEffect } from 'react';
import { ForceGraph2D } from 'react-force-graph';

const GraphVisualization = ({ nodes, edges, onDoubleClick, onNodeClick, selectedNode }) => {
  const fgRef = useRef();

  const graphData = {
    nodes: nodes.map(node => ({ id: node.name, color: node.color })),
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

  const handleDoubleClick = (event) => {
    const { x, y } = fgRef.current.screen2GraphCoords(event.clientX, event.clientY);
    onDoubleClick({ x, y });
  };

  const handleNodeClick = (node) => {
    onNodeClick(node.id);
  };

  return (
    <div
      style={{ width: '100%', height: '500px' }}
      onDoubleClick={handleDoubleClick}
    >
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="id"
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = node.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, node.x, node.y);

          if (node.id === selectedNode?.name) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI, false);
            ctx.strokeStyle = 'yellow';
            ctx.stroke();
          }

          ctx.beginPath();
          ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        linkDirectionalArrowLength={6}
        linkDirectionalArrowRelPos={1}
        linkLabel={link => `Weight: ${link.value}`}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
};

export default GraphVisualization;