// seleccionar elementos por su clase

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// if in a class exist more than 1
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores[0]);


// if a class doesnt exist 
const noexiste = document.getElementsByClassName('no-existe');
console.log(noexiste);