import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-white mb-6">Bem-vindo ao [Apocalypse, graph ordenator]</h1>
      <p className="text-xl text-gray-300 mb-8">Visualize caminhos ótimos com nosso visualizador de grafos baseado em Dijkstra.</p>
      <button
        onClick={() => navigate('/grapheditor')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        aria-label="Ir para o projeto"
      >
        Ir para o projeto
      </button>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">Avaliações:</h2>
        <p className="text-gray-300 mb-4"><strong>IGN:</strong> "Com uma interface que destila complexidade em simplicidade..."</p>
        <p className="text-gray-300 mb-4"><strong>Omelete:</strong> "Um aplicativo que transforma dados em arte visual..."</p>
        <p className="text-gray-300 mb-4"><strong>MIT Technology Review:</strong> "Inovador e intuitivo, este visualizador de grafos é um exemplo brilhante..."</p>
        <p className="text-gray-300"><strong>TV Gazeta:</strong> "Uma ferramenta que promete revolucionar o ensino de algoritmos..."</p>
      </div>
    </div>
  );
};

export default FirstPage;
