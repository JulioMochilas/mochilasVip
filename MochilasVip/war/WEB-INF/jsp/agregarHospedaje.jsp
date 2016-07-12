<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>

<%
    BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="css/registro.css" rel="stylesheet" type="text/css">
<script  type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/resgistrarseItem.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Registrar Hospedaje</title>
</head>
<body>
<div id=cuerpoAgregarBebida>
<div id="cero">

			<div id="table">
				<h2 align="center">Registrar Hospedaje</h2>
				
				<form action="/saveHospedaje" id="saveHospedaje" method="post" onsubmit="return validar();">
				
				<div class="row">
				<div class="cell">Nombre</div>
				<div class="cell"><input type="text" name="nombreHospedaje" id="nombreHospedaje" size="40" pattern="([A-Za-z]{2,20})"  required></div>
				</div>
				<div class="row">
				<div class="cell">Tipo de Hospedaje</div>
				<div class="cell"><select name="tipoHospedaje" id="tipoHospedaje">
								<option value="5 ESTRELLAS">5 ESTRELLAS</option>
								<option value="4 ESTRELLAS">4 ESTRELLAS</option>
								<option value="3 ESTRELLAS">3 ESTRELLAS</option>
								<option value="2 ESTRELLAS">2 ESTRELLAS</option>
								</select>
								</div>	
				</div>
				<div class="row">
				<div class="cell">Descripcion</div> 
				<div class="cell"><textarea name="descripcionHospedaje" id="descripcionHospedaje" width="100px" higth="100px"  required="required" placeholder="Ingrese descripcion"></textarea></div>	
				</div>
				<div class="row">
				<div class="cell">Precio</div>
				<div class="cell"><input type="text" name="precioHospedaje" id="precioHospedaje" size="10" required/></div>
				</div>
				<div class="row">
				<div class="cell"></div>
				<div class="cell"><input id="agregarHospedaje" type="submit" value="agregarHospedaje"/></div>
				</div>
				</form>
			</div>
	</div>
</div>	
</body>
</html>