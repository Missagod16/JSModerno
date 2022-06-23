// spread operator no modifica el arreglo original
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['agosto' , 'septiembre '];
const meses3 = ['octubre' , 'noviembre', 'diciembre'];

// . concat

const resultado = meses.concat(meses2 , meses3);
console.log(resultado);


// spread operator con arreglo de indices

const resultado2 = [...meses,...meses2,...meses3 , 'otro mes'];
console.log(resultado2);


//////////////////////////////////////////////////////////////////////////////////


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


const producto = {
    producto : 'Disco duro', precio : 300
};

const carrito2 = [...carrito , producto]; // este crea otro arreglo incluyendo nuestra edicion
console.log(carrito2);

// const carrito2 = carrito.concat(producto); // este modifica el arreglo original
// console.log(carrito2);