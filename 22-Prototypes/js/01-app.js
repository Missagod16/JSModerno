// const cliente = {
//     nombre : 'juan',
//     saldo : 500
// }

// DINAMICO Y REUTILIZABLE

function Cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    console.log(`hola mi nombre es ${nombre} y poseo ${saldo}`);
};

const juan =new Cliente('juan' , 599);

console.log(juan);