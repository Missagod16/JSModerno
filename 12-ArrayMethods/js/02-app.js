const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// meses.forEach ((mes , index) => {
//    if (mes === 'Abril'){
//    console.log(`encontrado en el indice ${index}`);
//    }
// })


// encontrar el indice
const indice = meses.findIndex( mes=>  mes === 'Abril');
console.log(indice);

if ( indice > 0){
    console.log('existe indice');
}

/////////////////////////////////////////////////////////////////

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Encontrar un indice de un arreglo de objetos

const indice2 = carrito.findIndex (producto => producto.precio === 100);
console.log(indice2);