// ================ EFFET SCROLL POUR ANCRES =================
	$(function() {
	    $('a[href*=#]:not([href=#])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	            var target = $(this.hash);
	            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	            if (target.length) {
	                $('html,body').animate({
	                  scrollTop: target.offset().top
	                }, 800);
	                return false;
	            }
	        }
	    });
	});


// =================== DESIGN NAV ANCRE =================
	$('.linavMenu').click(function (){
		change_design_ancre_auChangementAncre($(this));
	});



	function change_design_ancre_auChangementAncre(linavMenuClique){
		$('.linavMenu').css('background-position',"0 0");
		linavMenuClique.css('background-position',"0 -19px");
		$('.linavMenu').css('font-weight',"normal");
		linavMenuClique.css('font-weight',"bold");

		$('.linavMenu').removeClass("active");
		linavMenuClique.addClass("active");

		// On change l'URL qui correspond au li cliqué
		window.location.hash = linavMenuClique.attr('href');
	}

	function change_design_ancre_Onload(){
		// contenuFinUrl => va récuperer toute la chaine de caractere qui se situe apres le dernier slash de l'url
		// ex : urlComplete = http://www.acyian.com/#accueil
		//		contenuFinUrl = #accueil
	    var contenuFinUrl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	    // Fait une boucle sur tous les 'a'
	    $("#navMenu ul li a").each(function(){
	    	// Pour tous les 'a', on enlève la class 'active'
	    	$(this).removeClass("active");
	    	// Si la chaine de caractère du href du 'a' courant est égale à la chaine de caractere contenuFinUrl
			if($(this).attr("href") == contenuFinUrl){
				// Rajoute la class 'active' et change son design
				$(this).addClass("active");
				change_design_ancre_auChangementAncre($(this));
			}
	    })
	}

	$(document).ready(function (){

		$('.linavMenu').click(function (){
			change_design_ancre_auChangementAncre($(this));
		});

		function cacheNavMenu(){
	    	if (window.innerWidth >= 768) {

				(function($){
					$.fn.UItoTop = function(options) {

				 		var defaults = {
				    			min: 598,
				    			inDelay:0,
				    			outDelay:0,
				      			containerID: 'navMenu'
				 		    },
				            settings = $.extend(defaults, options),
				            containerIDhash = '#' + settings.containerID;
									
						$(window).scroll(function() {
							var sd = $(window).scrollTop();
							if ( sd > settings.min ) {
								$(containerIDhash).fadeIn(settings.inDelay);
								// console.log("FADEIN: " + sd);
							}
							else {
								$(containerIDhash).fadeOut(settings.outDelay);
								// console.log("FADEOUT: " + sd);
							}
						});

						var sd = $(window).scrollTop();
						if ( sd > settings.min ) {
							$(containerIDhash).fadeIn(settings.inDelay);
						}
						
						else{
							$(containerIDhash).fadeOut(settings.outDelay);
						}

					};
				})(jQuery);
			$().UItoTop({ easingType: 'easeOutQuart' });

			}

			else{
				(function($){
					$.fn.UItoTop = function(options) {

				 		var defaults = {
				    			min: 598,
				    			inDelay:0,
				    			outDelay:0,
				      			containerID: 'navMenu'
				 		    },
				            settings = $.extend(defaults, options),
				            containerIDhash = '#' + settings.containerID;
									
						$(window).scroll(function() {
							$(containerIDhash).css('display','none');
						});

						$(containerIDhash).css('display','none');
					};
				})(jQuery);

			$().UItoTop({ easingType: 'easeOutQuart' });
	    	}
		};		

		window.onresize = function(event) {
		    // cacheNavMenu();   
		};

		window.onload = function(event) {  
	    	change_design_ancre_Onload();
	    	// cacheNavMenu();
		};
	});

	// Lorsqu'on tape l'URL à la main, on raffraichit le site
	$(window).bind( 'hashchange', function(e) {
		change_design_ancre_Onload(); 
	});


	//Au scroll, on cible la bonne ancre et on lui change son design
	// $( window ).scroll(function() {
	// 	var positionApresScroll = $(window).scrollTop();

	// 	var positionAncreMultipliciteCourants20emeS = $("#ancreMultipliciteCourants20emeS").offset().top;
	// 	var positionAncreGoutSonsColo = $("#ancreGoutSonsColo").offset().top;
	// 	var positionAncreAvisPublic = $("#ancreAvisPublic").offset().top;
	// 	var positionAncreTempsModernes = $("#ancreTempsModernes").offset().top;
	// 	var positionAncreMultipliciteStyles = $("#ancreMultipliciteStyles").offset().top;

	// 	if ($(window).height() + $(window).scrollTop() == $(document).height()) {
	//         change_design_ancre_auChangementAncre($("#ancreMultipliciteStyles"));
	//     }

	// 	else if (positionApresScroll < positionAncreGoutSonsColo) {
	// 		change_design_ancre_auChangementAncre($("#ancreMultipliciteCourants20emeS"));
	// 	}

	// 	else if (positionApresScroll < positionAncreAvisPublic) {
	// 		change_design_ancre_auChangementAncre($("#ancreGoutSonsColo"));
	// 	}
		
	// 	else if (positionApresScroll < positionAncreTempsModernes) {
	// 		change_design_ancre_auChangementAncre($("#ancreAvisPublic"));
	// 	}

	// 	else if (positionApresScroll < positionAncreMultipliciteStyles) {
	// 		change_design_ancre_auChangementAncre($("#ancreTempsModernes"));
	// 	}

	// 	else{
	// 		change_design_ancre_auChangementAncre($("#ancreMultipliciteStyles"));
	// 	}
	// });



//================ APPARITION SOMMAIRE =================
// $("#sommaireLink" ).click(function() {
// 	$("#linksSummary" ).toggle( "slow" );
// 	$("#sommaireLink").html("afficher");

	
// });

// if($("#linksSummary").css('display') == "none"){
// 		$("#sommaireLink").html("afficher");
// 	}

// 	else{
// 		$("#sommaireLink").html("masquer");
// 	}


$("#sommaireLink").click (function() {
	if($("#linksSummary").css('display') == "none"){
		$("#linksSummary").css('display','block');
		$("#sommaireLink").html("[ masquer ]");
	}

    else{
    	$("#linksSummary").css('display','none');
    	$("#sommaireLink").html("[ afficher ]");
    }
});



