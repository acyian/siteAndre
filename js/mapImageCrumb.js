function mapReconstruite(facteurMultiplicatifCoordonnees) {
    // Coordonnees de tous les rectangles de la Map Who's Who
    var coordonneesMapCrumb =   [   "1,1,173,173",
                                    "174,1,346,173",
                                    "347,1,519,173",
                                    "520,1,692,173",
                                    "1,174,173,347",
                                    "174,174,346,347",
                                    "347,174,519,347",
                                    "519,174,692,347",
                                    "1,347,173,520",
                                    "174,347,346,520",
                                    "347,347,519,520",
                                    "519,347,692,520",
                                    "1,520,173,692",
                                    "174,520,346,692",
                                    "347,520,519,692",
                                    "519,520,692,692" 
                                ];

    var mapCrumb = $("#mapCrumb"); // va chercher la map image de Who's Who

    var i = 0;
    mapCrumb.find("area").each(function() { // trouve tous les areas de cette map image ET fait une boucle sur chaque rectangle
        var coordonneesDeBase = coordonneesMapCrumb[i].split(","); 
        var scaledCoords = ""; // met variable vide (qui servira a stocker le resultat final du calcul des coordonnees)
        for (var coord in coordonneesDeBase) { // reconstruit toutes les coordonnees avec facteurMultiplicatifCoordonnees
            scaledCoords += Math.floor(coordonneesDeBase[coord] * facteurMultiplicatifCoordonnees) + ",";
        }
        scaledCoords = scaledCoords.slice(0, -1); // supprime la dernière virgule pour la derniere coordonnees du rectangle courant
        $(this).attr("coords", scaledCoords); // remplace les coordonnees de base par les nouvelles coordonnees du rectangle courant
        i = i+1;
    });
}

function calculFacteurMultiplicatifEtReconstruitLaMap(){
    //si mapImgWhosWho existe
    if ($('#mapImgWhosWho').length){
        var largeurImageActuelle = $('#mapImgWhosWho').width();
        //facteurMultiplicatifCoordonnees = largeurImageActuelle / largeur initiale de l'image (=> <img class="map" width="700" />)
        var facteurMultiplicatifCoordonnees = largeurImageActuelle / 700;

        mapReconstruite(facteurMultiplicatifCoordonnees); 
    }
    
    //si mapImgCrumb existe
    if ($('#mapImgCrumb').length){
        var largeurImageActuelle = $('#mapImgCrumb').width();
        //facteurMultiplicatifCoordonnees = largeurImageActuelle / largeur initiale de l'image (=> <img class="map" width="692" />)
        var facteurMultiplicatifCoordonnees = largeurImageActuelle / 692;

        mapReconstruite(facteurMultiplicatifCoordonnees); 
    }
    //si mapImgSonate existe
    if ($('#mapImgSonate').length){
        var largeurImageActuelle = $('#mapImgSonate').width();
        //facteurMultiplicatifCoordonnees = largeurImageActuelle / largeur initiale de l'image (=> <img class="map" width="690" />)
        var facteurMultiplicatifCoordonnees = largeurImageActuelle / 690;

        mapReconstruite(facteurMultiplicatifCoordonnees); 
    }
}


$(document).ready(function(){
    calculFacteurMultiplicatifEtReconstruitLaMap();
});  

// onresize specific, on applique les chgm generaux + ceux liés à la map whoswho
window.onresize = function() {
    changements_generaux_onresize();
    calculFacteurMultiplicatifEtReconstruitLaMap();
};