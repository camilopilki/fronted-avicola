import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const MostrarJaulas = () => {
  const [jaulas, setJaulas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJaulas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jaula');
        setJaulas(response.data);
      } catch (error) {
        console.error('Error al obtener las jaulas:', error);
      }
    };

    fetchJaulas();
  }, []);

  return (
    <div className="table-container">
      <h2>Modulo de Jaulas</h2>
      <table>
        <thead>
          <tr>
            <th>Jaula</th>
            <th>Descripción de Jaula</th>
            <th>Cantidad de Aves</th>
            <th>Actualizar Jaula</th>
          </tr>
        </thead>
        <tbody>
          {jaulas.map((jaula) => (
            <tr key={jaula.Id_Jaula}>
              <td>{jaula.Id_Jaula}</td>
              <td>{jaula.Descripcion}</td>
              <td>{jaula.Cantidad_Aves}</td>
              <td>
                <button onClick={() => navigate(`/actualizar-jaula/${jaula.Id_Jaula}`)}>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={() => navigate('/')} className="button">Volver</button>
      </div>
    </div>
  );
};

export default MostrarJaulas;
