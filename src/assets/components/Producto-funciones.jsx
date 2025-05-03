//Ejercicio 1
export const guardar = (productos) => {
    let lista = document.getElementById("producto");
    lista.innerHTML = "";

    const name = document.getElementById("name");
    const cost = document.getElementById("precio");
    const n=name.value, p=parseFloat(cost.value);

    productos.push({descripcion:n, precio:p});

    for(let i=0; i<productos.length; i++){
        const item = document.createElement("li");
        item.textContent = `${productos[i].descripcion} $${productos[i].precio}`;
        lista.appendChild(item);
    }
    name.value="";
    cost.value="";
}

//Ejercicio 2
export const filtrar = (productos) => {
    let lista = document.getElementById("producto");
    lista.innerHTML = "";
  
    let filtrados = productos.filter(p => p.precio > 2000);
    filtrados.forEach(p => {
      const item = document.createElement("li");
      item.textContent = `${p.descripcion} $${p.precio}`;
      lista.appendChild(item);
    });
}
  
//Ejercicio 3
export const incluirIVA = (productos) => {
    let lista = document.getElementById("producto");
    lista.innerHTML = "";

    let nuevo2=productos.map( p => ({
        descripcion: p.descripcion,
        precio: p.precio+21*p.precio/100
    }));

    for(let i=0; i<nuevo2.length; i++){
        const item = document.createElement("li");
        item.textContent = `${nuevo2[i].descripcion} $${nuevo2[i].precio}`;
        lista.appendChild(item);
    }
}

//Ejercicio 4
/*export const ordenarProductosPorPrecio = (productos) => {
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
}*/