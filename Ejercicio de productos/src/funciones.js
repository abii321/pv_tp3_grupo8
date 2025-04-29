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

//Ejercicio 4
export const ordenarProductosPorPrecio = (arr) => {
    arr.sort((a, b) => a.precio - b.precio);
}

//Ejercicio 5
// Agregar un nuevo producto con validación
export const agregarProducto = (arr) => {
    let descripcion = prompt("Ingrese la descripción del nuevo producto:");
    if (!descripcion || descripcion.trim() === "") {
        console.log("Descripción inválida. Producto no agregado.");
        return;
    }

    let precioStr = prompt("Ingrese el precio del producto:");
    let precio = parseFloat(precioStr);

    if (isNaN(precio) || precio <= 0) {
        console.log("Precio inválido. Producto no agregado.");
        return;
    }

    let nuevoProducto = {
        descripcion: descripcion.trim(),
        precio: parseFloat(precio.toFixed(2))
    };

    arr.push(nuevoProducto);
}


//Ejercicio 6
export const eliminarProductoMasBarato = (arr) => {
    let precios = arr.map(producto => producto.precio);
    let precioMinimo = Math.min(...precios);
    let indiceMinimo = arr.findIndex(producto => producto.precio === precioMinimo);

    if (indiceMinimo !== -1) {
        arr.splice(indiceMinimo, 1);
    }
}