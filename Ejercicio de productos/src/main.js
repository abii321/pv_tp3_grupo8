import { mostrar,crearnuevo,crearconIVA } from './funciones.js';

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