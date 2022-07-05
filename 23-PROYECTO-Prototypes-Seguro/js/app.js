


// CONSTRUCTORES
function Seguro(marca , year , tipo){
  this.marca = marca;
  this.year= year;
  this.tipo = tipo;

};

Seguro.prototype.CalculoSeguro = function (){
   // 1 = americano 1.15
   // 2 = Asiatico 1.05
   // 3 = Europeo 1.35

   let cantidad;
   const base = 2000;
   console.log(this.marca);

   switch(this.marca){
     case '1':
      cantidad = base *1.15;
      break;
     case '2':
      cantidad = base * 1.05;
      break;
     case '3':
      cantidad = base * 1.35;
      break;

    default:

      break;
   };
   // leer el año
   const diferencia = new Date().getFullYear()- this.year;
   // cada año la diferencia es mayor / el costo se reduce 3%
  cantidad -= ((diferencia * 3) * cantidad)/100;
  // si el seguro es basico se multiplica por un 30% mas
  // si el segunro es completo se multiplica por un 50% mas
   if(this.tipo === 'basico'){
      cantidad *= 1.30;
   } else{
    cantidad *=1.50;
   };
   return cantidad;
}

function UI (){
  
};

// LLenado de opciones de los años
UI.prototype.llenadoAnual = () => {
   const max = new Date().getFullYear(),
    min = max- 20;

    const selectYear = document.getElementById('year');

    for(let i = max; i > min ; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
        
      };
      
    };
    
UI.prototype.mostrarMensaje = function (mensaje , tipo){
      // const MensajeError = document.createElement('p');
      // MensajeError.textContent = error;
      // MensajeError.style.textAlign = 'center';
      // MensajeError.style.borderRadius = '1.5rem';
      // MensajeError.style.color = 'white';
      // MensajeError.style.backgroundColor = 'red';
      // MensajeError.style.padding = '10px';
      // MensajeError.style.marginTop = '20px';
      // MensajeError.style.textTransform = 'uppercase';
    
      // const resultado = document.getElementById('resultado');
      // resultado.appendChild(MensajeError);
      // setTimeout(() => {
      //   MensajeError.remove();
      // }, 3000);

      const div = document.createElement('div');

      if(tipo === 'error'){
        div.classList.add('error');
      }else{
        div.classList.add('correcto');
      }

      div.classList.add('mensaje' , 'mt-10');
      div.textContent = mensaje;

      // insertar formula en html

      const formulario = document.querySelector('#cotizar-seguro');
      formulario.insertBefore(div, document.querySelector('#resultado'));

      setTimeout(() => {
        div.remove();
      }, 3000);
    };

UI.prototype.mostrartotal = function (total,seguro){

  const {marca , year , tipo } = seguro;

   let textoMarca;

   switch(marca){
     case '1':
      textoMarca = 'Americano';
      break;

     case '2':
      textoMarca = 'Asiatico';
      break;

     case '3':
      textoMarca = 'Europeo';
      break;

    default:
      break;
   }




   // crear el resultado
   const div = document.createElement('div');
   div.classList.add('mt-10');
   div.innerHTML = `<p class="header"> Tu resumen </p>
   <p class = "font-bold"> marca : <span class = "font-normal"> ${textoMarca} </span> </p>
   <p class = "font-bold"> Año: <span class = "font-normal"> ${year} </span> </p>
   <p class = "font-bold"> Tipo: <span class = "font-normal"> ${tipo} </span> </p>
   <p class = "font-bold"> Total : <span class = "font-normal">$ ${total} </span> </p>`;

   const resultadoDiv = document.querySelector('#resultado');
   
   // mostrar spinner
   const spinner = document.getElementById('cargando');
   spinner.style.display= 'block';
   
   setTimeout(() => {
     spinner.style.display='none'; // borra el spinner
     resultadoDiv.appendChild(div); // pero a la vez se muestra el resultado
    }, 3000);
};


// Instanciarlo

const ui = new UI ();

document.addEventListener('DOMContentLoaded', () =>{
  ui.llenadoAnual(); // llenar el selector con los años 
});


Eventlisteners();
function Eventlisteners (){
   const formulario = document.querySelector('#cotizar-seguro');
   formulario.addEventListener('submit',cotizarseguro);
};

function cotizarseguro (e){
 e.preventDefault();
 // leer la marca seleccionada
 const marca = document.getElementById('marca').value;
 // leer el año seleccionado
 const year = document.querySelector('#year').value;
 // leer el tipo seleccionado
 const tipo = document.querySelector('input[name="tipo"]:checked').value;

 if(marca === '' || year === ''||  tipo === ''){
  UI.prototype.mostrarMensaje('Todos los campos son obligatorios' , 'error');
  return;
  };

  UI.prototype.mostrarMensaje('Validando ...Cargando ' ,'correcto');

  // ocultar cotizaciones previas;
  const resultados = document.querySelector('#resultado div');
  if(resultados != null){
    resultados.remove();
  };

  // INstanciar el seguro
  const seguro = new Seguro (marca,year,tipo);
  const total = seguro.CalculoSeguro();

  
  // utilizar el prototype para cotizar
  
  ui.mostrartotal(total,seguro);
}

