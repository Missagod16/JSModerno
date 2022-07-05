function Cliente (nombre , saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    // console.log(`hola mi nombre es ${nombre} y poseo ${saldo}`);
};

const juan = new Cliente ( 'Juan',5000);

function formatearCLiente (Cliente){
    const { nombre , saldo}=Cliente;
    return `El cliente ${nombre} tiene ${saldo} `;
}

console.log(formatearCLiente(juan));

function Empresa (razonSocial , capital,categoria){
    this.razonSocial = razonSocial;
    this.capital = capital;
    this.categoria = categoria;

    // console.log(`hola mi nombre es ${nombre} y poseo ${saldo}`);
};

const KFC = new Empresa ('KFCX000',100000 , 'Consumo de Alimentos');

function formatearEmpresa (Empresa){
    const { razonSocial , capital , categoria} = Empresa;
    return `La empresa ${razonSocial} tiene un monto total de activos de ${capital} y su rubro ${categoria} es apto para inversion`;
};

console.log(formatearEmpresa(KFC));