<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<% List<Paquete> array = (List<Paquete>) request.getAttribute("lista");%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="../js/accionAdmin.js"></script>
<title>Insert title here</title>
</head>
<body>
	<%if(array.size() != 0) {%>
	<form action="/accionAdministrador" id="bloquearAccionPaquete">
	<%	for(Paquete r : array) {	%><br>
	<div class="relacion">
		<input type="radio" name="idPlato" value="<%out.print(r.getId().getId());%>">
		<b>Nombre : </b><%	out.print(r.getNombre());%><br>
		<b>Tipo :</b> <%	out.print(r.getTipo() + " ");%>
		<b>Ciudad :</b> <%	out.print(r.getCiudad() + " ");%>
		<b>NumeroPersonas :</b> <%	out.print(r.getNumeroPersonas() + " ");%>
		<b>Precio :</b> <%	out.print(r.getPrecio() + " ");%>
		<b>Fecha : </b><%	out.print(r.getFecha());%><br>
		<b>Hora :</b> <%	out.print(r.getHora() + " ");%>
		<b>Descripcion : </b><%	out.print(r.getDescripcion());%><br>
		
		
		<%if(r.getBloqueo() == true) {%>
		<b>Estado : </b><p style="color : red">BLOQUEADO<br></p>
		<%} else {%>
		<b>Estado : </b><p style="color : green">DESBLOQUEADO<br></p>
	<%}%>
	</div>
	<%	}%>
	<br>
	<input type="submit" value="Bloquear/Desbloquear Paquete">
	</form>
	<%} else {%>
		<br>
		<b> NO EXISTE NINGUN PAQUETE</b><br>
	<%}%>
	<br>

</body>
</html>