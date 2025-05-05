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

export const ordenarPorPrecio = (productos) => {

    productos.sort((a, b) => a.precio - b.precio);

    let lista = document.getElementById("producto");
    lista.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${productos[i].descripcion} $${productos[i].precio}`;
        lista.appendChild(item);
    }
}


//Ejercicio 6
export const eliminarMasBarato = (productos) => {
    let lista = document.getElementById("producto");
    let productoMasBarato = productos.reduce((min, p) => (p.precio < min.precio ? p : min));

    let nuevosProductos = productos.filter(p => p !== productoMasBarato);

    lista.innerHTML = "";

    for (let i = 0; i < nuevosProductos.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${nuevosProductos[i].descripcion} $${nuevosProductos[i].precio}`;
        lista.appendChild(item);
    }

    productos.length = 0;
    nuevosProductos.forEach(p => productos.push(p));
}

