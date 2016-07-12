<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
	Usuario p = (Usuario) request.getAttribute("user");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/cambiar.js"></script>
</head>
<body>
	<form action="/cambio" id="editarAdministradorAccion">
		<label style="color : red">NOMBRE</label>
		<input type="text" name="nombre" value="<% out.print(p.getNombre()); %>" size="15"><br>
		<label style="color : red">AP. PATERNO</label>
		<input type="text" name="paterno" value="<% out.print(p.getPaterno()); %>" size="15"><br>
		<label style="color : red">AP. MATERNO</label>
		<input type="text" name="materno" value="<% out.print(p.getMaterno()); %>" size="15"><br>
		<label style="color : red">DNI</label>
		<input type="text" name="dni" value="<% out.print(p.getDni()); %>" size="15"><br><br><br>
		<input type="submit" value="EDITAR DESCRIPCION"><br>
	</form>
</body>
</html>