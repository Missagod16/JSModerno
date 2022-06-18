
const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalApagar = 600;

// if ((efectivo+credito) >= totalApagar){
//    console.log('si se puede pagar');
// }

if (efectivo > totalApagar || credito > totalApagar || disponible > totalApagar){
    console.log('si se puede pagar');
}else{
    console.log('no se puede');
}