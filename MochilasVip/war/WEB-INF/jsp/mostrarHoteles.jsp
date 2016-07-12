<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<% List<Hospedaje> lista = (List<Hospedaje>) request.getAttribute("lista"); %>	

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href="../css/menuhoteles.css" rel="stylesheet" type="text/css">
<title>Hospedaje</title>
</head>
<body>
<%for(Hospedaje h: lista ){ %>
<div class="lista-hoteles">
	<div class="img">
	<img class="hoteles-img"src="/mostrarImagen?blob-key=<% out.println(h.getImg());%>" alt="img">
	</div>
	<div class="info">
		<div class="nombre l">
		<% out.print(h.getNombre()); %>
		</div>
		<div class="tipo l">
		<% out.print(h.getTipo()); %>
		</div>
		<div class="descripcion l">
		<% out.print(h.getDescripcion());%>
		 </div>
		 <div class="precio l">
		 <% out.print(h.getPrecio()); %>
		 </div>
	</div>
</div>
<%} %>	
	
</body>
</html>