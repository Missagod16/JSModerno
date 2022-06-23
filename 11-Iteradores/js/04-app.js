let i = 0; // inicializar el while

while (i <=100) {
    i++

    if ( i % 3 === 0 & i % 5 === 0){
     console.log(`este es el numero fizzbuzz ${i}`);
    }

    if (i % 3 ===0){
        console.log(`este numero ${i} es fizz`);
    }

    if ( i % 5 === 0) {
        console.log(`este numero es buzz ${i}`);
    }
}