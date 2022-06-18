const producto = {
    nombre : 'monitor 20 pulgadas',
    precio : 300 ,
    disponible:true,
}

// Destructuring en objetos
const {nombre , precio , disponible}  = producto;

// Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [ primero, segundo, ...tercero] = numeros;

console.log(tercero);