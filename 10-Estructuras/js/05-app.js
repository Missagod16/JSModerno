//Switch case


const metodoDePago = 'cheque';

switch (metodoDePago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    
    case 'debito':
        console.log(`Pagaste con ${metodoDePago}`);
        break;

    case 'cheque':
        pagando();
        console.log(`Pagaste con ${metodoDePago}`);
        break;

    default:
        console.log('no se encontro la forma de pago');
        break;

}

function pagando (){
    console.log('pagando ');
}