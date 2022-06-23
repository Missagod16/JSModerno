// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children); 

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// const card = document.querySelector('.card');
// console.log(card.children);

// // card.children[1].children[1].textContent = 'waaa desde transversing the dom';
// // card.children[0].src = 'img/hacer4.jpg';
// // console.log(card.parentNode); // este se dirige al padre de el seleccionado y muestra el div como esta acomodado
// // console.log(card.parentElement.parentElement);
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling); // va al siguiente

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling); // al reves  se regresa en la busqueda de hijos
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);