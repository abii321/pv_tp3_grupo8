// tareas.jsx
import { useState } from 'react';
import { crearTarea, toggleTarea, eliminarTarea } from './Tareas-funciones.jsx';

export const AppTareas = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (nombre, descripcion, fecha) => {
    const nueva = crearTarea(nombre, descripcion, fecha);
    setTasks(prev => [...prev, nueva]);
  };

  const handleToggle = (id) => {
    setTasks(prev => toggleTarea(prev, id));
  };

  const handleDelete = (id) => {
    setTasks(prev => eliminarTarea(prev, id));
  };

  return (
    <div id="listaTareas">
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

const TaskInput = ({ onAdd }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim() || !descripcion.trim() || !fecha) return;

    onAdd(nombre, descripcion, fecha);
    setNombre('');
    setDescripcion('');
    setFecha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        placeholder="Nombre de la tarea" 
        required
      />
      <input 
        type="text" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
        placeholder="Descripción"
        required
      />
      <input 
        type="date" 
        value={fecha} 
        onChange={(e) => setFecha(e.target.value)} 
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <ul>
    {tasks.map(task => (
      <TaskItem 
        key={task.id} 
        task={task} 
        onToggle={onToggle} 
        onDelete={onDelete} 
      />
    ))}
  </ul>
);

const TaskItem = ({ task, onToggle, onDelete }) => (
  <li>
    <button onClick={() => onToggle(task.id)}>
  {task.completed ? 'Desmarcar' : 'Realizada'}
</button>

    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <strong>{task.text}</strong> - {task.descripcion} - {task.fecha}
    </span>
    <button onClick={() => onDelete(task.id)}>Eliminar</button>
  </li>
);

