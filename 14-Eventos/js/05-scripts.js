window.addEventListener('scroll',Scroll);

function Scroll (){
    // console.log('scrolling');

    // const scrolpx = window.scrollY;
    // console.log(scrolpx);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 784){
      console.log('elemento visible');
    }else{
        console.log('aun no');
    }
}