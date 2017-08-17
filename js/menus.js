//================ APPARITION MENUS RESPONSIVE =================
var isLeftMenuOpen = false;
var isRightMenuOpen = false;

function open_menu_gauche_onclick() {
    isLeftMenuOpen = true;
    // le menu Physique est ouvert
    $("#menuGauche").clearQueue().animate({
        left : '0'
    })
    $("#miniMenuGauche").clearQueue().animate({
        left : '159px'
    })

    $("#miniMenuGauche").css('background','transparent');
    $('#corps').addClass('changed'); // Pour appliquer css sur ::after
    $("#miniMenuGauche .close").css('display','block');
    $("#miniMenuGauche .open").css('display','none');      
}

function open_menu_droite_onclick() {
    isRightMenuOpen = true;
    // le menu Musique est ouvert
    $("#menuDroite").clearQueue().animate({
        right : '0'
    })
    $("#miniMenuDroite").clearQueue().animate({
        right : '159px'
    })

    $("#miniMenuDroite").css('background','transparent');
    $('#corps').addClass('changed'); // Pour appliquer css sur ::after
    $("#miniMenuDroite .close").css('display','block');
    $("#miniMenuDroite .open").css('display','none');   
}


function close_menu_gauche_onclick() {
    isLeftMenuOpen = false;
    // le menu Physique est fermé
    $("#menuGauche").clearQueue().animate({
        left : '-159px'
    })
    $("#miniMenuGauche").clearQueue().animate({
        left : '0'
    })

    $("#miniMenuGauche").css('background','#27282a');
    $("#miniMenuGauche .close").css('display','none');
    $("#miniMenuGauche .open").css('display','block');
    
    if (isLeftMenuOpen == false && isRightMenuOpen == false) {
        $('#corps').removeClass('changed');
    }
}

function close_menu_droite_onclick() {
    isRightMenuOpen = false;
    // le menu Musique est ouvert
    $("#menuDroite").clearQueue().animate({
        right : '-159px'
    })
    $("#miniMenuDroite").clearQueue().animate({
        right : '0'
    })

    $("#miniMenuDroite").css('background','#27282a');
    $("#miniMenuDroite .close").css('display','none');
    $("#miniMenuDroite .open").css('display','block');
     
    if (isLeftMenuOpen == false && isRightMenuOpen == false) {
        $('#corps').removeClass('changed');
    }
}

function open_menu_gauche_onresize() {
    isLeftMenuOpen = true;
    // menu Physique
    $("#menuGauche").css('left','0');
    $("#miniMenuGauche").css('left','159px');
    
    $("#miniMenuGauche").css('background','transparent');
    $('#corps').addClass('changed');
    $("#miniMenuGauche .close").css('display','block');
    $("#miniMenuGauche .open").css('display','none');
}

function open_menu_droite_onresize() {
    isRightMenuOpen = true;
    // menu Musique
    $("#menuDroite").css('right','0');
    $("#miniMenuDroite").css('right','159px');
    
    $("#miniMenuDroite").css('background','transparent');
    $('#corps').addClass('changed');
    $("#miniMenuDroite .close").css('display','block');
    $("#miniMenuDroite .open").css('display','none');
     
}

function close_menu_gauche_onresize() {
    isLeftMenuOpen = false;
    // menu Physique
    $("#menuGauche").css('left','-159px');
    $("#miniMenuGauche").css('left','0');
    
    $("#miniMenuGauche").css('background','#27282a');
    $("#miniMenuGauche .close").css('display','none');
    $("#miniMenuGauche .open").css('display','block');
    
    if (isLeftMenuOpen == false && isRightMenuOpen == false) {
        $('#corps').removeClass('changed');
    }
}

function close_menu_droite_onresize() {
    isRightMenuOpen = false;
    // menu Musique
    $("#menuDroite").css('right','-159px');
    $("#miniMenuDroite").css('right','0');
    
    $("#miniMenuDroite").css('background','#27282a');
    $("#miniMenuDroite .close").css('display','none');
    $("#miniMenuDroite .open").css('display','block');
    
    if (isLeftMenuOpen == false && isRightMenuOpen == false) {
        $('#corps').removeClass('changed');
    }
}


function remet_menu_initial() {
    $("#menuGauche").css('left','0');
    $("#menuDroite").css('right','0');
    $('#corps').removeClass('changed');
    isLeftMenuOpen = false;
    isRightMenuOpen = false;
}


function open_or_close_menu_gauche_onresize(){
    if (window.innerWidth <= 1024) {
        if (isLeftMenuOpen == true) {
            open_menu_gauche_onresize();
        }
        else {
            close_menu_gauche_onresize(); 
        }
    }
    else {
        remet_menu_initial();
    }
}

function open_or_close_menu_droite_onresize(){
    if (window.innerWidth <= 1024) {
        if (isRightMenuOpen == true) {
            open_menu_droite_onresize();
        }
        else {
            close_menu_droite_onresize(); 
        }
    }
    else {
        remet_menu_initial();
    }
}

function open_or_close_menu_gauche_onclick(){
    if (window.innerWidth <= 1024) {
        if (isLeftMenuOpen == false){
            open_menu_gauche_onclick();            
        } 
        else{        
           close_menu_gauche_onclick(); 
        }
    }
    else{
        remet_menu_initial();
    }
}

function open_or_close_menu_droite_onclick(){
    if (window.innerWidth <= 1024) {
        if (isRightMenuOpen == false){
            open_menu_droite_onclick();            
        } 
        else{        
           close_menu_droite_onclick(); 
        }
    }
    else{
        remet_menu_initial();
    }
}



function set_onclick_events() {
    // menu Physique
    $('#miniMenuGauche .open').click(function(){
        open_or_close_menu_gauche_onclick();
        close_menu_droite_onclick();
    });
    $('#miniMenuGauche .close').click(function(){
        open_or_close_menu_gauche_onclick();
    });

    // menu Musique
    $('#miniMenuDroite .open').click(function(){
        open_or_close_menu_droite_onclick();
        close_menu_gauche_onclick();
    });
     
    $('#miniMenuDroite .close').click(function(){
        open_or_close_menu_droite_onclick();
    });

    $('#corps').click(function(){   
        var widthSameValueThanCSS = window.innerWidth;
        if (widthSameValueThanCSS <= 1024) {
            close_menu_droite_onclick();
            close_menu_gauche_onclick();
        }  
    });
}


//========== REGLAGES PADDING ET WIDTH POUR LE CORPS DU SITE ==========
function design_corps_responsive() {
    // width ecran a utiliser pour les calculs de taille des elements
    var widthScreen = $(window).width();
    var padding = widthScreen*0.05; // 5% of width

    // largeur ecran qui est utilisé par le CSS notamment par les media queries = window.innerWidth
    var widthSameValueThanCSS = window.innerWidth;
    if (widthSameValueThanCSS <= 1024) {
        
        var seuilMinimum = $(".menuMinimizer").width() * 1.4;

        if (padding < seuilMinimum) {
            padding = seuilMinimum;
        }

        $("#corps").width(widthScreen - 2*padding);
        
    }
    else {
        $("#corps").width(widthScreen*0.6);
    }

    $("#corps").css("padding-left" , padding + "px");
    $("#corps").css("padding-right" , padding + "px");
}


//========== REGLAGES POUR AJOUT DE SCROLL BAR POUR MENUS (RESPONSIVE) ==========
function design_menus_responsive() {
    // height ecran a utiliser pour les calculs de taille des elements
    var heightScreen = $(window).height();

    // SI hauteur ecran plus petites que 680px
    // hauteur ecran qui est utilisé par le CSS notamment par les media queries = window.innerHeight
    var heightSameValueThanCSS = window.innerHeight;

    

    if ((heightSameValueThanCSS > 680) & ($(window).width() > 1024)) {
        $("h1").css("margin-bottom" , "60px");
        $(".menu").css("overflow-y" , "initial"); 
        $(".menu").css("display" , "table"); 

        $("#menuPrincipalMusique").width($(window).width()*0.15);
    }

    if ((heightSameValueThanCSS > 680) & ($(window).width() < 1024)) {
        $("h1").css("margin-bottom" , "60px");
        $(".menu").css("overflow-y" , "initial"); 
        $(".menu").css("display" , "table"); 

        $("#menuPrincipalMusique").css("width" , "155px");
    }

    if ((heightSameValueThanCSS < 680) & ($(window).width() > 1024)) {
        $("h1").css("margin-bottom" , "20px");
        $(".menu").css("overflow-y" , "scroll"); 
        $(".menu").css("display" , "flex"); 
        
        $("#menuPrincipalMusique").width($(window).width()*0.15);
    }

    if ((heightSameValueThanCSS < 680) & ($(window).width() < 1024)) {
        $("h1").css("margin-bottom" , "20px");
        $(".menu").css("overflow-y" , "scroll"); 
        $(".menu").css("display" , "flex"); 
        
        $("#menuPrincipalMusique").css("width" , "155px");
    }
}

function mini_menus_after_loading() {
    set_onclick_events();
    design_corps_responsive();
    design_menus_responsive();
}