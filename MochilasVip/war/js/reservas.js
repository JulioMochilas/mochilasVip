$(document).ready(function(){
	$("#reservar").submit(function(event) {
		event.preventDefault();
		var $form = $(this),
		hora = $form.find( "input[name='hora']" ).val(),
		numero = $form.find( "input[name='numero']" ).val(),
		lugar = $form.find( "input[name='lugar']" ).val(),
		zona = $form.find( "input[name='zona']" ).val(),
		fecha = $form.find( "input[name='fecha']" ).val(),
		paterno = $form.find( "input[name='paterno']" ).val(),
	    url = $form.attr( "action" );
		
		$.ajax({
            type: "post",
            url: url,
            data: {"hora": hora, "numero": numero, "lugar": lugar, "zona": zona, "tipo": "MESA", "fecha": fecha},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
	});
	
	
	$("#reservarevento").submit(function(event) {
		event.preventDefault();
		var $form1 = $(this),
		hora = $form1.find( "input[name='hora']" ).val(),
		numero = $form1.find( "input[name='numero']" ).val(),
		lugar = $form1.find( "input[name='lugar']" ).val(),
		zona = $form1.find( "input[name='zona']" ).val(),
		fecha = $form1.find( "input[name='fecha']" ).val(),
		paterno = $form1.find( "input[name='paterno']" ).val(),
	    url = $form1.attr( "action" );
		
		$.ajax({
            type: "post",
            url: url,
            data: {"hora": hora, "numero": numero, "lugar": lugar, "zona": zona, "tipo": "EVENTO", "fecha": fecha},
            success: function(data){
            	$("#cuerpo").html(data);
            }
        });
		
		
		$("#reservarlocal").submit(function(event) {
			event.preventDefault();
			var $form2 = $(this),
			hora = $form2.find( "input[name='hora']" ).val(),
			numero = $form2.find( "input[name='numero']" ).val(),
			lugar = $form2.find( "input[name='lugar']" ).val(),
			zona = $form2.find( "input[name='zona']" ).val(),
			fecha = $form2.find( "input[name='fecha']" ).val(),
			paterno = $form2.find( "input[name='paterno']" ).val(),
		    url = $form2.attr( "action" );
		
			$.ajax({
	            type: "post",
	            url: url,
	            data: {"hora": hora, "numero": numero, "lugar": lugar, "zona": zona, "tipo": "LOCAL", "fecha": fecha},
	            success: function(data){
	            	$("#cuerpo").html(data);
	            }
	        });
	});

	});
	});