const carrito = [
    {nombre : 'monitor 27 " ', precio : 500},
    {nombre : 'monitor 40 " ', precio : 1500},
    {nombre : 'teclado  ', precio : 200},
    {nombre : 'mouse ', precio : 100},
    {nombre : 'HDMI ', precio : 80},
    {nombre : 'USB ', precio : 20},

]; // plural



carrito.forEach( function (producto){ // SINGULAR y foreach no crea un nuevo arreglo
    return(`${producto.nombre} - Precio : ${producto.precio}`);
});

carrito.map( function (producto){ // crea un arreglo nuevo
    return(`${producto.nombre} - Precio : ${producto.precio}`);
});