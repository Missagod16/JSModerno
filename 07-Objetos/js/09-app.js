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


 Object.seal(producto); // sirve para sellar no puedes agregar o eliminar solo modificar lo ya creado
 producto.disponible = false;
