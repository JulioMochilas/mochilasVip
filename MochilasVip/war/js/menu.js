$(document).ready(function(){
	$("#botonOfertas").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "ofertas"},
            success: function(data){
            	$("#cuerpoOfertas2").html(data);
            }
        });
	});
	$("#Entrada").hover(
			function(){
				$("#Entrada").attr("src", "img/menu_entradas_clic.png");
			},
			function(){
				$("#Entrada").attr("src", "img/menu_entradas.png");
			}
		);
		$("#Sopa").hover(
				function(){
					$("#Sopa").attr("src", "img/menu_sopas_clic.png");
				},
				function(){
					$("#Sopa").attr("src", "img/menu_sopas.png");
				}
			);
		$("#Fondo").hover(
				function(){
					$("#Fondo").attr("src", "img/menu_platos_clic.png");
				},
				function(){
					$("#Fondo").attr("src", "img/menu_platos.png");
				}
			);
		$("#Ensalada").hover(
				function(){
					$("#Ensalada").attr("src", "img/menu_ensaladas_clic.png");
				},
				function(){
					$("#Ensalada").attr("src", "img/menu_ensaladas.png");
				}
			);
		$("#Postre").hover(
				function(){
					$("#Postre").attr("src", "img/menu_postres_clic.png");
				},
				function(){
					$("#Postre").attr("src", "img/menu_postres.png");
				}
			);
		$("#Extra").hover(
				function(){
					$("#Extra").attr("src", "img/menu_extras_clic.png");
				},
				function(){
					$("#Extra").attr("src", "img/menu_extras.png");
				}
			);
		$("#Bebida").hover(
				function(){
					$("#Bebida").attr("src", "img/menu_bebidas_clic.png");
				},
				function(){
					$("#Bebida").attr("src", "img/menu_bebidas.png");
				}
			);
		
	$("#Entrada").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "entrada"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Sopa").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "sopa"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Fondo").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "fondo"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Ensalada").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "ensalada"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Postre").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "postre"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Extra").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "extra"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	$("#Bebida").click(function(event) {
		$.ajax({
            type: "POST",
            url: "/menuServlet",
            data: {"rest": "bebida"},
            success: function(data){
            	$("#menucuerpoIndex").html(data);
            }
        });
	});
	
});