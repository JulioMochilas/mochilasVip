<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<% List<Hospedaje> array = (List<Hospedaje>) request.getAttribute("lista");%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="../js/accionAdmin.js"></script>
<title>Borrar Hospedaje</title>
</head>
<body>
	<%if(array.size() != 0) {%>
	<form action="/borrarHospedaje" id="borrarAccionHospedaje">
	<%	for(Hospedaje r : array) {	%><br>
	<div class="relacion">
		<input type="radio" name="id" value="<%out.print(r.getId().getId());%>">
		<b>ID </b><%	out.print(r.getId().getId());%><br>
		<b>Nombre : </b><%	out.print(r.getNombre());%><br>
		<b>Precio :</b> <%	out.print(r.getPrecio());%>
		<b>Tipo :</b> <%	out.print(r.getTipo() + " ");%>
		<b>Descripcion : </b><%	out.print(r.getDescripcion());%><br>
	</div>
	<%	}%>
	<br>
	<input type="submit" value="Borrar Hospedaje">
	</form>
	<%} else {%>
		<br>
		<b> NO EXISTE NINGUN HOSPEDAJE</b><br>
	<%}%>
	<br>
</body>
</html>