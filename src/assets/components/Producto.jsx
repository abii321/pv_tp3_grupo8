import { guardar,filtrar, incluirIVA, ordenarPorPrecio, eliminarMasBarato } from './Producto-funciones.jsx'

function AppProductos() {
  const productos = [];

  return (
    <div id="listaProductos">
      <h1>Lista de Productos</h1>
      <input type="text" id="name" placeholder='Nuevo producto' required></input>
      <input type="number" id="precio" placeholder='Precio correspondiente' required></input>
      <button onClick={() => guardar(productos)}>Agregar</button>
      <button onClick={() => filtrar(productos)}>Filtrar</button>
      <button onClick={() => incluirIVA(productos)}>Incluir IVA</button>
      <button onClick={() => ordenarPorPrecio(productos)}>Ordenar</button>
      <button onClick={() => eliminarMasBarato(productos)}>Eliminar más barato</button>

      
      <ul id="producto">
      </ul>
    </div>
    
  )
}

export default AppProductos