$(document).ready(function(){
	$("#saveCliente").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombre']" ).val(),
		paterno = $form.find( "input[name='paterno']" ).val(),
		materno = $form.find( "input[name='materno']" ).val(),
		dni = $form.find( "input[name='dni']" ).val(),
		email = $form.find( "input[name='email']" ).val(),
		pass = $form.find( "input[name='pass']" ).val(),
		
	    url = $form.attr( "action" );
		
		$.ajax({
            type: "POST",
            url: url,
            data: {"nombre": nombre, "paterno": paterno,"materno": materno,"dni": dni,
            	"email": email,"pass": pass},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	$("#saveAdmin").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		nombre = $form.find( "input[name='nombre']" ).val(),
		paterno = $form.find( "input[name='paterno']" ).val(),
		materno = $form.find( "input[name='materno']" ).val(),
		dni = $form.find( "input[name='dni']" ).val(),
		email = $form.find( "input[name='email']" ).val(),
		pass = $form.find( "input[name='pass']" ).val(),
	    url = $form.attr( "action" );
		
		$.ajax({
	        type: "POST",
	        url: url,
	        data: {"nombre": nombre, "paterno": paterno,"materno": materno,"dni": dni,
	        	"email": email,"pass": pass},
	        success: function(data){
	        	$("#cuerpo").html(data);
	        }
	    });
	});
});