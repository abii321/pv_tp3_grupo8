import { mostrar,crearnuevo,crearconIVA,ordenarProductosPorPrecio,agregarProducto,eliminarProductoMasBarato } from './funciones.js';

const productos = [
    { descripcion: "Auriculares", precio: 80000 },
    { descripcion: "Mouse", precio: 20000 },
    { descripcion: "Teclado", precio: 60000 }, 
    { descripcion: "Monitor", precio: 400000 },
    { descripcion: "Funda", precio: 300000 },
]

//Ejercicio1
console.log("Ejercicio1");
mostrar(productos);

//Ejercicio2
console.log("Ejercicio2")
let nuevo=crearnuevo(productos);
mostrar(nuevo);

//Ejercicio3
console.log("Ejercicio3")
let nuevo2=crearconIVA(productos);
mostrar(nuevo2);

//Ejercicio4
console.log("Ejercicio4");
ordenarProductosPorPrecio(productos);
mostrar(productos);

//Ejercicio 5
console.log("Ejercicio5");
agregarProducto(productos);
mostrar(productos);

//Ejercicio 6
console.log("Ejercicio6");
eliminarProductoMasBarato(productos);
mostrar(productos);