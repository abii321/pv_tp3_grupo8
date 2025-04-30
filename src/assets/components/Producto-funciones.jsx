export const guardar = (productos) => {
    const n = document.getElementById("name").value;
    const p = parseFloat(document.getElementById("precio").value);
    productos.push({descripcion:n, precio:p});
}

//Ejercicio 1
export const mostrar = (productos) => {
    productos.forEach(producto => {
        console.log("descripcion: "+producto.descripcion);
        console.log("precio: "+producto.precio);
    });
}

//Ejercicio 2
export const crearnuevo = (productos) =>{
    let nuevo=crear(productos);
    mostrar(nuevo);
}
const crear = (productos) => {
    let nuevo=productos.filter(producto => producto.precio>20);
    return nuevo;
}

//Ejercicio 3
export const crearIVA = (productos) => {
    let nuevo2=crearconIVA(productos);
    mostrar(nuevo2);
}
const crearconIVA = (productos) => {
    let nuevo2=productos.map( producto => ({
        descripcion: producto.descripcion,
        precio: producto.precio+21*producto.precio/100
    }));
    return nuevo2;
}