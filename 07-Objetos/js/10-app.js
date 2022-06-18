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


 const medidas ={
    peso : "1kg",
    medidas : "1.60"
 };

 const resultado = Object.assign(producto , medidas);

 // spread operator o Rest operator

 const resultado2 = {...producto , ...medidas};

 console.log(resultado);
 console.log(resultado2);