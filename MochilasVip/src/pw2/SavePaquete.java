package pw2;

import java.io.IOException;
import java.rmi.ServerException;
import java.util.*;

import javax.jdo.PersistenceManager;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;;

@SuppressWarnings("serial")

public class SavePaquete extends HttpServlet {
	private BlobstoreService blobstoreService = BlobstoreServiceFactory.getBlobstoreService();
	
	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		RequestDispatcher mandar = null ;
		String nombre = req.getParameter("nombre");
		String tipo=req.getParameter("tipo");
		String ciudad=req.getParameter("ciudad");
		String numeroPersonas=req.getParameter("numeroPersonas");
		String descripcion=req.getParameter("descripcion");
		String precio=req.getParameter("precio");
		String fecha=req.getParameter("fecha");
		String hora=req.getParameter("hora");

//		Map<String, List<BlobKey>> blobs = blobstoreService.getUploads(req);
//		List<BlobKey> blobKeys = blobs.get("imagen");
		
	Paquete paquete =new Paquete(nombre,hora,numeroPersonas,ciudad,fecha,tipo,descripcion,precio,null);
		
		//P plato = new Plato(nombre, tipo, precio, descripcion, "null");
		
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try{
			pm.makePersistent(paquete);
			mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exito.jsp");

		}catch(Exception e){
			System.out.println(e);
			mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
		}finally{
			pm.close();
			mandar.forward(req, resp);
		}
	}
}
