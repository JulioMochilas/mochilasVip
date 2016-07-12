<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*;"%>
<%
	Paquete p = (Paquete) request.getAttribute("paquetes");
List<Ciudad> listaCiudades = (List<Ciudad>) request.getAttribute("lista");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/cambiar.js"></script>
</head>
<body>
	<form action="/cambio" id="editarPaqueteAccion">

		<div class="row">
				<div class="cell">Nombre del Paquete</div>
				<div class="cell"><input type="text" name="nombrePaquete"  id="nombrePaquete" value="<% out.print(p.getNombre()); %>"size="40" pattern="([A-Za-z]{2,20})"  required></div>
				</div>
				<div class="row">
				<div class="cell">Tipo de paquete</div>
				<div class="cell"><select name="tipo" value="<% out.print(p.getTipo()); %>"id="tipo">
								<option value="normal">normal</option>
								<option value="promocion">promocion</option>
								<option value="escolar">escolar</option>
								<option value="especial">especial</option>
								
								</select>
					</div>	
				</div>
				
				
				<div class="row">
				<div class="cell">Ciudad</div>
				<div class="cell">
				<select name="ciudad" id="ciudad" value="<% out.print(p.getCiudad()); %>">
				<% for (Ciudad a :listaCiudades ){
				if(!a.isBloqueo()){%>
					<option value=<%=a.getNombre()%>><%=a.getNombre()%></option>
				<%}}%>
			</select>
			</div>	
				</div>
				
				<div class="row">
				<div class="cell">Numero de Personas</div>
				<div class="cell"><input type="text" name="numeroPersonas" value="<% out.print(p.getNumeroPersonas()); %>" id="numeroPersonas" size="40" pattern="([0-9]{2,20})"  required></div>
				</div>
				
				<div class="row">
				<div class="cell">Descripcion</div> 
				<div class="cell"><textarea name="descripcion" value="<%out.print(p.getDescripcion()); %>" id="descripcion" width="150px" higth="150px"  required="required" placeholder="Ingrese descripcion"></textarea></div>	
				</div>
				<div class="row">
				<div class="cell">Precio</div>
				<div class="cell"><input type="text" name="precio" value="<%out.print(p.getPrecio()); %>"id="precio" size="10" required="required"/></div>
				</div>
				
				<div class="row">
				<div class="cell">Fecha de inicio</div>
				<div class="cell"><input type="text" id="datepicker" value="<%out.print(p.getFecha()); %>"name="fecha" placeholder="mes/dia/año"/><br>
				</div>
				</div>
				
				<div class="row">
				<div class="cell">Hora de Salida</div>
				
				<div class="cell">
						<select name="hora" value="<% out.print(p.getHora()); %>">
								<option value="7">7 am</option>
								<option value="10">10 am</option>
								<option value="15">3 pm</option>
								<option value="18">6 pm</option>
						</select><br> 
				</div>
				</div>

		<input type="submit" value="EDITAR DESCRIPCION"><br>
	</form>
</body>
</html>