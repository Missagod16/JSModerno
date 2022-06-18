
const autenticado = true; 

if (autenticado){
    console.log('es valido');
}

const puntaje = 500;

function revisarPuntaje (){
    if (puntaje > 400){
        console.log('Excelente');
        return;
    }
    
    
    if (puntaje > 300){
     console.log('buen puntaje ... felicidades');
     return;
    }

}


revisarPuntaje();