<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
	List<Usuario> lista = (List<Usuario>) request.getAttribute("lista");
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
			<h1>Clientes Registrado</h1>
		</div>
		<div class="Heading">
			<div class="Cell">
				<h3>CORREO ELECT.</h3>
			</div>
			<div class="Cell">
				<h3>ACCION</h3>
			</div>
			<div class="Cell">
				<h3>FECHA</h3>
			</div>
			<div class="Cell">
				<h3>IP</h3>
			</div>
			<div class="Cell">
				<h3>HOST</h3>
			</div>
		</div>


		<%
		ArrayList<Historial> histo=new ArrayList<Historial>();
			for (Usuario u : lista) {
				for(Historial h :u.getHistorial()){
		%>

		<div class="Heading">
			<div class="Cell">
				<%
					out.println(u.getEmail());
				%>
			</div>

			<div class="Cell">
				<%
					out.println(h.getAccion());
				%>
			</div>

			<div class="Cell">
				<%
					out.println(h.getDate().toString());
				
				%>
			</div>
			
			<div class="Cell">
				<%
					out.println(h.ip);
				
				%>
			</div>
			
			<div class="Cell">
				<%
					out.println(h.host);
				
				%>
			</div>

		</div>
		<%
				}}
	%>
	</div>

	<%
		} else {
	%>
	<b> NO EXISTE NINGUNA RESERVA</b>
	<br> ¡¡¡ Reserve !!!
	<%}%>
</body>
</html>