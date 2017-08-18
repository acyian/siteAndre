function mapReconstruite(facteurMultiplicatifCoordonnees) {
	// Coordonnees de tous les rectangles de la Map Who's Who
	var coordonneesMapWhosWho = [   "72,18,119,71",
                                    "65,84,107,133",
                                    "133,332,182,390",
                                    "296,7,334,66",
                                    "310,80,356,130",
                                    "182,321,220,368",
                                    "415,333,447,386",
                                    "538,362,583,409",
                                    "541,271,578,317",
                                    "437,245,472,297",
                                    "430,191,468,234",
                                    "376,81,415,131",
                                    "296,130,343,175",
                                    "304,179,346,230",
                                    "251,128,295,179",
                                    "193,83,225,129",
                                    "564,37,610,89",
                                    "483,255,526,303",
                                    "481,87,518,136",
                                    "589,89,630,131",
                                    "233,185,280,234",
                                    "28,223,66,268",
                                    "15,160,58,207",
                                    "69,142,116,195",
                                    "122,140,164,191",
                                    "193,134,235,183",
                                    "130,28,185,79",
                                    "194,7,238,58",
                                    "354,8,404,62",
                                    "449,12,503,64",
                                    "129,85,177,134",
                                    "244,79,289,125",
                                    "65,204,102,255",
                                    "117,195,158,243",
                                    "179,190,223,239",
                                    "84,271,132,320",
                                    "134,260,175,308",
                                    "181,254,223,312",
                                    "240,246,287,297",
                                    "304,243,333,280",
                                    "362,240,392,278",
                                    "315,280,385,324",
                                    "244,315,279,368",
                                    "282,333,315,371",
                                    "352,332,392,379",
                                    "477,350,509,397",
                                    "594,279,632,331",
                                    "401,248,435,291",
                                    "633,200,678,253",
                                    "593,184,624,229",
                                    "552,211,590,258",
                                    "484,199,528,243",
                                    "558,149,592,195",
                                    "506,142,551,191",
                                    "435,136,474,184",
                                    "371,132,410,175",
                                    "360,179,406,232",
                                    "431,83,466,135",
                                    "539,88,577,138",
                                    "606,131,642,180",
                                    "644,132,678,181" 
                                ];

    var mapWhosWho = $("#mapWhosWho"); // va chercher la map image de Who's Who

    var i = 0;
    mapWhosWho.find("area").each(function() { // trouve tous les areas de cette map image ET fait une boucle sur chaque rectangle
    	var coordonneesDeBase = coordonneesMapWhosWho[i].split(","); 
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
    var forTitleMapWhosWho = document.getElementById("mapWhosWho");
    forTitleMapWhosWho.addEventListener("click", function(e) {
        showTitle(e.target, e.pageX, e.pageY);
    });
});  

// onresize specific, on applique les chgm generaux + ceux liés à la map whoswho
window.onresize = function() {
    changements_generaux_onresize();
    calculFacteurMultiplicatifEtReconstruitLaMap();
};