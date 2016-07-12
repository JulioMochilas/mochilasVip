<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="pw2.*"%>
<%@ page import="java.util.*"%>
 <%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>

<%
List<Ciudad> listaCiudades = (List<Ciudad>) request.getAttribute("lista");
 BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="css/registro.css" rel="stylesheet" type="text/css">
<script  type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/resgistrarseItem.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<script  type="text/javascript">
	$(function() {
		$("#datepicker").datepicker({
			minDate : -20,
			maxDate : "+1M +10D"
		});
	});
</script>


<title>Registrar Paquete</title>
</head>
<body>
<div id=cuerpoAgregarPlato>
<div id="cero">

			<div id="table">
				<h2 align="center">Registrar Nuevo Paquete</h2>
				
				<form action="/savePaquete" id="savePaquete" method="post" onsubmit="return validar();">
				
				<div class="row">
				<div class="cell">Nombre del Paquete</div>
				<div class="cell"><input type="text" name="nombrePaquete"  id="nombrePaquete" size="40" pattern="([A-Za-z]{2,20})"  required></div>
				</div>
				<div class="row">
				<div class="cell">Tipo de paquete</div>
				<div class="cell"><select name="tipo" id="tipo">
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
				<select name="ciudad" id="ciudad">
				<% for (Ciudad a :listaCiudades ){
				if(!a.isBloqueo()){%>
					<option value=<%=a.getNombre()%>><%=a.getNombre()%></option>
				<%}}%>
			</select>
			</div>	
				</div>
				
	
				<div class="row">
				<div class="cell">Numero de Personas</div>
				<div class="cell"><input type="text" name="numeroPersonas" id="numeroPersonas" size="40" pattern="([0-9]{2,20})"  required></div>
				</div>
				
				
				
				<div class="row">
				<div class="cell">Descripcion</div> 
				<div class="cell"><textarea name="descripcion" id="descripcion" width="100px" higth="100px"  required="required" placeholder="Ingrese descripcion"></textarea></div>	
				</div>
				<div class="row">
				<div class="cell">Precio</div>
				<div class="cell"><input type="text" name="precio" id="precio" size="10" required="required"/></div>
				</div>
				
				<div class="row">
				<div class="cell">Fecha de inicio</div>
				<div class="cell"><input type="text" id="datepicker" name="fecha" placeholder="mes/dia/año"/><br>
				</div>
				</div>
				
				<div class="row">
				<div class="cell">Hora de Salida</div>
				
				<div class="cell">
						<select name="hora">
								<option value="7">7 am</option>
								<option value="10">10 am</option>
								<option value="15">3 pm</option>
								<option value="18">6 pm</option>
						</select><br> 
				</div>
				</div>
				
				<div class="row">
				<div class="cell"></div>
				<div class="cell"><input id="agragarPlato" type="submit" value="Agregar Paquete"/></div>
				</div>
				</form>
			</div>
	</div>
</div>	
</body>
</html>