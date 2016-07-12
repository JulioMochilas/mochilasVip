<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
Hospedaje p = (Hospedaje) request.getAttribute("hospedaje");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/cambiar.js"></script>
</head>
<body>
	<form action="/cambio" id="editarHospedajeAccion">
		<label>NOMBRE</label>
		<input type="text" name="nombre" value="<% out.print(p.getNombre()); %>" size="15"><br>
		<label>PRECIO</label>
		<input type="text" name="precio" value="<% out.print(p.getPrecio()); %>" size="15"><br>
		<label>TIPO</label>
		<select name="tipo" id="tipo">
			<option value="<% out.print(p.getTipo()); %>"><% out.print(p.getTipo()); %></option>
			<option value="ad_5E">5 ESTRELLAS</option>
			<option value="ad_4E">4 ESTRELLAS</option>
			<option value="ad_3E">3 ESTRELLAS</option>
			<option value="ad_2E">2 ESTRELLAS</option>
			</select>
		</select><br>
		<label>DESCRIPCION</label>
		<textarea name="descripcion"><% out.print(p.getDescripcion()); %></textarea><br>
		<input type="submit" value="EDITAR DESCRIPCION"><br>
	</form>
</body>
</html>