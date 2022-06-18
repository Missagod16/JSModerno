// Object literal
const producto = {
    nombre : "monitor",
    precio : 320,
    disponible : true,
    //imagen : "imagen.jpg",
 }


 // agregar nuevas propiedades
 producto.imagen = "imagen.jpg";

 // eliminar propiedades de objeto
 delete producto.disponible;

 console.log(producto);