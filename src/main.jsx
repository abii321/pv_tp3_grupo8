import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProductos } from './assets/components/Producto.jsx';
import { AppTareas } from './assets/components/tareas.jsx';
import '/src/assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProductos />
    <AppTareas />
  </StrictMode>
);
