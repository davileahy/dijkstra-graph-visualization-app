import dijkstra from 'dijkstrajs';

export const findPath = (graph, startNode, endNode) => {
  return dijkstra.find_path(graph, startNode, endNode);
};
