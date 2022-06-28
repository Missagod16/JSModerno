// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarcarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// funciones operando

CargarEventlisteners();



// Funciones
function CargarEventlisteners (){
 
   
  // Cuando agregas un curso presionando agregar al carrito
  listaCursos.addEventListener('click' , agregarCurso);

  // eliminar los cursos del carrito
  carrito.addEventListener('click' , eliminarCurso);

   // vaciar el carrito
   vaciarcarrito.addEventListener('click',()=>{
    console.log('eliminando carrito');
    articulosCarrito = []; // reseteamos
    mostrarCarritoHTML(); // eliminamos todo en html
   })
}

function agregarCurso (e){
    e.preventDefault();

  if (e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;
    // console.log(e.target.parentElement.parentElement);
    leerDatosCUrso(cursoSeleccionado);
    
  }
}

function leerDatosCUrso(curso){
//  console.log(curso);

 // crear un objeto con el contenido del curso actual
 const InfoCurso = {
   imagen : curso.querySelector('img').src ,
    titulo : curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1

 };

 // revisa si un elemento ya existe en el carrito

 const existe = articulosCarrito.some (curso => curso.id === InfoCurso.id);
 if(existe){
    //actualizar cantidad
    const cursos = articulosCarrito.map(curso =>{
        if( curso.id === InfoCurso.id){
            curso.cantidad++;
            return curso;
        }else{
            return curso;
        }
    });
    articulosCarrito = [...cursos];
 }else{
    // agregamos el curso al carrito
    articulosCarrito = [... articulosCarrito , InfoCurso];
 }

  // agrega elementos al arreglo del carrito
  
 mostrarCarritoHTML();
}

function mostrarCarritoHTML (){

    // limpiar el html
    limpiarhtml();


    // recorre el carrito y genera html

  articulosCarrito.forEach(curso =>{
     const { imagen , titulo , precio , cantidad,id } = curso;

     const row = document.createElement('tr');
     row.innerHTML= `
     <td><img src = "${imagen}" width = "100"></td>
     <td>${titulo}</td>
     <td>${precio}</td>
     <td>${cantidad}</td>
     <td> <a href = "#" class= "borrar-curso" data-id = "${id}"> X </td>
     `
    // agrega el html del carrito en el tbody
      contenedorCarrito.appendChild(row);
  });
};

function limpiarhtml (){
    //forma lenta
    // contenedorCarrito.innerHTML = '';
    
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
// elimina los cursos del tbody
function eliminarCurso(e){
   
   
    
    if(e.target.classList.contains('borrar-curso')){
        const dataidcurso = e.target.getAttribute('data-id');

        // eliminar del arreglo de articulos de carrito por data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== dataidcurso);

        console.log(articulosCarrito);
        mostrarCarritoHTML();
    }
    
}