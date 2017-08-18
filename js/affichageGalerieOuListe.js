//================ GESTION AFFICHAGE CHRONIQUES =================
// ============== AFFICHAGE TOUR DU MONDE ET COMPOSITEURS CONTEMPORAINS ==============
// Initialise la liste avec la class vueListe et mets des propriétés css a tous les li de la listChroniquesTourMonde
    $('#listChroniquesTourMonde').addClass('vueListe');
    for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
        $("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%");
        $("#listChroniquesTourMonde li").eq(i).first().first().css("height", "inherit");
    }

// Ajoute class et remove class pour affichage en liste ou en galerie d'images
function changeClassProduits(id){

    if (id == "iconeGalerie"){
        $('#iconeGalerie img').css('opacity','1');
        $('#iconeListe img').css('opacity','0.6');
        $('#listChroniquesTourMonde').addClass('vueGalerie');
        $('#listChroniquesTourMonde').removeClass('vueListe');
        $('#listChroniquesComposContemporains').addClass('vueGalerie');
        $('#listChroniquesComposContemporains').removeClass('vueListe');

        if (window.innerWidth <= 480) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                $("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%");
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", $("#corps").width()*1*0.9);
            }
        }

        else if (window.innerWidth > 720) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                if (((i+1) % 3) == 0) {
                    ($("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%"));
                }
                else {
                    ($("#listChroniquesTourMonde li").eq(i).css("margin-right", "5%"));
                }
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", $("#corps").width()*0.3*0.9);
            }
        }

        else if (window.innerWidth <= 720) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                if (((i+1) % 2) == 0) {
                    ($("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%"));
                }
                else {
                    ($("#listChroniquesTourMonde li").eq(i).css("margin-right", "2%"));
                }
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", $("#corps").width()*0.49*0.9);
            }
        }
    }

    else if (id == "iconeListe"){
        $('#iconeListe img').css('opacity','1');
        $('#iconeGalerie img').css('opacity','0.6');
        $('#listChroniquesTourMonde').addClass('vueListe');
        $('#listChroniquesTourMonde').removeClass('vueGalerie');
        $('#listChroniquesComposContemporains').addClass('vueListe');
        $('#listChroniquesComposContemporains').removeClass('vueGalerie'); 
        
        if (window.innerWidth <= 480) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                $("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%");
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", "inherit");
            }
        }

        else if (window.innerWidth > 720) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                $("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%");
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", "inherit");
            }
        }

        else if (window.innerWidth <= 720) {
            for (var i = 0; i < $("#listChroniquesTourMonde li").length; i = i+1) {
                $("#listChroniquesTourMonde li").eq(i).css("margin-right", "0%");
                $("#listChroniquesTourMonde li").eq(i).first().first().css("height", "inherit");
            }
        }
    }

    else{
        window.alert("Id selectionné n'existe pas");
    }
}