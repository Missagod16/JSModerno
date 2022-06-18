
 // Object literal
const producto = {
    nombre : "teclado",
    precio : 30,
    disponible : true,
    
 }


 // Object constructor

 function Producto (nombre ,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
 }

 const producto2 = new Producto('monitor' , 500);

 console.log(producto2);

 const producto3 = new Producto('mouse' , 100);
 console.log(producto3);