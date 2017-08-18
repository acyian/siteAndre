//================ APPARITION SOMMAIRE =================
$(".sommaireLink").click (function() {
	if($(".linksSummary").css('display') == "none"){
		$(".linksSummary").css('display','block');
		$(".sommaireLink").html("[ masquer ]");
	}

    else{
    	$(".linksSummary").css('display','none');
    	$(".sommaireLink").html("[ afficher ]");
    }
});