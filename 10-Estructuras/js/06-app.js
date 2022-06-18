const Usuario = true;
const puedepagar = true;

if (Usuario && puedepagar ){
    console.log('eres usuario y puedes pagar');

    
}else if (!Usuario){
    console.log('inicia sesion');
}else if (!puedepagar){
   console.log('no se poseen los fondos necesarios');
}else  if (!puedepagar && !Usuario){
    console.log('no no puedes comprar');
}