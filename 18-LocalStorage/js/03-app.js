localStorage.removeItem('nombre');


// actualizar un registro

const mesesArray =JSON.parse(localStorage.getItem('meses'));

mesesArray.push('nuevo mes');
localStorage.setItem('meses' , JSON.stringify(mesesArray));
console.log(mesesArray);

localStorage.clear();