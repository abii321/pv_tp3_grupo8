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

//Ejercicio 4
export const ordenarProductosPorPrecio = (productos) => {
    productos.sort((a, b) => a.precio - b.precio);
    mostrar(productos);
}

//Ejercicio 5
export const agregarProducto = (productos) => {
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

    productos.push(nuevoProducto);
    console.log("Producto agregado exitosamente:");
    console.log(`Producto: ${nuevoProducto.descripcion} - Precio: $${nuevoProducto.precio}`);

    mostrar(productos);
}


//Ejercicio 6
export const eliminarProductoMasBarato = (productos) => {
    let precios = productos.map(producto => producto.precio);
    let precioMinimo = Math.min(...precios);
    let indiceMinimo = productos.findIndex(producto => producto.precio === precioMinimo);

    if (indiceMinimo !== -1) {
        productos.splice(indiceMinimo, 1);
    }

    mostrar(productos);
}