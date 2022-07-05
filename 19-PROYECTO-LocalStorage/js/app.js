// // variables
// const formulario = document.getElementById('formulario');
// const tweetArea = document.getElementById('tweet');
// const ListaTweets = document.getElementById('lista-tweets');
// const botonAgregar = document.querySelector('.button');
// let tweets = [];
// // Event Listeners

// document.addEventListener('DOMContentLoaded', () =>{

// formulario.addEventListener('submit' , DatosLocalStorage);
// botonAgregar.addEventListener('click' , guardarDatos);

// // cuando el documento esta listo
// document.addEventListener('DOMContentLoaded' ,()=>{
//     tweets= JSON.parse(localStorage.getItem('tweets')) || [];
//     console.log(tweets);
//     CrearHTML();
// })

// });

// // funciones

// function DatosLocalStorage (e) {
//     e.preventDefault();
//     const datos = e.target.value;
//     if(datos.lenght > 0){
//         console.log('si hay datos');
//         guardarDatos(datos);
//     }else{
//         mostrarError()
//     };
    
    
// };

// function guardarDatos(e){
//     e.preventDefault();
// //   const setItem =localStorage.setItem('tweets',tweetArea.value);
//    const getItem = localStorage.getItem('tweets');

//    if(getItem){
       

//        const tweetObj = {
//         id : Date.now(),
//         tweet:getItem 
//        }

//        tweets = [...tweets , tweetObj];
//        console.log(tweets);

//        CrearHTML();

//        formulario.reset();

//        // agregar los tweets a local storage

//        SincronizarStorage();

//    }else{
 
//        mostrarError('porfavor rellena datos')
//    };


// };


// function mostrarError(error){
//     const mensajeError = document.createElement('p');
//     mensajeError.textContent = error;
//     mensajeError.classList.add('error');
    

//     // insertarlo en contenido

//   ListaTweets.appendChild(mensajeError);

//     // elimina la alerta

//     setTimeout(() => {
//         mensajeError.remove();
//     }, 3000);
// };

// function CrearHTML (){
    
//     limpiarHTML();

//     if(tweets.length > 0){
//        tweets.forEach( tweet=>{
//           const li = document.createElement('li');

//           li.innerText = tweet.tweet;
//           console.log(li);

//           ListaTweets.appendChild(li);
//        });
//     };

// };

// // Limpiar el HTML

// function limpiarHTML (){
//     while (ListaTweets.firstChild){
//       ListaTweets.removeChild(ListaTweets.firstChild);
//     }
// };

// function SincronizarStorage (){
//   localStorage.getItem('tweets' , JSON.stringify(tweets));
// };

///////////////////////////////////////////// CODIGO EJEMPLIFICADO.

// VARIABLES

const ListaTweets = document.getElementById('lista-tweets');
const formulario = document.getElementById('formulario');
let tweets = [];

// EVENT LISTENERS
EventListeners();


// FUNCIONES

function EventListeners(){
    // Enviar Formulario
   formulario.addEventListener('submit',AgregarTweet);

   // Borrar Tweets
   ListaTweets.addEventListener('click' , borrarTweet);

   // Contenido cargado
   document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse ( localStorage.getItem ('tweets')) || [];
    CrearHTML ();
   })
};

function AgregarTweet (e){
    e.preventDefault();
    // leer el valor del textArea
    const tweet = document.querySelector('#tweet').value;

    // validacion 
    if (tweet === ''){
        mostrarError('un mensaje no puede ir vacio');
        return;
    };

    // Crear un Objeto Tweet
    const tweetObj = {
        id: Date.now (),
        texto: tweet
    };

    // Añadirlo a mis tweets 
    tweets = [...tweets , tweetObj];

    // Una vez agregado , mandamos renderizar nuestro HTML
    CrearHTML();

    // Reiniciar el formulario
    formulario.reset();

};

function mostrarError (error){
  const mensajeError = document.createElement('p');
  mensajeError.textContent = error;
  mensajeError.classList.add('error');

  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  setTimeout(() => {
     mensajeError.remove();
  }, 3000);
};

function CrearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach ( tweet => {
            // crear el boton de eliminar 
            const BOtonborrar = document.createElement('a');
            BOtonborrar.classList = 'borrar-tweet';
            BOtonborrar.innerText = 'X';

            // Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');
            
            // Añade el texto
            li.innerText = tweet.texto;

            // Añade el boton de borrar al tweet
            li.appendChild(BOtonborrar);

            // Añade un atributo unico...
            li.dataset.tweetId = tweet.id;

            // Añade el tweet a la lista;
            ListaTweets.appendChild(li);
        });
    };

};

// Elimina los cursos del carrito en el DOM
function limpiarHTML (){
  while(ListaTweets.firstChild){
    ListaTweets.removeChild(ListaTweets.firstChild);
  };
};

// Agregar tweet a local Storage
function SincronizarStorage(){
   localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Eliminar el tweet del DOM
function borrarTweet(e){
   e.preventDefault();
   // console.log(e.target.parentElement.dataset.tweetId);
   const id = e.target.parentElement.dataset.tweetId;
   tweets = tweets.filter ( tweet => tweet.id != id);
   CrearHTML();
}