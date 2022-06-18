IniciarApp();

function IniciarApp (){
    console.log('iniciando app ....');
    segundafuncion();
}

function segundafuncion (){
    console.log('desde la segunda funcion');
    usuarioautenticado('Pablo');
}

function usuarioautenticado (usuario){
    console.log('autenticando usuario , espere ....');
    console.log(`Usuario autenticado exitosamente eres ${usuario}`);
}