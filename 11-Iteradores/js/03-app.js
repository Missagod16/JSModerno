for (let i = 1; i <= 100 ; i++){
    
     if( i % 15 === 0){
        console.log(`aqui es el fizzbuzz ${i}`);
        
    }else if (i % 5 === 0) {
        console.log(`buzz ${i}`);
    }else if (i % 3 === 0)
    {    console.log( `fizz ${i}`);
        
    }
    
}

// con esta forma solo genera lo necesario  evitate colocar un log al final para repetir secuencia