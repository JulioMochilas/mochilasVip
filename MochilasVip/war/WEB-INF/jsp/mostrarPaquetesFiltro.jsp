<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
	List<Paquete> lista = (List<Paquete>) request.getAttribute("lista");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../css/tablaRegistroAdmin.css" rel="stylesheet" type="text/css">
<title>Insert title here</title>
</head>
<body>
	<%
		if (lista.size() != 0) {
	%>

	<div class="Table">

		<div class="Title">
			<h1>LISTA PAQUETES</h1>
		</div>
		<div class="Heading">
		
			<div class="Cell"><h3>NOMBRE</h3></div>
			<div class="Cell"><h3>HORA</h3></div>
			<div class="Cell"><h3>NUMERO DE PERSONAS</h3></div>
			<div class="Cell"><h3>CIUDAD</h3></div>
			<div class="Cell"><h3>FECHA</h3></div>
			<div class="Cell"><h3>PRECIO</h3></div>
			
			<div class="Cell"><h3>IMAGEN</h3></div>
		</div>

		<%for(Paquete p: lista){%>
		<div class="Heading">
	
			<div class="Cell">
				<% out.println(p.getNombre()); %>
			</div>
			<div class="Cell">
				<% out.println(p.getHora()); %>
			</div>
			<div class="Cell">
				<% out.println(p.getNumeroPersonas()); %>
			</div>
			
			<div class="Cell">
				<% out.println(p.getCiudad()); %>
			</div>
			
			<div class="Cell">
				<% out.println(p.getFecha()); %>
			</div>
			<div class="Cell">
				<% out.println(p.getTipo()); %>
			</div>


			<div class="Cell">
				<% out.println(p.getPrecio()); %>
			</div>
			<div class="Cell">
			<img class="img" src="/mostrarImagen?blob-key=<% out.println(p.getImg());%>" alt="img">
			</div>
		</div>
		<% }%>
	</div>
	<%
		} else {
	%>
	<b> NO EXISTE NINGUN PAQUETE</b>
	<br> ¡¡¡ Reserve !!!
	<%}%>
</body>
</html>