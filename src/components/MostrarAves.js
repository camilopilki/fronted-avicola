import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const MostrarAves = () => {
  const [avesAgrupadas, setAvesAgrupadas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAves = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/aves');
        const aves = response.data;
        const agrupadas = agruparAvesPorRaza(aves);
        setAvesAgrupadas(agrupadas);
      } catch (error) {
        console.error('Error al obtener las aves:', error);
      }
    };

    fetchAves();
  }, []);

  const agruparAvesPorRaza = (aves) => {
    const mapaAves = aves.reduce((acc, ave) => {
      const razaNormalizada = ave.Raza.toLowerCase().trim();
      if (acc[razaNormalizada]) {
        acc[razaNormalizada] += 1;
      } else {
        acc[razaNormalizada] = 1;
      }
      return acc;
    }, {});

    return Object.keys(mapaAves).map((raza) => ({
      Raza: raza.charAt(0).toUpperCase() + raza.slice(1),
      Cantidad: mapaAves[raza],
    }));
  };

  return (
    <div className="table-container">
      <h2>Modulo de Aves</h2>
      <table>
        <thead>
          <tr>
            <th>Raza Ave</th>
            <th>Cantidad de Aves</th>
          </tr>
        </thead>
        <tbody>
          {avesAgrupadas.map((ave) => (
            <tr key={ave.Raza}>
              <td>{ave.Raza}</td>
              <td>{ave.Cantidad}</td>
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

export default MostrarAves;
