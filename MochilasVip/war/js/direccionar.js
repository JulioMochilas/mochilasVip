$(document).ready(function(){
	var i = 1;
	function slider(){
		switch (i % 4) {
		case 1:
			$("#contador").html('ESPERE PORFAVOR.....');
			break;
		case 2:
			$("#contador").html('ESPERE PORFAVOR.....');
			break;
		case 3:
			$("#contador").html('ESPERE PORFAVOR.....');
			break;
		default:
			window.location="../";
			setTimeout('document.location.reload()', 500);
			break;
		}
		i++;
	}
	setInterval(function(){slider()}, 500);
});