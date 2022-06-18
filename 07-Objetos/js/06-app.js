// Object literal
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
 }



 // Destructuring de nodos

 const {nombre , informacion:{ fabricacion : { pais }}} = producto;
 console.log(pais);