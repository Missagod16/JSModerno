const producto = 'monitor 20 pulgadas';


// .replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas','hola')); // remplaza datos del texto selecciona palabra/ palabra a cambiar
console.log(producto.replace('monitor','monitor curvo'));

//slice corta 1 numero donde inicia segundo es donde termina
console.log(producto.slice(0,10));
console.log(producto.slice(11,10)); // en caso de que el primero sea mayor no se realizara la accion requerida


//Alternativa a Slice

console.log(producto.substring(0,10));  // substring si puede lograr la accion al revez de cortar
console.log(producto.substring(1,0)); 

const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));