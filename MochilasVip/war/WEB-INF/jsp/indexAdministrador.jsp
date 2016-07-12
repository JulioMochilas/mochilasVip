<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="/css/administrador.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/js/admin.js"></script>
<title>Insert title here</title>
</head>
<body>
<div id="contenedorAdmin">
	<div id="opcionesAdmin">
		<% if (session.getAttribute("admin").equals("2")){%>
			<div class="botonAdmin" id="adminIndex">Administradores</div>
		<% }%>
		<div class="botonAdmin" id="paqueteIndex">Paquetes</div>
		<div class="botonAdmin" id="hospedajeIndex">Hospedajes</div>
		<div class="botonAdmin" id="reservaIndex">Reservas</div>
		<div class="botonAdmin" id="clienteIndex">Clientes</div>
		<div class="botonAdmin" id="ciudadIndex">Ciudades</div>
	</div>
	<div id="cuerpoAdmin">xD</div>
</div>
</body>
</html>