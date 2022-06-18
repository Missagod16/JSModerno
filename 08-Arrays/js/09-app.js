const carrito = [
    {nombre : 'monitor 27 " ', precio : 500},
    {nombre : 'monitor 40 " ', precio : 1500},
    {nombre : 'teclado  ', precio : 200},
    {nombre : 'mouse ', precio : 100},
    {nombre : 'HDMI ', precio : 80},
    {nombre : 'USB ', precio : 20},

]; // plural

// for(let i = 0 ; i < carrito.length; i++){
//     console.log(`${carrito[i].nombre} - Precio : ${carrito[i].precio}`);
// }

carrito.forEach( function (producto){ // SINGULAR 
    console.log(`${producto.nombre} - Precio : ${producto.precio}`);
})