function mapReconstruite(facteurMultiplicatifCoordonnees) {
    // Coordonnees de tous les rectangles de la Map Who's Who
    var coordonneesMapSonate =  [   "1,1,115,88",
                                    "115,1,229,88",
                                    "230,1,345,88",
                                    "459,1,574,89",
                                    "346,1,458,89",
                                    "575,1,689,89",
                                    "1,89,115,177",
                                    "115,89,229,177",
                                    "230,89,345,177",
                                    "346,89,458,177",
                                    "459,89,574,177",
                                    "575,89,689,177",
                                    "1,177,115,266",
                                    "115,177,229,266",
                                    "230,177,345,266",
                                    "346,177,458,266",
                                    "459,177,574,266",
                                    "575,177,689,266",
                                    "1,267,115,356",
                                    "115,267,229,356",
                                    "230,267,345,356",
                                    "346,267,458,356",
                                    "459,266,574,356",
                                    "575,266,689,356" 
                                ];

    var mapSonate = $("#mapSonate"); // va chercher la map image de Who's Who

    var i = 0;
    mapSonate.find("area").each(function() { // trouve tous les areas de cette map image ET fait une boucle sur chaque rectangle
        var coordonneesDeBase = coordonneesMapSonate[i].split(","); 
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

// Detection des appareils mobiles
function detectmob() { 
    // Detecte si appareil mobile rend le scroll à la main possible
    return 'ontouchstart' in window; 
}

// Pour rendre visible les titles de la map sur appareils mobiles (simule le hover (effet clic))
function showTitle(area, x, y) {
    if(detectmob() == true) {
        
        $('#afficheConteneurTitleMapImgPourMobile p').html(area.title);
        $('#afficheConteneurTitleMapImgPourMobile').css("top", y);
        var newLeft = x - $("#corps").offset().left - ($('#afficheConteneurTitleMapImgPourMobile p').width()/2);
        $('#afficheConteneurTitleMapImgPourMobile').css("left", newLeft);
        $("#afficheConteneurTitleMapImgPourMobile").css("display", "block"); 

        setTimeout(function() { 
            $("#afficheConteneurTitleMapImgPourMobile").css("display", "none"); 
        }, 5000);
    }
}


$(document).ready(function(){
    // Pour rendre visible les titles de la map sur appareils mobiles (simule le hover (effet clic))
    var forTitleMapWhosWho = document.getElementById("mapSonate");
    forTitleMapWhosWho.addEventListener("click", function(e) {
        showTitle(e.target, e.pageX, e.pageY);
    });
});  

// onresize specific, on applique les chgm generaux + ceux liés à la map whoswho
window.onresize = function() {
    changements_generaux_onresize();
    calculFacteurMultiplicatifEtReconstruitLaMap();
};