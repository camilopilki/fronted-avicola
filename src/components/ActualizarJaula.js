import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const ActualizarJaula = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jaula, setJaula] = useState({
    Id_Jaula: '',
    Id_Estanque: 1,
    Descripcion: ''
  });

  useEffect(() => {
    const fetchJaula = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/jaula/${id}`);
        setJaula(response.data);
      } catch (error) {
        console.error('Error al obtener la jaula:', error);
      }
    };

    fetchJaula();
  }, [id]);

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
      await axios.put(`http://localhost:3000/api/jaula/${id}`, jaula);
      navigate('/mostrar-jaulas');
    } catch (error) {
      console.error('Error al actualizar la jaula:', error);
    }
  };

  return (
    <div className="container">
      <h2>Actualizar Jaula</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="Id_Jaula">N° Jaula</label>
          <input
            type="text"
            id="Id_Jaula"
            name="Id_Jaula"
            value={jaula.Id_Jaula}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="input-group">
          <label htmlFor="Id_Estanque">Id Estanque</label>
          <input
            type="text"
            id="Id_Estanque"
            name="Id_Estanque"
            value={jaula.Id_Estanque}
            readOnly
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
          />
        </div>
        <div className="button-group">
          <button type="submit" className="button">Actualizar Jaula</button>
          <button type="button" className="button" onClick={() => navigate('/mostrar-jaulas')}>Volver</button>
        </div>
      </form>
    </div>
  );
};

export default ActualizarJaula;
