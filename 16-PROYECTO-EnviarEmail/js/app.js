const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnreset = document.getElementById('resetBtn');
const btnenviar = document.getElementById('enviar');
const formulario = document.getElementById('enviar-mail');


// FUNCIONES PRIMARIAS
eventlisteners();
function eventlisteners (){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur',validarFormulario );
    asunto.addEventListener( 'blur', validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
    formulario.addEventListener('submit' , enviarEmail);

    btnreset.addEventListener('click',resetearformulario);
}

function iniciarApp (){
    btnenviar.disabled = true;
    btnenviar.classList.add('cursor-not-allowed','opacity-50');
}


// Funciones secundarias // dan funcionamiento a las primarias
function validarFormulario (e){

 // validar si no tiene campos vacios los apartados // GENERAL
if(e.target.value.length > 0){
 const error= document.querySelector('p.error');
 if(error){
     error.remove();

 }

 e.target.classList.remove('border' , 'border-red-500');
 e.target.classList.add('border' , 'border-green-500');
}else{
   
 e.target.classList.remove('border' , 'border-green-500');
 e.target.classList.add('border' , 'border-red-500');

 mostrarError('Todos los campos deben ser obligatorios');
};

// verificar si el email es valido

if(e.target.type === 'email'){
 // const resultado = e.target.value.indexOf('@'); // permite hayar nuestro String // validacion regular
   // debemos utilizar expresiones regulares para correos
 if ( er.test(e.target.value)){
 const error= document.querySelector('p.error');
 if(error){
 error.remove();
 }

 e.target.classList.remove('border' , 'border-red-500');
 e.target.classList.add('border' , 'border-green-500');
  }else{
 e.target.classList.add('border' , 'border-red-500');

 mostrarError('Email no valido');
       };
};

if(er.test(email.value)  && asunto.value !== '' && mensaje.value !== ''){
  btnenviar.disabled = false;
  
}


}

function mostrarError(mensaje){
 const mensajeErr0r = document.createElement('p');
 mensajeErr0r.textContent = mensaje;
 mensajeErr0r.classList.add('border', 'border-red-500' , 'background-red-100' , 'text-red-500','p-3' ,'mt-5', 'text-center' , 'error');

 const errores = document.querySelectorAll('.error');
 if(errores.length === 0){
     formulario.appendChild(mensajeErr0r);
     }

 }

function enviarEmail (e){
e.preventDefault();

 // mostrar el spinner
 const spinner = document.getElementById('spinner');
 if(validarFormulario){
    spinner.style.display = 'flex';

    // despues de 3 segundos ocultar spinner y mostrar mensaje

    setTimeout(() => {
        spinner.style.display = 'none';

        // mensaje que dice que se envio
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Tu mensaje ha sido enviado correctamente';
        parrafo.classList.add('text-center' ,'my-10' , 'p-5' , 'bg-green-500' , 'text-white','font-bold' ,'uppercase');
        // insertar parrafo antes de spinner
        formulario.insertBefore(parrafo , spinner);

        setTimeout(() => {
            parrafo.remove();
            resetearformulario();
        }, 5000);

    }, 3000);
 }
}

    // funcion que resetea el formulario

    function resetearformulario (){
        formulario.reset();

        iniciarApp();
    }
   
