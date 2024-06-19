import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BarChart2, Info } from 'react-feather';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center text-white mt-[30px]">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">[visualizador de grafos + dijkstra]</h1>
      <BarChart2 />
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
        Crie grafos, visualize-os, e aplique o algoritmo de Dijkstra para encontrar o melhor caminho entre dois nós utilizando a nossa ferramenta.
      </p>
      <button
        onClick={() => navigate('/grapheditor')}
        className="btn btn-outline btn-accent text-lg md:text-xl flex items-center space-x-2"
        aria-label="Ir para o editor de grafos"
      >
        Ir para o editor de grafos
        <ArrowRight size={20} />
      </button>
      <div className="bg-gray-800 p-6 mt-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4"> <Info className='text-center'/>Como funciona:</h2>

        <ul className="text-gray-300 leading-relaxed">
          <li className="mb-4"><strong>Adicionar Nós:</strong> Utilize o formulário para adicionar novos nós ao grafo. Ou clique duas vezes na tela!</li>
          <li className="mb-4"><strong>Adicionar Arestas:</strong> Utilize o formulário para adicionar arestas com pesos entre os nós. Ou clique em dois nós e insira o peso</li>
          <li className="mb-4"><strong>Visualizar Grafo:</strong> O grafo é visualizado de forma interativa, permitindo uma melhor compreensão das conexões.</li>
          <li><strong>Algoritmo de Dijkstra:</strong> Selecione os nós de origem e destino e aplique o algoritmo de Dijkstra para encontrar e exibir o menor caminho.</li>
        </ul>

      </div>
    </div>
  );
};

export default FirstPage;
