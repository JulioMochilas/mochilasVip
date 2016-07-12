$(document).ready(function(){
	
	$("#filtroTodos").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cliente",
            data: {"rest": "filtroTodos"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#filtroCiudad").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cliente",
            data: {"rest": "filtroCiudad"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#filtroTipo").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cliente",
            data: {"rest": "filtroTipo"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	$("#filtroCosto").click(function(event) {
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "POST",
            url: "/cliente",
            data: {"rest": "filtroCosto"},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	
	$("#buscarPaqueteTipo").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		tipo = $form.find( "select[name='tipo']" ).val(),

	    url = $form.attr( "action" );
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "buscarPaqueteTipo","tipo": tipo},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	
	
	$("#buscarPaqueteCiudad").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		ciudad = $form.find( "select[name='ciudad']" ).val(),

	    url = $form.attr( "action" );
		$("#cuerpoAdmin").html('<img id="cargando" alt="cargando" src="img/cargando.gif">');
		$.ajax({
            type: "post",
            url: url,
            data: {"rest": "buscarPaqueteCiudad","ciudad": ciudad},
            success: function(data){
            	$("#cuerpoAdmin").html(data);
            }
        });
	});
	
	
	
	
	
	
});