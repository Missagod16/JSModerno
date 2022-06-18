// Declaracion de funcion ( Function declaration)   // JAVASCRIPT TIENE 2 VUELTAS PARA CARGA Y
sumar();                                            // FUNCIONA LA DECLARACION DE FUNCION DE MANERA CORRECTA EN ESTOS CASOS

// primer vuelta busca variables y en la segunda vuelta es la etapa de ejecucion por eso es correcta
function sumar (){   
    
    console.log(2+2);
}



// funcion expression o expresion de funcion
sumar2();  // no funciona de esta manera

const sumar2 = function(){
    console.log(3+3);
}


// se le conoce como Hosting a este concepto