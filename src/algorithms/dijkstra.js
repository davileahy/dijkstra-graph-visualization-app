// src/algorithms/dijkstra.js

export function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const prev = {};
    const pq = new PriorityQueue();
    
    // Inicialização
    distances[startNode] = 0;
    graph.forEach(node => {
      if (node !== startNode) {
        distances[node] = Infinity;
      }
      pq.enqueue(node, distances[node]);
    });
  
    while (!pq.isEmpty()) {
      const minNode = pq.dequeue();
      const currNode = minNode.element;
  
      if (currNode === endNode) break;
  
      for (const neighbor in graph[currNode]) {
        const alt = distances[currNode] + graph[currNode][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          prev[neighbor] = currNode;
          pq.enqueue(neighbor, distances[neighbor]);
        }
      }
    }
  
    let path = [];
    let curr = endNode;
    while (curr) {
      path.unshift(curr);
      curr = prev[curr];
    }
  
    return { distance: distances[endNode], path };
  }
  