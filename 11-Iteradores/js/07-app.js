// forEach

const pendientes = ['tarea','comer', 'proyecto' , 'Estudiar Java']; // forEach es el ideal para un arreglo

// pendientes.forEach( ( pendiente , index) =>{
//    console.log( `${index} : ${pendiente}`);
// });


const carrito = [
    { nombres :'monitor 27 pulgadas', precio :200 },
    { nombres :'Television', precio :100 },
    { nombres :'tablet', precio :2000 },
    { nombres :'audifonos', precio :20 },
    { nombres :'teclado', precio :50 },
    { nombres :'celular', precio :900 },

];


for ( let pendiente of pendientes ){
   console.log(pendiente);
}


for (let producto of carrito){
    console.log(producto.nombres);
}

// for of itera con arreglos [ ] de mejor manera