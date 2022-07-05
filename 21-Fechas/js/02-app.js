const diaHOy = new Date();

moment.locale('es');
console.log(moment().format('MMMM Do YYYY H:mm:ss'));



console.log( moment().format('LLLL' ,diaHOy));

console.log(moment().add(3,'days').calendar());