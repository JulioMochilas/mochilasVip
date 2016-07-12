<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="com.google.appengine.api.blobstore.BlobstoreServiceFactory" %>
<%@ page import="com.google.appengine.api.blobstore.BlobstoreService" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="css/registro.css" rel="stylesheet" type="text/css">
<script  type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/resgistrarseItem.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Registrar Lugar</title>
</head>
<body>
<div id=cuerpoAgregarLugar>
<div id="cero">

			<div id="table">
				<h2 align="center">Registrar Lugar</h2>
				
				<form action="/saveCiudad" id="saveCiudad" method="post" onsubmit="return validar();">
				
				<div class="row">
				<div class="cell">Nombre</div>
				<div class="cell"><input type="text" name="nombreCiudad" id="nombreCiudad" size="40" pattern="([A-Za-z]{2,20})"  required></div>
				</div>
				<div class="row">
				<div class="cell"></div>
				<div class="cell"><input id="agregarCiudad" type="submit" value="agregar_lugar"/></div>
				</div>
				</form>
			</div>
	</div>
</div>	
</body>
</html>