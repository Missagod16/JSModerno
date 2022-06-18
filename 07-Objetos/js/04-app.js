// Object literal
const producto = {
    nombre : "monitor",
    precio : 320,
    disponible : true,
    //imagen : "imagen.jpg",
 }

// const nombre = producto.nombre;
//  console.log(nombre);


// Destructuring ademas de extraer valor crea la variable en caso de no existir
 const {nombre , precio , disponible}  = producto;
//  const { precio} = producto;
 console.log(nombre);
 console.log(precio);
 console.log(disponible);