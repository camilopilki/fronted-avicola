import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const RegistrarJaula = () => {
  const [jaula, setJaula] = useState({
    Id_Jaula: '',
    Descripcion: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJaula({
      ...jaula,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/jaula/register', jaula);
      navigate('/mostrar-jaulas');
    } catch (error) {
      console.error('Error al registrar jaula:', error);
    }
  };

  return (
    <div className="container">
      <h2>Modulo de Jaulas</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="Id_Jaula">N° Jaula</label>
          <input
            type="text"
            id="Id_Jaula"
            name="Id_Jaula"
            value={jaula.Id_Jaula}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="Descripcion">Descripción</label>
          <input
            type="text"
            id="Descripcion"
            name="Descripcion"
            value={jaula.Descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="button">Registrar Jaula</button>
          <button type="button" className="button" onClick={() => navigate('/mostrar-jaulas')}>Mostrar Jaulas</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrarJaula;
