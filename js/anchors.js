// ================ EFFET SCROLL POUR ANCRES =================
//Au scroll, on cible la bonne ancre et on lui change son design
$(window).scroll(function(){
    // var widthScreen = $(window).width();
    // $(".menu").width(widthScreen*0.15);
        
    var scrollPos = $(document).scrollTop();
    
    $('#menuLateralAncres ul a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        var title = refElement.children().first();
        var paddingTopTitle = parseInt( title.css("paddingTop") );
        
        if (refElement.position().top - paddingTopTitle <= scrollPos 
            && refElement.position().top + refElement.height() + paddingTopTitle > scrollPos){

            $('#menuLateralAncres ul li a').removeClass("active");
            $('#menuLateralAncres ul li a').css('background-position',"0 0");
            currLink.addClass("active");
            currLink.css('background-position',"0 -19px");
            $('#menuLateralAncres ul li a').css('font-weight',"bold");
        }

        else{
            currLink.removeClass("active");
            currLink.css('background-position',"0 0");
        }    
    });
});
