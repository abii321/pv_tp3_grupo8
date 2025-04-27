//Ejercicio 1
export const mostrar = (a) => {
    a.forEach(producto => {
        console.log("descripcion: "+producto.descripcion);
        console.log("precio: "+producto.precio);
    });
}

//Ejercicio 2
export const crearnuevo = (a) =>{
    let nuevo=a.filter(producto => producto.precio>20);
    return nuevo;
}

//Ejercicio 3
export const crearconIVA = (a) => {
    let nuevo2=a.map( producto => ({
        descripcion: producto.descripcion,
        precio: producto.precio+21*producto.precio/100
    }));
    return nuevo2;
}