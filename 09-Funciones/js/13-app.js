const reproductor = {
    cancion : '',
    reproducir : (id) => console.log(`reproduciendo cancion ${id}...`),
    pausar : (id) => console.log(`pausando ${id}`),
    borrar :  (id) =>  console.log(`borrando cancion ${id}`),
    crearPlaylist : (nombre ) =>  console.log(`creando playlist con el nombre ${nombre}`),
    reproducirPlaylist : (nombre) => console.log(`reproduciendo playlist ${nombre}`),
    

    set nuevacancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get ObtenerCancion (){
        console.log(`${this.cancion}`);
    }

};


reproductor.nuevacancion = 'enter sandman';
reproductor.ObtenerCancion;



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(20);
reproductor.borrar(20);
reproductor.crearPlaylist('FOB');
reproductor.reproducirPlaylist('FOB');