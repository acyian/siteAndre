function update_design_footer(){
    var widthContact = document.getElementById('contact').offsetWidth;
    var widthArticlesRecents = document.getElementById('articlesRecents').offsetWidth;
    var widthSitesDeReferences = document.getElementById('sitesDeReferences').offsetWidth;
    
    var widthCorps = $('#corps').width(); // largeur sans padding
    
    var leftSpace = widthCorps - widthSitesDeReferences - widthArticlesRecents - widthContact;
    
    if (leftSpace < 0) {
        console.log("Il n'y a pas assez d'espace pour afficher tous les éléments sur une même ligne"); // to remove.
    }

    if (window.innerWidth < 1024) {
        document.getElementById("contact").style.marginRight = 0 + "px";
        document.getElementById("articlesRecents").style.marginRight = 0 + "px";  
    }
    
    else if (window.innerWidth >= 1024) {
        var contactMarginRight = (2*leftSpace)/3;
        var widthArticlesRecents = leftSpace - contactMarginRight;
        document.getElementById("contact").style.marginRight = contactMarginRight + "px";
        document.getElementById("articlesRecents").style.marginRight = widthArticlesRecents + "px";  
    }  
}

function update_design(){
    update_design_footer();
}

function changements_generaux_onresize() {
    update_design();
    open_or_close_menu_gauche_onresize();
    open_or_close_menu_droite_onresize();
    design_corps_responsive();
    design_menus_responsive();
    design_tour_du_monde_height_margin_li();
}

window.onresize = function() {
    changements_generaux_onresize();
};