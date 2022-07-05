const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON) ); // parse convierte un string en un objeto

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));