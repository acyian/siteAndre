//================ GESTION LISTE CHRONIQUES =================
// ============== TRI ==============
// Inverse la liste des chroniques (ici la + recente à la + ancienne au lieu de la + ancienne a la plus recente)
	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniques').html($('#listChroniques').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesTourMonde').html($('#listChroniquesTourMonde').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesBilletsHumeur').html($('#listChroniquesBilletsHumeur').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesComposContemporains').html($('#listChroniquesComposContemporains').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesCompoOublies').html($('#listChroniquesCompoOublies').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesInterpretesActuels').html($('#listChroniquesInterpretesActuels').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesGenresMusicaux').html($('#listChroniquesGenresMusicaux').find('li').get().reverse());
	  });
	})

	$( "#triOptions select" ).change(function() {
	  $( "#triOptions select option:selected" ).each(function() {
	     $('#listChroniquesFaitsDivers').html($('#listChroniquesFaitsDivers').find('li').get().reverse());
	  });
	})

// ============= FILTRE =============
// RUBRIQUE CHRONIQUES
// Change le design en fonction du thème choisi
	$("#filtreOptionsMusique").change(function(){ 

		filtreThemes = $('#sortByFiltre').val(); 

		switch (filtreThemes) {
			/*Chroniques*/
			case 'tousThemesChroniques':
				$(".THbilletHumeur").css('display', 'block');
				$(".THtourMonde").css('display', 'block');
				$(".THcomposContemporains").css('display', 'block');
				$(".THcomposNegliges").css('display', 'block');
				$(".THinterpretesActuels").css('display', 'block');
				$(".THgenresMusicaux").css('display', 'block');
				$(".THfaitsDivers").css('display', 'block');
				break;
			case 'billetsHumeurs':
				$(".THbilletHumeur").css('display', 'block');
				
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'tourMonde':
				$(".THtourMonde").css('display', 'block');
				
				$(".THbilletHumeur").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'composContemporains':
				$(".THcomposContemporains").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'composNegliges':
				$(".THcomposNegliges").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'interpretesActuels':
				$(".THinterpretesActuels").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'genresMusicaux':
				$(".THgenresMusicaux").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'faitsDivers':
				$(".THfaitsDivers").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposNegliges").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				break;
			default:
				window.alert("La categorie " + filtreThemes + " a un souci. Régler problème!");
		}

		return false; 
	});

// RUBRIQUE CHRONIQUES EPARSES
// Change le design en fonction du thème choisi
	$("#filtreOptionsPhysique").change(function(){ 

		filtreThemes = $('#sortByFiltre').val(); 

		switch (filtreThemes) {
			/*Chroniques Eparses*/
			case 'tousThemesChroniquesEparses':
				$(".THphys").css('display', 'block');
				$(".THmath").css('display', 'block');
				$(".THinfo").css('display', 'block');
				break;
			case 'phys':
				$(".THphys").css('display', 'block');
				
				$(".THmath").css('display', 'none');
				$(".THinfo").css('display', 'none');
				break;
			case 'math':
				$(".THmath").css('display', 'block');
				
				$(".THphys").css('display', 'none');
				$(".THinfo").css('display', 'none');
				break;
			case 'info':
				$(".THinfo").css('display', 'block');

				$(".THphys").css('display', 'none');
				$(".THmath").css('display', 'none');
				break;
			default:
				window.alert("La categorie " + filtreThemes + " a un souci. Régler problème!");
		}

		return false; 
	});


// RUBRIQUE TOUR DU MONDE
// Change la hauteur des li
function design_tour_du_monde_height_margin_li() {
	if ($('#listChroniquesTourMonde').hasClass('vueGalerie')){
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
}

// Change le design en fonction du thème choisi
	
	// Permet de sauvegarder l'ordre initial des chroniques "Tour du monde"
	var sauvegardeLiChroniquesTourDuMonde;
	$( document ).ready(function() {
		sauvegardeLiChroniquesTourDuMonde = $('#listChroniquesTourMonde').html();
	});
	
	$("#filtreOptionsOrdreAlpha").change(function(){ 

		filtreOrdreAlpha = $('#sortByFiltreOrdreAlpha').val(); 

		switch (filtreOrdreAlpha) {
			case 'defaut':
				$('#listChroniquesTourMonde').html(sauvegardeLiChroniquesTourDuMonde);
				break;
			case 'croissant':
				function first_li_plus_pt_que_2nd_li(firstLi, secondLi){
				 	// compare les li qui contiennent un "a" par ordre lexical 
				 	// si 1er li avec a + pt que 2nd li avec a 
				    if ($(firstLi).find('a').text() < $(secondLi).find('a').text()) {
				    	return -1; //on repond -1 qui signifie oui c'est + pt
			    	}
			    	else {
			    		return 1; //sinon on renvoi 1 qui signifie non c'est + gd
			    	}
				}
				// reclasse par ordre croissant les a des li
				$("#listChroniquesTourMonde li").sort(first_li_plus_pt_que_2nd_li).appendTo('#listChroniquesTourMonde');
				break;
			case 'decroissant':
				function first_li_plus_gd_que_2nd_li(firstLi, secondLi){
					// compare les li qui contiennent un "a" par ordre lexical 
				 	// si 1er li avec a + gd que 2nd li avec a 
				    if ($(firstLi).find('a').text() > $(secondLi).find('a').text()) {
				    	return -1; //on repond -1 qui signifie oui c'est + gd
			    	}
			    	else {
			    		return 1; //sinon on renvoi 1 qui signifie non c'est - gd
			    	}    
				}
				// reclasse par ordre decroissant les a des li
				$("#listChroniquesTourMonde li").sort(first_li_plus_gd_que_2nd_li).appendTo('#listChroniquesTourMonde');
				break;
			default:
				window.alert("La categorie " + filtreOrdreAlpha + " a un souci. Régler problème!");
		}

		design_tour_du_monde_height_margin_li();

		return false; 
	});


// RUBRIQUE COMPOSITEURS CONTEMPORAINS
// Change le design en fonction du thème choisi
	
	// Permet de sauvegarder l'ordre initial des chroniques "Compositeurs contemporains"
	var sauvegardeLiChroniquesComposContemporains;
	$( document ).ready(function() {
		sauvegardeLiChroniquesComposContemporains = $('#listChroniquesComposContemporains').html();
	});
	
	$("#filtreOptionsOrdreAlphaNameAndFirstName").change(function(){ 

		filtreOrdreAlphaNameAndFirstName = $('#sortByFiltreOrdreAlphaNameAndFirstName').val(); 

		switch (filtreOrdreAlphaNameAndFirstName) {
			case 'defaut':
				$('#listChroniquesComposContemporains').html(sauvegardeLiChroniquesComposContemporains);
				break;
			case 'noms':
				function first_li_plus_pt_que_2nd_li(firstLi, secondLi){
				    if ($(firstLi).find('.nameCompoContemporain').text() < $(secondLi).find('.nameCompoContemporain').text()) {
				    	return -1;
			    	}
			    	else {
			    		return 1;
			    	}
				}
				$("#listChroniquesComposContemporains li").sort(first_li_plus_pt_que_2nd_li).appendTo('#listChroniquesComposContemporains');
				break;
			case 'prenoms':
				function first_li_plus_gd_que_2nd_li(firstLi, secondLi){
				    if ($(firstLi).find('.firstNameCompoContemporain').text() < $(secondLi).find('.firstNameCompoContemporain').text()) {
				    	return -1;
			    	}
			    	else {
			    		return 1;
			    	}    
				}
				$("#listChroniquesComposContemporains li").sort(first_li_plus_gd_que_2nd_li).appendTo('#listChroniquesComposContemporains');
				break;
			default:
				window.alert("La categorie " + filtreOrdreAlphaNameAndFirstName + " a un souci. Régler problème!");
		}

		return false; 
	});

window.onresize = function() {
    changements_generaux_onresize();
    design_tour_du_monde_height_margin_li();
};