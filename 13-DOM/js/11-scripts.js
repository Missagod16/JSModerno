const btnflotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btnflotante.addEventListener('click' , Btnutil);


/// funciones

function Btnutil (){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}