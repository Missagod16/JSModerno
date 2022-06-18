function sumar  (a , b) {
   return a+b ; 
}

const resultado = sumar (3,4);

console.log(resultado);

// Ejemplo mas avanzado

let total = 0;

function agregarCarrito (precio){
   return total += precio;
};

function calcularImpuesto (total ){
    return total * 1.15;
};

total = agregarCarrito(300);
total = agregarCarrito(1300);
total = agregarCarrito(100);

const totalApagar = calcularImpuesto (total);

console.log(`El total a pagar es de ${totalApagar}`);

console.log(total);