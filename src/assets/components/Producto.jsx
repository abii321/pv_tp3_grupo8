import { guardar,filtrar, incluirIVA /*,ordenarProductosPorPrecio, agregarProducto, eliminarProductoMasBarato*/ } from './Producto-funciones.jsx'

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
      
      {/**<button onClick={() => ordenarProductosPorPrecio(productos)}>Ordenar productos por precio</button>
      <button onClick={() => agregarProducto(productos)}>Agregar producto</button>
      <button onClick={() => eliminarProductoMasBarato(productos)}>Eliminar producto más barato</button>**/}

      <ul id="producto">
      </ul>
    </div>
    
  )
}

export default AppProductos