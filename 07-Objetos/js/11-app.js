"use strict";

const producto = {
    nombre : "monitor",
    precio : 320,
    disponible : true,
    mostrarInfor :  function (){
        console.log(`el producto tiene un precio de : ${this.precio}`);
    },
    informacion : {
       peso: '1 kg',
       medida : {
          cm : "30 cm"
       },
       fabricacion:{
         pais: "china"
       }
    }
 };


 const producto2 = {
    nombre : "teclado",
    precio : 30,
    disponible : true,
    mostrarInfor: function (){
        console.log(`el producto ${this.nombre} tiene el precio de ${this.precio}`);
    }
 }



 producto.mostrarInfor();
 producto2.mostrarInfor();