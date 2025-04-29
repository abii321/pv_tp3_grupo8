//import '/src/assets/css/mainProductos.css'
import { guardar,mostrar,crearnuevo, crearIVA } from './Producto-funciones.jsx'

function AppProductos() {
  const productos = [];

  return (
    <>
      <h1>PRODUCTOS</h1>
      <h3>Agregar un producto</h3>
      <label>Ingrese un producto: </label>
      <input type="text" id="name"></input>
      <label>Ingrese un precio: </label>
      <input type="number" id="precio"></input>
      <button onClick={() => guardar(productos)}>Enviar</button>
      <button onClick={() => mostrar(productos)}>Mostrar por consola</button>
      <button onClick={() => crearnuevo(productos)}>Crear con precio mayor a 20</button>
      <button onClick={() => crearIVA(productos)}>Mostrar con IVA</button>
    </>
  )
}

export default AppProductos
