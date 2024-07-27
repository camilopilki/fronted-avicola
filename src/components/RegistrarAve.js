import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const RegistrarAve = () => {
  const [ave, setAve] = useState({
    Id_Jaula: '',
    Fecha_Registro: '',
    Raza: '',
    Edad: '',
  });

  const [today, setToday] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];
    setToday(todayDate);
    setAve((prevAve) => ({
      ...prevAve,
      Fecha_Registro: todayDate,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAve((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/aves/register', ave);
      console.log('Ave registrada:', ave);
      navigate('/mostrar-aves');
    } catch (error) {
      console.error('Error al registrar ave:', error);
    }
  };

  return (
    <div className="container">
      <h2>Modulo de Aves</h2>
      <div className="form-container">
        <div className="form-group">
          <label>Jaula Correspondiente</label>
          <input
            type="text"
            name="Id_Jaula"
            value={ave.Id_Jaula}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Fecha de Registro</label>
          <input
            type="date"
            name="Fecha_Registro"
            value={ave.Fecha_Registro}
            min={today}
            max={today}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Raza</label>
          <input
            type="text"
            name="Raza"
            value={ave.Raza}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="number"
            name="Edad"
            value={ave.Edad}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleSubmit} className="button">Registrar Ave</button>
        <button onClick={() => navigate('/mostrar-aves')} className="button">Mostrar Aves</button>
      </div>
    </div>
  );
};

export default RegistrarAve;
