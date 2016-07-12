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
<script type="text/javascript" src="../js/cliente.js"></script>
<link href="../css/administrador.css" rel="stylesheet" type="text/css">
<title>Insert title here</title>
</head>
<body>

<div id="subContenedorAdmin">
	<div id="subOpcionesAdmin">
	<h1>Seleccione la ciudad</h1>
	
<form action="/cliente" id="buscarPaqueteCiudad">
		<div class="subBotonAdmin">	<select name="ciudad" id="ciudad">
								
		<% for (Ciudad a :lista ){
				if(!a.isBloqueo()){%>
					<option value=<%=a.getNombre()%>><%=a.getNombre()%></option>
				<%}}%>	
								
								</select>
								<input type="submit" value="Buscar">
								
	</form>
	
	</div>
	<div id="subcuerpoAdmin"></div>
</div>
	


</body>
</html>