// for ( let i = 0 ; i <=10 ; i++){
//   if(i === 5){
//     console.log('CINCO');
//     continue;
//   }
//   console.log(`numeros ${i}`);
// }


// break detiene el loop al llegar al objetivo

const carrito = [
    { nombres :'monitor 27 pulgadas', precio :200 },
    { nombres :'Television', precio :100 , descuento : true },
    { nombres :'tablet', precio :2000 },
    { nombres :'audifonos', precio :20 },
    { nombres :'teclado', precio :50 },
    { nombres :'celular', precio :900 },

];

for (let i = 0 ; i <= carrito.length ; i++){
    if (carrito[i].descuento) {
        console.log(`si lo encontre es ${carrito[i].nombres} el articulo en descuento`);
        continue;
        
    }
    console.log(carrito[i].nombres);
    
}