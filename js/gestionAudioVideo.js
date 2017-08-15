//================ GESTION LECTURE AUDIO =================
//Stopper la lecture de l'audio en cours de route lorsque clic sur autre audio
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);