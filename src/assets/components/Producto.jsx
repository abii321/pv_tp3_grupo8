import { guardar, mostrar, crearnuevo, crearIVA } from './Producto-funciones.jsx';
import { useState } from 'react';
import Tareas from ' ./Tareas.jsx';

function AppProductos() {
  const productos = [];
  const [tareas, setTareas] = useState([]);

  const handleAgregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <>
      <h1>PRODUCTOS</h1>
      <h3>Agregar un producto</h3>
      <label>Ingrese un producto: </label>
      <input type="text" id="name" />
      <label>Ingrese un precio: </label>
      <input type="number" id="precio" />
      <button onClick={() => guardar(productos)}>Enviar</button>
      <button onClick={() => mostrar(productos)}>Mostrar por consola</button>
      <button onClick={() => crearnuevo(productos)}>Crear con precio mayor a 20</button>
      <button onClick={() => crearIVA(productos)}>Mostrar con IVA</button>

      <hr />
      <h2>TAREAS</h2>
      <Tareas onAddTarea={handleAgregarTarea} />
      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <strong>{t.nombre}</strong>: {t.descripcion} - {t.fecha}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AppProductos;
