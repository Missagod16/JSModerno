localStorage.setItem('nombre' , 'Juan');

sessionStorage.setItem('nombre','tifany');

const Producto = {
    nombre : 'monitor de 24 pulgadas',
    precio : 300
}
 
const ProductoString = JSON.stringify(Producto);
localStorage.setItem ('producto' , ProductoString);

const meses = ['Enero', 'Febrero' , 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses' , mesesString);
console.log(mesesString);