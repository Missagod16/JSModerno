const nav = document.querySelector('.navegacion');

//registrar un evento

// nav.addEventListener('click', () =>{
//     console.log('click en app');
// })

// nav.addEventListener('mouseenter', () =>{
//     console.log('entrando');
//     nav.style.background = 'transparent'
// })

// nav.addEventListener('mouseout', () =>{
//     console.log('saliendo');
//     nav.style.background = 'red';
// })

// nav.addEventListener('mousedown', () =>{
//     console.log('saliendo');
//     nav.style.background = 'red';
// })

nav.addEventListener('dblclick', () =>{
    nav.style.backgroundColor = 'white';
    console.log('a');
})

// mousedown similar al click
// click
// dblclick doble click
// mouseup = cuando sueltas el mouse