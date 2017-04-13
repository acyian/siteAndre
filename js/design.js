function update_design_footer(){
    var widthContact = document.getElementById('contact').offsetWidth;
    var widthArticlesRecents = document.getElementById('articlesRecents').offsetWidth;
    var widthSitesDeReferences = document.getElementById('sitesDeReferences').offsetWidth;
    
    var widthCorps = $('#corps').width(); // largeur sans padding
    
    var leftSpace = widthCorps - widthSitesDeReferences - widthArticlesRecents - widthContact;
    
    if (leftSpace < 0) {
        console.log("Il n'y a pas assez d'espace pour afficher tous les éléments sur une même ligne"); // to remove.
    }
    
    var contactMarginRight = (2*leftSpace)/3;
    var widthArticlesRecents = leftSpace - contactMarginRight;
    document.getElementById("contact").style.marginRight = contactMarginRight + "px";
    document.getElementById("articlesRecents").style.marginRight = widthArticlesRecents + "px";    


    $( "#contact" ).prepend('<img src=' + window.location.protocol + '//' + window.location.host + '/' + 'siteAndre/images/ahautot.jpg>');
   
}
// <img src=\"' + window.location.protocol + '//' + window.location.host + '/' + 'siteAndre/images/ahautot.jpg>

function update_design(){
    update_design_footer();
}


window.onresize = function() {
    update_design();
};