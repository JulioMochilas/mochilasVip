$(document).ready(function(){
	var j = 0;
	function menucuerpoIndex(){
		switch (j % 4) {
		case 1:
			$("#menucuerpoIndex").html('<img class="cambio" src="img/of_rocoto.jpg">');
			break;
		case 2:
			$("#menucuerpoIndex").html('<img class="cambio" src="img/of_triple.jpg">');
			break;
		case 3:
			$("#menucuerpoIndex").html('<img class="cambio" src="img/of_chicharron.jpg">');
			break;
		default:
			$("#menucuerpoIndex").html('<img class="cambio" src="img/of_adobo.jpg">');
			break;
		}
		j++;
	}
	setInterval(function(){menucuerpoIndex()}, 4000);
});