// tareas.jsx

import { useState } from 'react';
import { crearTarea, toggleTarea, eliminarTarea } from './Tareas-funciones.jsx';

export const AppTareas = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const nueva = crearTarea(text);
    setTasks(prev => [...prev, nueva]);
  };

  const handleToggle = (id) => {
    setTasks(prev => toggleTarea(prev, id));
  };

  const handleDelete = (id) => {
    setTasks(prev => eliminarTarea(prev, id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Nueva tarea" 
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
    <input 
      type="checkbox" 
      checked={task.completed} 
      onChange={() => onToggle(task.id)} 
    />
    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
    </span>
    <button onClick={() => onDelete(task.id)}>Eliminar</button>
  </li>
);
