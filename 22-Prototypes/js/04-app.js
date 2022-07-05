function Cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    // console.log(`hola mi nombre es ${nombre} y poseo ${saldo}`);
};

Cliente.prototype.tipoCliente = function (){
    console.log(this.saldo);

    let tipo ;

    if(this.saldo > 10000){
      tipo ='gold';
    }else if(this.saldo > 5000){
      tipo ='plata';
    }else {
        tipo = 'normal';
    };

    return tipo;
};


Cliente.prototype.nombreCLienteSaldo = function (){
    return `NOmbre ${this.nombre} , Saldo : ${this.saldo} , Tipo cliente ${this.tipoCliente()}` 
};

Cliente.prototype.Banco = function (){
   if(this.saldo > 5000){
    return `por tener la cantidad de ${this.saldo} eres apto para una tarjeta de credito con el monto de 10000`;
   }else if(this.saldo > 3000){
    return `por la cantidad de tu saldo de ${this.saldo} eres candidato para una tarjeta de 4000`;
   }else{
    return `Disculpa por tu monto presentado no hay ofertas de credito`;
   };
};

Cliente.prototype.retirarSaldo = function (retira){
  this.saldo -= retira
};

function persona (nombre,saldo ,telefono){
     Cliente.call(this,nombre,saldo);
      this.telefono = telefono;
};

persona.prototype = Object.create(Cliente.prototype);
persona.prototype.constructor = Cliente;

persona.prototype.mostrarTelefono = function (){
    return `el telefono de esta persona es ${this.telefono}`
}

//instanciarlo

const Alex = new persona ('Alejandro',5000, 5578732009);
console.log(Alex.tipoCliente());
console.log(Alex.mostrarTelefono());