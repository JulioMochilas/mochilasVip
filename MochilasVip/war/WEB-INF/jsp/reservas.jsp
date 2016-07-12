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
<title>Insert title here</title>
<script type="text/javascript" src="/js/jquery-ui.js"></script>
<script type="text/javascript" src="/js/reservas.js"></script>
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/reserva.css">
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

<script>
	$(function() {
		$("#datepicker").datepicker({
			minDate : -20,
			maxDate : "+1M +10D"
		});
	});
</script>
</head>
<body>
	<% if(session.getAttribute("email") != null && !session.getAttribute("admin").equals("2")){%>
	<div id="cero">
	<h2>Reservar Mesa</h2>
	<form action="saveReserva" id="reservar" onsubmit="return validar();">
		<div id="formulario">
			<div class="row">
				<div id="columna1">
					<p>LUGAR DE RESERVA</p>
				</div>
				<div id="columna2"><p>
					<%for (Ciudad l : lista) {%>
					<input type="radio" name="lugar" value="<%out.print(l.getNombre());%>"><%out.print(l.getNombre());%><br>
					<%}%>
					</p>
				</div>
			</div>
			<div class="row">
				<div id="columna1">
					<p>ZONA</p>
				</div>
				<div id="columna2"><p>
					<input type="radio" name="tipo" value="publico">PUBLICO <br>
					<input type="radio" name="tipo" value="intermedio">INTERMEDIO<br>
						<input type="radio" name="tipo" value="exclusivo">EXCLUSIVO
					</p>
				</div>
			</div>
			<div class="row">
					<div id="columna1">
						<p>NUMERO DE MESAS</p>
					</div>
					<div id="columna2">
						<select name="numero">
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
			</div>
			<div class="row">
					<div id="columna1">
						<p>HORA</p>
					</div>
					<div id="columna2">
						<select name="hora">
								<option value="11">11 am</option>
								<option value="12">12 m</option>
								<option value="1">1 pm</option>
								<option value="2">2 pm</option>
								<option value="3">3 pm</option>
								<option value="4">4 pm</option>
								<option value="5">5 pm</option>
								<option value="6">6 pm</option>
								<option value="7">7 pm</option>
						</select><br> 
						<input type="text" id="datepicker" name="fecha" placeholder="mes/dia/año"/><br>
						
					</div>
			</div>
			<input type="submit" value="reservar">
			
		</div>
	</form>
	</div>
	<%} else {%>
		<%if(session.getAttribute("admin").equals("2")){%>
			<b>Usted es administrador</b>
			<b>No puede reservar</b>
		<%} else {%>
		<b>Necesita Registrarse</b>
		<%}%>
	<%}%>
</body>
</html>