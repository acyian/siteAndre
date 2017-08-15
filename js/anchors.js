
$(window).scroll(function(){
    var widthScreen = $(window).width();
    $(".menu").width(widthScreen*0.15);
        
        
    var scrollPos = $(document).scrollTop();
    //$('#menuLateralAncres ul li').removeClass("active");
    
    $('#menuLateralAncres ul a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        var title = refElement.children().first();
        var marginTopTitle = parseInt( title.css("paddingTop") );
        
        if (refElement.position().top - marginTopTitle <= scrollPos 
            && refElement.position().top + refElement.height() + marginTopTitle > scrollPos) 
        {
            $('#menuLateralAncres ul li a').removeClass("active");
            $('#menuLateralAncres ul li a').css('background-position',"0 0");
            currLink.addClass("active");
            currLink.css('background-position',"0 -19px");
        }
        else{
            currLink.removeClass("active");
            currLink.css('background-position',"0 0");
        }    
    });
    
});
