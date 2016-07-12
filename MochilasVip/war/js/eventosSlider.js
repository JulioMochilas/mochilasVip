$(document).ready(function(){
	var j = 0;
	function colm1(){
		switch (j % 3) {
		case 1:
			$("#colm1").html('<img class="imgEvento" src="img/evento1.jpg">');
			break;
		case 2:
			$("#colm1").html('<img class="imgEvento" src="img/evento2.jpg">');
			break;
		case 3:
			$("#colm1").html('<img class="imgEvento" src="img/evento3.jpg">');
			break;
		}
		j++;
	}
	setInterval(function(){colm1()}, 4000);
});