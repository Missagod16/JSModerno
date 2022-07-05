// Variables
const color = document.getElementById('color');
const transmision = document.getElementById('transmision');
const puertas = document.getElementById('puertas');
const maximo = document.getElementById('maximo');
const minimo = document.getElementById('minimo');
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const max = new Date().getFullYear();
const min = max - 10;


// contenedor para los resultados
const resultado = document.getElementById('resultado');



// Generar un objeto con una busqueda
const DatosBusqueda = {
    marca : '' , 
    year:'',
    minimo: '',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // muestra los autos
    // Llena las opciones de años
    llenaSelect();
})

// Eventlistener para los select
marca.addEventListener('change',(e)=>{
   DatosBusqueda.marca = e.target.value;
   console.log(DatosBusqueda);

   filtrarAuto();
   
});
year.addEventListener('change',(e)=>{
    DatosBusqueda.year = parseInt(e.target.value);
    console.log(DatosBusqueda);
    filtrarAuto();
 });
minimo.addEventListener('change',(e)=>{
    DatosBusqueda.minimo = e.target.value;
    console.log(DatosBusqueda);
    filtrarAuto();
 });
maximo.addEventListener('change',(e)=>{
    DatosBusqueda.maximo = e.target.value;
    console.log(DatosBusqueda);
    filtrarAuto();
 });
puertas.addEventListener('change',(e)=>{
    DatosBusqueda.puertas = parseInt(e.target.value);
    console.log(DatosBusqueda);
    filtrarAuto();
    
 });
transmision.addEventListener('change',(e)=>{
    DatosBusqueda.transmision = e.target.value;
    console.log(DatosBusqueda);
    filtrarAuto();
    
 });
color.addEventListener('change',(e)=>{
    DatosBusqueda.color = e.target.value;
    console.log(DatosBusqueda);
    filtrarAuto();
 });
 


// FUnciones

function mostrarAutos (autos){

    LimpiarHTML();

   autos.forEach(auto=>{
       const autoHTML= document.createElement('p');
       const {marca,modelo,year,precio,puertas,color,transmision} =auto;

       autoHTML.textContent = `
          ${marca} - ${modelo} -  ${year} - ${precio} - ${puertas} Puertas - ${color} - Transmision ${transmision}
       `;
       // insertar en el HTML

       resultado.appendChild(autoHTML);
   })
};

// LImpiar

function LimpiarHTML (){
   while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
   }
}

function llenaSelect (){
    for(let i = max; i>min ; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
};

// filtrado en base a busqueda
function filtrarAuto (){
   const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(Filtrarpuertas).filter(filtrartransmision).filter(filtrarcolor);
//    console.log(resultado);

if(resultado.length ){
       mostrarAutos(resultado);

   }else{
    noresultado();
   }
};

function noresultado(){
    LimpiarHTML();

    const noresultado = document.createElement('div');
    noresultado.classList.add('alerta','error');
    noresultado.textContent='no se encontraron resultados';
    resultado.appendChild(noresultado);
}

function filtrarMarca (auto) {
    const {marca } = DatosBusqueda;

  if(marca){
    return auto.marca === marca;
  }
  return auto;
};

function filtrarYear (auto){
    const {year} = DatosBusqueda;


   if(year){
    return auto.year === year;
   }
   return auto;
};

function filtrarMinimo (auto){
    const {minimo} = DatosBusqueda;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
};

function filtrarMaximo (auto){
    const {maximo} = DatosBusqueda;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
};

function Filtrarpuertas (auto){
    const {puertas} = DatosBusqueda;
    

    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
};

function filtrartransmision (auto){
    const {transmision} = DatosBusqueda;

    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
};

function filtrarcolor (auto){
    const {color} = DatosBusqueda;

    if(color){
        return auto.color === color;
    }
    return auto;
};