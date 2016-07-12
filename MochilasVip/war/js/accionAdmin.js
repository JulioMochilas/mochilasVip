$(document).ready(function(){
	$("#bloquearAccionCiudad").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find('input:radio[name = idLugar]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpoLugar").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "bloquearAccionCiudad", "id": id},
            success: function(data){
            	$("#subcuerpoLugar").html(data);
            }
        });
	});
	$("#bloquearAccionPaquete").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find('input:radio[name = idPlato]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "bloquearAccionPaquete", "id": id},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#bloquearAccionAdmin").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		email = $form.find('input:radio[name = emailAdmin]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "bloquearAccionAdmin", "email": email},
            success: function(data){
            	$("#subcuerpoAdmin").html(data);
            }
        });
	});
	$("#bloquearAccionCliente").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		email = $form.find('input:radio[name = emailAdmin]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "bloquearAccionCliente", "email": email},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	$("#borrarAccionCliente").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		email = $form.find('input:radio[name = emailCliente]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpocliente").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "borrarCliente", "email": email},
            success: function(data){
            	$("#subcuerpocliente").html(data);
            }
        });
	});
	
	$("#borrarAccionAdmin").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		email = $form.find('input:radio[name = emailAdmin]:checked').val(),
	    url = $form.attr( "action" );
		$("#bodyborrarAccionAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "borrarAdmin", "email": email},
            success: function(data){
            	$("#bodyborrarAccionAdmin").html(data);
            }
        });
	});
	$("#borrarAccionPaquete").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find('input:radio[name = id]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpomenu").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "borrarPaquete", "id": id},
            success: function(data){
            	$("#subcuerpomenu").html(data);
            }
        });
	});
	$("#borrarAccionHospedaje").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		id = $form.find('input:radio[name = id]:checked').val(),
	    url = $form.attr( "action" );
		$("#subcuerpoBebida").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: url,
            data: {"accion": "borrarAccionHospedaje", "id": id},
            success: function(data){
            	$("#subcuerpoBebida").html(data);
            }
        });
	});
});