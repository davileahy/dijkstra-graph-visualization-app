# Map Grafo Visualização

## Descrição

Este projeto é um aplicativo de visualização de grafos que permite ao usuário selecionar dois pontos em um mapa e encontrar o melhor caminho entre eles utilizando o algoritmo de Dijkstra. O aplicativo é desenvolvido usando React para a interface do usuário e Leaflet para manipulação de mapas. Ele demonstra conceitos de grafos e algoritmos de busca de caminho, sendo uma ótima ferramenta educacional.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Leaflet**: Biblioteca JavaScript para manipulação de mapas interativos.
- **D3.js**: Biblioteca JavaScript para manipulação de documentos baseados em dados (opcional para visualizações mais avançadas).
- **HTML/CSS**: Para estrutura e estilo da aplicação.

## Instalação

### Pré-requisitos

- Node.js e npm instalados.

### Passo a Passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/map-grafo-visualizacao.git
cd map-grafo-visualizacao
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `src/components/Map.js`: Componente React para renderizar o mapa e permitir a seleção de pontos.
- `src/algorithms/dijkstra.js`: Implementação do algoritmo de Dijkstra para encontrar o melhor caminho entre dois pontos.
- `src/styles/Map.css`: Estilos CSS para o componente de mapa.

## Utilização do Algoritmo de Dijkstra

### Algoritmo de Dijkstra

O algoritmo de Dijkstra é um algoritmo de busca de caminho que encontra o caminho mais curto entre dois nós em um grafo ponderado. Ele funciona da seguinte maneira:

1. Inicialize a distância para o nó inicial como 0 e para todos os outros nós como infinito.
2. Coloque todos os nós em uma fila de prioridade.
3. Enquanto a fila de prioridade não estiver vazia:
   - Extraia o nó com a menor distância da fila.
   - Para cada vizinho do nó extraído, calcule a distância através desse nó e, se for menor que a distância atual armazenada, atualize a distância e o predecessor.
4. Reconstrua o caminho mais curto a partir dos predecessores.

### Estrutura de Dados

- **Grafo**: Representado como um objeto onde as chaves são os nós e os valores são objetos com os vizinhos e os pesos das arestas.