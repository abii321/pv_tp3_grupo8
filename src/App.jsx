import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/assets/css/indexProductos.css'
import AppProductos from './assets/components/Producto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProductos />
  </StrictMode>,
)
