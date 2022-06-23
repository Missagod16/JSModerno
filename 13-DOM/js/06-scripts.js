const encabezado = document.querySelector('.contenido-hero').textContent;

// console.log(encabezado);

// console.log(encabezado.innerText); // se trae el texto ademas en el CSS si el visibility : hidden ; no lo va a encontrar
// console.log(encabezado.textContent); // si lo va a encontrar
// console.log(encabezado.innerHTML); // se trae el html

// const nuevo_header = 'hola';
// document.querySelector('.contenido-hero').textContent = nuevo_header;


const image = document.querySelector('.card img');
image.src = "img/hacer2.jpg";
