
// const pendientes = ['tarea','comer', 'proyecto' , 'Estudiar Java'];

// For in itera sobre objetos es decir los que van con { }


const automovil = {
    modelo : 'camara',
    year : 1969,
    motor: '6.0'
}

for ( let propiedad in automovil){
    console.log(automovil[propiedad]);
}


// iterador para objetos mas sencillo


for ( let [llave,valor] of Object.defineProperties(automovil)){
   console.log(llave , valor);
}