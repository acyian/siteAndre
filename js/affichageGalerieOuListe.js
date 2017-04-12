//================ GESTION AFFICHAGE CHRONIQUES =================
// ============== AFFICHAGE TOUR DU MONDE ==============
// Ajoute class et remove class pour affichage en liste ou en galerie d'images
function changeClassProduits(id){
    if (id == "iconeGalerie"){
        $('#iconeGalerie img').css('opacity','1');
        $('#iconeListe img').css('opacity','0.6');
        $('#listChroniquesTourMonde').addClass('vueGalerie');
        $('#listChroniquesTourMonde').removeClass('vueListe');
        $('#listChroniquesComposContemporains').addClass('vueGalerie');
        $('#listChroniquesComposContemporains').removeClass('vueListe');
    }

    else if (id == "iconeListe"){
        $('#iconeListe img').css('opacity','1');
        $('#iconeGalerie img').css('opacity','0.6');
        $('#listChroniquesTourMonde').addClass('vueListe');
        $('#listChroniquesTourMonde').removeClass('vueGalerie');
        $('#listChroniquesComposContemporains').addClass('vueListe');
        $('#listChroniquesComposContemporains').removeClass('vueGalerie'); 
    }

    else{
        window.alert("Id selectionné n'existe pas");
    }
}