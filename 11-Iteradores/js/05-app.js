let i = 0;


do{
    
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
}while( i <100); // COndicion

// diferencia entre el while y do while , el do while  se va ejecutar al menos una sola vez  y despues comprueba que se cumpla