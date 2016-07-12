$(document).ready(function(){
	
	$("#ciudadIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "ciudad"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#adminIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "admin"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#paqueteIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "paquete"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#hospedajeIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "hospedaje"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#reservaIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "reserva"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#clienteIndex").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "cliente"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#agregarAdmin").click(function(event) {
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "agregarAdmin"},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#bloquearAdmin").click(function(event) {
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "bloquearAdmin"},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#borrarAdmin").click(function(event) {
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "borrarAdmin"},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#mostrarAdmin").click(function(event) {
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "mostrarAdmin"},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#editarAdmin").click(function(event) {
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/administrador",
            data: {"admin": "editarAdmin"},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
});