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

const producto3 = {
    nombre: 'teclado',
    precio : 30
}


let resultado ;

resultado = [...carrito, producto , producto2 , producto3];
console.log(resultado);