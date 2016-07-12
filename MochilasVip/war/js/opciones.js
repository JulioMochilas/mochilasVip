$(document).ready(function(){
	$("#borrarCliente").click(function(event) {
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "borrarCliente"},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	
	$("#bloquearCiudad").click(function(event) {
		$("#subcuerpoLugar").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "bloquearCiudad"},
            success: function(data){
            	$("#subcuerpoLugar").html(data);
            }
        });
	});
	$("#bloquearPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "bloquearPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#bloquearCliente").click(function(event) {
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "bloquearCliente"},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	$("#listarCliente").click(function(event) {
		
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "listarCliente"},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	$("#historialCliente").click(function(event) {
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "historialCliente"},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	$("#agregarCiudad").click(function(event) {
		$("#subcuerpoLugar").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "agregarCiudad"},
            success: function(data){
            	$("#subcuerpoLugar").html(data);
            }
        });
	});
	$("#agregarPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "agregarPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#borrarPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "borrarPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#editarPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "editarPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	
	$("#listarPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "listarPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	
	$("#imagenPaquete").click(function(event) {
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "imagenPaquete"},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	
	$("#agregarHospedaje").click(function(event) {
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "agregarHospedaje"},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	$("#borrarHospedaje").click(function(event) {
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "borrarHospedaje"},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	$("#editarHospedaje").click(function(event) {
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "editarHospedaje"},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	
	$("#listarHospedaje").click(function(event) {
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "listarHospedaje"},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	
	$("#imagenHospedaje").click(function(event) {
			$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
			$.ajax({
	            type: "POST",
	            url: "/cambio",
	            data: {"rest": "imagenHospedaje"},
	            success: function(data){
	            	$("#subcuerpoBebida").html(data);
	            }
	        });
		});
	
	$("#borrarReserva").click(function(event) {
		$("#subcuerpoReserva").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "borrarReserva"},
            success: function(data){
            	$("#subcuerpoReserva").html(data);
            }
        });
	});
	
	
	
	$("#editarReserva").click(function(event) {
		$("#subcuerpoReserva").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "editarReserva"},
            success: function(data){
            	$("#subcuerpoReserva").html(data);
            }
        });
	});
	
	
	$("#listarReserva").click(function(event) {
		$("#subcuerpoReserva").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "listarReserva"},
            success: function(data){
            	$("#subcuerpoReserva").html(data);
            }
        });
	});
	
	
	$("#listarCiudad").click(function(event) {
		$("#subcuerpoLugar").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cambio",
            data: {"rest": "listarCiudad"},
            success: function(data){
            	$("#subcuerpoLugar").html(data);
            }
        });
	});
	
	
});