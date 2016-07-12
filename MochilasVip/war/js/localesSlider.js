$(document).ready(function(){
	var j = 0;
	function col1(){
		switch (j % 4) {
		case 1:
			$("#col1").html('<img class="imgLocales" src="img/local1.jpg">');
			break;
		case 2:
			$("#col1").html('<img class="imgLocales" src="img/local2.jpg">');
			break;
		case 3:
			$("#col1").html('<img class="imgLocales" src="img/local3.jpg">');
			break;
		default:
			$("#col1").html('<img class="imgLocales" src="img/local4.jpg">');
			break;
		}
		j++;
	}
	setInterval(function(){col1()}, 4000);
});