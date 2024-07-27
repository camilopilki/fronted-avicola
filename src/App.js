// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RegistrarJaula from './components/RegistrarJaula';
import RegistrarAve from './components/RegistrarAve';
import MostrarJaulas from './components/MostrarJaulas';
import MostrarAves from './components/MostrarAves';
import ActualizarJaula from './components/ActualizarJaula';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Avícola Santa Luisa</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/registrar-ave" className="nav-link">Registro de Ave</Link>
            <Link to="/registrar-jaula" className="nav-link">Registro de Jaula</Link>
            <Link to="/mostrar-jaulas" className="nav-link">Mostrar Jaulas</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrar-jaula" element={<RegistrarJaula />} />
            <Route path="/registrar-ave" element={<RegistrarAve />} />
            <Route path="/mostrar-jaulas" element={<MostrarJaulas />} />
            <Route path="/mostrar-aves" element={<MostrarAves />} />
            <Route path="/actualizar-jaula/:id" element={<ActualizarJaula />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
