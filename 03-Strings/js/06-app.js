const producto = 'monitor 20 pulgadas ';


//.repeat te va a permitir repetir una cadena de texto...

const texto = ' en promocion'.repeat(3); // redondea numeros decimales

console.log(texto);
console.log(`${producto} , ${texto}`);

//Split , dividir un string

const actividad = "estoy aprendiendo js moderno";
console.log(actividad.split(" "));


const hobbies = 'leer , caminar , escuchar musica ,escribir , aprender a programar';
console.log(hobbies.split(','));

const tweet = "aprendiendo javascript  #jsmodernoconjuan";
console.log(tweet.split('#'));
