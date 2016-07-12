package pw2;

//file Upload.java

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;

@SuppressWarnings("serial")
public class SaveImagenUsuario extends HttpServlet {
 private BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();

 @Override
 public void doPost(HttpServletRequest req, HttpServletResponse resp)
     throws ServletException, IOException {
	 PersistenceManager pm=PMF.get().getPersistenceManager();
	 RequestDispatcher mandar=null;
	 HttpSession sesion = req.getSession();
	 
	 String gmail =(String)sesion.getAttribute("email");

	 
     Map<String, List<BlobKey>> blobs = blobstoreService.getUploads(req);  
     List<BlobKey> blobKeys = blobs.get("myFile");
    System.out.println(gmail);
	 Query q=pm.newQuery(Usuario.class);
	 q.setFilter("email == emailParam ");
	 q.declareParameters("String emailParam");
	 List<Usuario> usuario=(List<Usuario>)q.execute(gmail);
	 System.out.println("sknfhsdnfskfnsdknfskdfn");
	 System.out.println(usuario.size());
	 
	 if(usuario.size()==0){
	      resp.sendRedirect("/error.jsp");
          return ;
	 }
	
	 usuario.get(0).setImg(blobKeys.get(0).getKeyString());
	 System.out.println(usuario.get(0).toString());
	 
         //resp.sendRedirect("/mostrarImagen?blob-key=" + blobKeys.get(0).getKeyString());
	 	resp.sendRedirect("/iniciarSesion");
         mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exito.jsp");
         mandar.forward(req, resp);
     
 }
}