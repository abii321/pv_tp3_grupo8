import React, { useState } from 'react';

const Tareas = ({ onAddTarea }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim() || !fecha) {
      alert("Por favor completá todos los campos.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre,
      descripcion,
      fecha,
    };

    onAddTarea(nuevaTarea);

    setNombre('');
    setDescripcion('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default Tareas;
