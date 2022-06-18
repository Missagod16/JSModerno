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

 const { informacion} = producto;
 console.log(informacion);

 console.log(producto.informacion.fabricacion.pais);