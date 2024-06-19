# Graph Dijkstra App

## Objetivo
Este aplicativo permite aos usuários criar um grafo e aplicar o algoritmo de Dijkstra para encontrar o menor caminho entre dois pontos no grafo. É uma ferramenta educativa e prática para visualizar grafos e entender como funciona o algoritmo de Dijkstra.

## Funcionalidades
- Adicionar nós ao grafo.
- Adicionar arestas (com pesos) entre os nós.
- Visualizar o grafo de maneira interativa.
- Aplicar o algoritmo de Dijkstra para encontrar o menor caminho entre dois nós selecionados.

## Bibliotecas Utilizadas
- **React**: Biblioteca principal para construção da interface do usuário.
- **react-force-graph**: Para visualização interativa do grafo.
- **dijkstrajs**: Para implementação do algoritmo de Dijkstra.

## Instalação
Siga os passos abaixo para instalar e executar o projeto em sua máquina local.

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passo a Passo
1. Clone o repositório para sua máquina local:
   \`\`\`bash
   git clone https://github.com/seu-usuario/graph-dijkstra-app.git
   cd graph-dijkstra-app
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`

3. Execute o aplicativo:
   \`\`\`bash
   npm start
   \`\`\`

   O aplicativo será aberto em \`http://localhost:3000\` no seu navegador padrão.

## Componentes Principais

### GraphEditor.js
Componente principal que integra todos os outros componentes. Permite adicionar nós, arestas e visualizar o grafo.

### AddNodeForm.js
Componente para adicionar nós ao grafo.

### AddEdgeForm.js
Componente para adicionar arestas (com pesos) entre os nós.

### GraphVisualization.js
Componente para visualização interativa do grafo usando \`react-force-graph\`.

### DijkstraAlgorithm.js
Componente para aplicar o algoritmo de Dijkstra e mostrar o menor caminho entre dois nós selecionados.

### dijkstra.js
Utilitário que usa a biblioteca \`dijkstrajs\` para calcular o menor caminho.

## Como Funciona
1. **Adicionar Nós**: Utilize o formulário para adicionar novos nós ao grafo.
2. **Adicionar Arestas**: Utilize o formulário para adicionar arestas com pesos entre os nós.
3. **Visualizar Grafo**: O grafo é visualizado de forma interativa, permitindo uma melhor compreensão das conexões.
4. **Algoritmo de Dijkstra**: Selecione os nós de origem e destino e aplique o algoritmo de Dijkstra para encontrar e exibir o menor caminho.

## Exemplo de Uso
1. Adicione nós "A", "B" e "C".
2. Adicione arestas: "A" para "B" com peso 1, "B" para "C" com peso 2, "A" para "C" com peso 4.
3. Selecione "A" como nó de origem e "C" como nó de destino.
4. Clique em "Find Shortest Path" para visualizar o menor caminho que será "A -> B -> C" com peso total de 3.

## Colaboradores

- [@palmeiraarthur](https://github.com/palmeiraarthur)
- [@davileahy](https://github.com/davileahy)
- [@21vito](https://github.com/21vito)
- [@moriarthyy](https://github.com/moriarthyy)
- [@hanyakawa](https://github.com/Hanyakawa)
- [@filipemalgueiro](https://github.com/filipemalgueiro)

![logo](https://github.com/davileahy/dijkstra-graph-visualization-app/assets/100385669/f3a215ea-2510-46d2-bf4b-ce575a10b923)
