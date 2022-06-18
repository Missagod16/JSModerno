const meses = ['enero', 'febrero', 'marzo'];

// meses[0] = 'nuevo mes';
// meses[10] = 'ultimos meses';

// metodos 

// agregar al final del arreglo
meses.push('abril');

//agregar desde el principio


console.log(meses);


const carrito = [];

//Definir producto

const producto = {
    nombre : 'monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre : 'celular' ,
    precio : 800
}

carrito.push(producto , producto2); // agrega al final

const producto3 = {
    nombre: 'teclado',
    precio : 30
}


carrito.unshift(producto3); // unshift agrega al comienzo

console.log(carrito);