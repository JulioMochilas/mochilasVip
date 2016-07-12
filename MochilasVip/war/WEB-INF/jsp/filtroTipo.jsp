<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	<h1>Seleccione el tipo</h1>
	
<form action="/cliente" id="buscarPaqueteTipo">
		<div class="subBotonAdmin"><select name="tipo" id="tipo">
								<option value="normal">normal</option>
								<option value="promocion">promocion</option>
								<option value="escolar">escolar</option>
								<option value="especial">especial</option>
								
								</select>
								<input type="submit" value="Buscar">
								
	</form>
	
	</div>
	<div id="subcuerpoAdmin"></div>
</div>
	


</body>
</html>