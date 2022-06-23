
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// forEach suma de lo adjuntado en el carrito

let total = 0;
carrito.forEach(producto =>  total += producto.precio);
console.log(total);


// con reduce
                     //variable        // item       //variable donde se acumula + precio del producto , como comenzara la variable que acomula;
let resultado = carrito.reduce ((total , producto) => total+ producto.precio , 20);
console.log(resultado);
