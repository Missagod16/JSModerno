// event bubbling
const cardDIv = document.querySelector('.card');
const info1  = document.querySelector('.info');
const titulo  = document.querySelector('.titulo');

cardDIv.addEventListener ( 'click' , (e) => {
    e.stopPropagation();
    console.log('click en card');
});

info1.addEventListener ( 'click' , (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener ( 'click' , (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

