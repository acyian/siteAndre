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
	$("#filtreOptions").change(function(){ 

		filtreThemes = $('#sortByFiltre').val(); 

		switch (filtreThemes) {
			case 'tousThemes':
				$(".THbilletHumeur").css('display', 'block');
				$(".THtourMonde").css('display', 'block');
				$(".THcomposContemporains").css('display', 'block');
				$(".THcomposOublies").css('display', 'block');
				$(".THinterpretesActuels").css('display', 'block');
				$(".THgenresMusicaux").css('display', 'block');
				$(".THfaitsDivers").css('display', 'block');
				break;
			case 'billetsHumeurs':
				$(".THbilletHumeur").css('display', 'block');
				
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposOublies").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'tourMonde':
				$(".THtourMonde").css('display', 'block');
				
				$(".THbilletHumeur").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposOublies").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'composContemporains':
				$(".THcomposContemporains").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposOublies").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'composOublies':
				$(".THcomposOublies").css('display', 'block');

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
				$(".THcomposOublies").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'genresMusicaux':
				$(".THgenresMusicaux").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposOublies").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THfaitsDivers").css('display', 'none');
				break;
			case 'faitsDivers':
				$(".THfaitsDivers").css('display', 'block');

				$(".THbilletHumeur").css('display', 'none');
				$(".THtourMonde").css('display', 'none');
				$(".THcomposContemporains").css('display', 'none');
				$(".THcomposOublies").css('display', 'none');
				$(".THinterpretesActuels").css('display', 'none');
				$(".THgenresMusicaux").css('display', 'none');
				break;
			default:
				window.alert("La categorie " + filtreThemes + " a un souci. Régler problème!");
		}

		return false; 
	});


// RUBRIQUE TOUR DU MONDE
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