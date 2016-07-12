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
<!--
<script type="text/javascript" src="../js/resgistrarseItem.js"></script>
-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Subir</title>
</head>
<body>
<div id="anadirImagenBebida">

   					<form action=<%= blobstoreService.createUploadUrl("/saveImagenHospedaje") %> method="post"  id="saveImagen" enctype="multipart/form-data">
					 <input type="file"name="myFile" required>
					 <input type="text" name="id"  pattern="[0-9]{16}" maxlength="16" required>
					 <input type="submit" name="subir"value="subir" >
				</form>
</div>	
</body>
</html>