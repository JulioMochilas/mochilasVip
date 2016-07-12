$(document).ready(function(){
	
	var i = 0;
	function slider(){
		switch (i % 3) {
		case 1:
			$("#slider").html('<img class="cambio" src="img/slider1.png">');
			break;
		case 2:
			$("#slider").html('<img class="cambio" src="img/slider2.png">');
			break;
		default:
			$("#slider").html('<img class="cambio" src="img/slider3.png">');
			break;
		}
		i++;
	}
	setInterval(function(){slider()}, 4000);
	
	
	$("#cambiar_Pass").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "cambiar_Pass"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#cambiar_Nombre").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "cambiar_Nombre"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#cambiar_Paterno").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "cambiar_Paterno"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#cambiar_Materno").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "cambiar_Materno"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#menu_Usuario").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "inicio"},
            success: function(data){
            	$("#cuerpo").html("Menu Admin");
            }
        });
	});
	
	$("#misReservas").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "cambio",
            data: {"rest": "misReservas"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#eliminarReservas").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "eliminarReservas"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$("#sesionAdmin").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "indexAdministrador"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	$.ajax({
        type: "POST",
        url: "agencia",
        data: {"rest": "inicio"},
        success: function(data){
        	$("#cuerpo").html(data);
        }
    });
	// Attach a submit handler to the form
	$("#inicio").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "inicio"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#nosotros").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "nosotros"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#menu").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "menu"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#ofertas").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "ofertas"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#hoteles").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "hoteles"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#eventos").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "eventos"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#reservas").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "reservas"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#registro").click(function(event) {
		
		$.ajax({	
            type: "POST",
            url: "agencia",
            data: {"rest": "registro"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#salir").click(function(event) {
		
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "salir"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#Agregar-Imagen").click(function(event) {
		alert("dfdgdgddg");
		$.ajax({
            type: "POST",
            url: "agencia",
            data: {"rest": "Agregar-Imagen"},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
});