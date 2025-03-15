import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InsumoList from './components/InsumoList';
import InsumoForm from './components/InsumoForm';
import InsumoDetail from './components/InsumoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InsumoList />} />
        <Route path="/add" element={<InsumoForm />} />
        <Route path="/edit/:id" element={<InsumoForm />} />
        <Route path="/insumos/:id" element={<InsumoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;