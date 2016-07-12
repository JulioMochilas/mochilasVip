<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
	List<Ciudad> lista = (List<Ciudad>) request.getAttribute("lista");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../css/tablaRegistroAdmin.css" rel="stylesheet" type="text/css">
<title>LISTA DE CIUDADES</title>
</head>
<body>
	<%
		if (lista.size() != 0) {
	%>

	<div class="Table">

		<div class="Title">
			<h1>CIUDADES REGISTRADAS</h1>
		</div>
		<div class="Heading">
		<div class="Cell"><h3>ID</h3></div>
			<div class="Cell"><h3>NOMBRE</h3></div>
			<div class="Cell"><h3>BLOQUEO</h3></div>
			
			
			
			
		</div>

		<%for(Ciudad p: lista){%>
		<div class="Heading">
		
		<div class="Cell">
				<% out.println(p.getId().getId());%>
			</div>
			
			<div class="Cell">
				<% out.println(p.getNombre()); %>
			</div>
			<div class="Cell">
				<% out.println(p.isBloqueo());%>
			</div>

			
			
			
		</div>
		<% }%>
	</div>
	<%
		} else {
	%>
	<b>NO EXISTE CIUDADES!!!!!!</b>
	<br> ¡¡¡ CREA !!!
	<%}%>
</body>
</html>