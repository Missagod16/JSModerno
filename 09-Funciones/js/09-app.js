const reproductor = {
    reproducir : function (id){
         console.log(`reproduciendo cancion ${id}...`);
    },
    pausar : function (id){
        console.log(`pausando ${id}`);
    },
    borrar : function (id){
        console.log(`borrando cancion ${id}`);
    },
    crearPlaylist : function (nombre ){
        console.log(`creando playlist con el nombre ${nombre}`);
    },
    reproducirPlaylist : function (nombre){
        console.log(`reproduciendo playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(20);
reproductor.borrar(20);
reproductor.crearPlaylist('FOB');
reproductor.reproducirPlaylist('FOB');