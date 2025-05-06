// tareas-funciones.jsx

export const crearTarea = (texto, descripcion, fecha) => {
  return {
    id: Date.now(),
    text: texto,
    descripcion,
    fecha,
    completed: false
  };
};

export const toggleTarea = (tareas, id) => {
  return tareas.map(tarea =>
    tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
  );
};

export const eliminarTarea = (tareas, id) => {
  return tareas.filter(tarea => tarea.id !== id);
};
