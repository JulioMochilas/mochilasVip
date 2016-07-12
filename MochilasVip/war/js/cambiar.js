$(document).ready(function(){
	$("#cambiarPass").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		pass = $form.find( "input[name='pass']" ).val(),
		nuevoPass1 = $form.find( "input[name='nuevoPass1']" ).val(),
		nuevoPass2 = $form.find( "input[name='nuevoPass2']" ).val(),
	    url = $form.attr( "action" );
		if(nuevoPass1 != nuevoPass2)
			alert("Su contraseña no es igual");
		else{
			$("#cuerpo").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
			$.ajax({
	            type: "post",
	            url: url,
	            data: {"rest": "cambiarPass","pass": pass, "nuevoPass1": nuevoPass1},
	            success: function(data){
	            	$("#cuerpo").html(data);
	            }
	        });
		}
	});
	$("#cambiarPaterno").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		paterno = $form.find( "input[name='paterno']" ).val(),
	    url = $form.attr( "action" );
		$("#cuerpo").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "cambiarPaterno","paterno": paterno},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#cambiarNombre").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombre']" ).val(),
	    url = $form.attr( "action" );
		$("#cuerpo").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "cambiarNombre","nombre": nombre},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#cambiarMaterno").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		materno = $form.find( "input[name='materno']" ).val(),
	    url = $form.attr( "action" );
		$("#cuerpo").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "cambiarMaterno","materno": materno},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#eliminarReserva").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		idReserva = $form.find( "input[name='idReserva']" ).val(),
	    url = $form.attr( "action" );
		$("#cuerpo").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "eliminarReserva","idReserva": idReserva},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#buscarAdministrador").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		email = $form.find( "input[name='email']" ).val(),
	    url = $form.attr( "action" );
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "buscarAdministrador","email": email},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#buscarPaquete").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find( "input[name='id']" ).val(),
	    url = $form.attr( "action" );
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "buscarPaquete","id": id},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#editarPaqueteAccion").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombrePaquete']" ).val(),
		tipo = $form.find( "select[name='tipo']" ).val(),
		ciudad = $form.find( "select[name='ciudad']" ).val(),
		numeroPersonas = $form.find( "input[name='numeroPersonas']" ).val(),
		descripcion = $form.find( "textarea[name='descripcion']" ).val(),
		precio = $form.find( "input[name='precio']" ).val(),
		fecha = $form.find( "input[name='fecha']" ).val(),
		hora = $form.find( "select[name='hora']" ).val(),

		url = $form.attr( "action" );
		$.ajax({
			type: "post",
			url: url,
			data: {"rest": "editarPaqueteAccion","nombre": nombre,"tipo": tipo,"ciudad":ciudad,"numeroPersonas":numeroPersonas,"descripcion": descripcion,
				"precio": precio,"fecha":fecha,"hora":hora},
				success: function(data){
					$("#subcuerpomenu").html(data);
				}
		});
	});
	$("#editarHospedajeAccion").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombre']" ).val(),
		precio = $form.find( "input[name='precio']" ).val(),
		tipo = $form.find( "input[name='tipo']" ).val(),
		descripcion = $form.find( "textarea[name='descripcion']" ).val(),
	    url = $form.attr( "action" );
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "editarHospedajeAccion","nombre": nombre,"precio": precio
            	,"tipo": tipo,"descripcion": descripcion},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	$("#buscarHospedaje").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find( "input[name='id']" ).val(),
	    url = $form.attr( "action" );
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "buscarHospedaje","id": id},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
	$("#editarAdministradorAccion").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombre']" ).val(),
		paterno = $form.find( "input[name='paterno']" ).val(),
		materno = $form.find( "input[name='materno']" ).val(),
		dni = $form.find( "input[name='dni']" ).val(),
	    url = $form.attr( "action" );
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "editarAdministradorAccion","nombre": nombre,"paterno": paterno
            	,"materno": materno,"dni": dni},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
});