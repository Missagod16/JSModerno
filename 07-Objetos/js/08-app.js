"use strict";

const producto = {
    nombre : "monitor",
    precio : 320,
    disponible : true,
    informacion : {
       peso: '1 kg',
       medida : {
          cm : "30 cm"
       },
       fabricacion:{
         pais: "china"
       }
    }
 };

 Object.freeze(producto); // permite congelar la variable y evitar modificaciones o eliminar
 Object.isFrozen(producto);


// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

