import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import GraphEditor from './components/GraphEditor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/grapheditor" element={<GraphEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
