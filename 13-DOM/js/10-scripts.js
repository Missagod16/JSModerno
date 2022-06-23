const enlace = document.createElement('a');

// agregandole texto
enlace.textContent = 'prueba';

// añadiendo href
enlace.target = '_blank';
enlace.href= '/prueba';

enlace.setAttribute  ('data-enlace','prueba');
enlace.classList.add('alguna-clase')
enlace.onclick = mifuncion;

const navegacion = document.querySelector ( '.navegacion');

navegacion.insertBefore(enlace, navegacion.children[1]); // insertar antes de


function mifuncion (){
    alert ( 'diste click apa');
};

// crear un card de forma dinamica


const parrafo1  = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2  = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3  = document.createElement('p');
parrafo3.textContent = '12000 por persona';
parrafo3.classList.add('precio');


// crear div con la clase de info'
 const divInfo = document.createElement('div');
 divInfo.classList.add('info');
divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);

// crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'texto alternativo';

// crear el card 
const card = document.createElement('div');
card.classList.add('card');

// asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(divInfo);

// insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards'); // mientras mas especifico mas accedes

contenedor.appendChild(card);