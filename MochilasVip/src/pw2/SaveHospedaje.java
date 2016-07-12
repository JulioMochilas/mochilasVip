package pw2;
import java.io.IOException;
import java.io.PrintWriter;

import javax.jdo.PersistenceManager;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

import com.google.appengine.api.blobstore.BlobKey;

@SuppressWarnings("serial")
public class SaveHospedaje extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		RequestDispatcher mandar=null;
		String 	nombre = req.getParameter("nombreHospedaje");
		String tipo = req.getParameter("tipoHospedaje");
		String precio = req.getParameter("precioHospedaje");
		String descripcion = req.getParameter("descripcionHospedaje");

		Hospedaje b = new Hospedaje(nombre, tipo,precio ,descripcion, "null");
		

		final PersistenceManager pm = PMF.get().getPersistenceManager();

		try{
			pm.makePersistent(b);
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