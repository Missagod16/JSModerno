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

// LOS OBJETOS PUEDEN SER MODIFICABLES FACILMENTE CUIDADO CON EL CONST 
producto.disponible = false