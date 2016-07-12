package pw2;
import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class AccionAdministrador extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		RequestDispatcher mandar = null ;
		HttpSession session = req.getSession();
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
		Query q = pm.newQuery(Usuario.class);
		String email;
		Long id;
		String accion=req.getParameter("accion");
			switch (accion){
			
			case "bloquearAccionCiudad":
				Query l1 = pm.newQuery(Ciudad.class);
				id = Long.parseLong(req.getParameter("id"));
				l1.setFilter("id == idParam");
				l1.declareParameters("Long idParam");
				try {
					List<Ciudad> bloquePlatos = (List<Ciudad>)l1.execute(id);
					if(bloquePlatos.get(0).isBloqueo() == false)
						bloquePlatos.get(0).setBloqueo(true);
					else
						bloquePlatos.get(0).setBloqueo(false);
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
			break;
			/*
			case "bloquearAccionPlato":
				Query q1 = pm.newQuery(Plato.class);
				id = Long.parseLong(req.getParameter("id"));
				q1.setFilter("id == idParam");
				q1.declareParameters("Long idParam");
				try {
					List<Plato> bloquePlatos = (List<Plato>)q1.execute(id);
					if(bloquePlatos.get(0).getBloqueado() == false)
						bloquePlatos.get(0).setBloqueado(true);
					else
						bloquePlatos.get(0).setBloqueado(false);
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
			break;
			*/
			case "bloquearAccionAdmin":
				email = req.getParameter("email");
				q.setFilter("email == emailParam");
				q.declareParameters("String emailParam");
				try {
					List<Usuario> bloqueados = (List<Usuario>)q.execute(email);
					if(bloqueados.get(0).getBloqueado() == false)
						bloqueados.get(0).setBloqueado(true);
					else
						bloqueados.get(0).setBloqueado(false);
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
				break;
				
			case "bloquearAccionCliente":
				email = req.getParameter("email");
				q.setFilter("email == emailParam");
				q.declareParameters("String emailParam");
				try {
					List<Usuario> bloqueados = (List<Usuario>)q.execute(email);
					if(bloqueados.get(0).getBloqueado() == false)
						bloqueados.get(0).setBloqueado(true);
					else
						bloqueados.get(0).setBloqueado(false);
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
				break;
				
			case "borrarAdmin":
				email = req.getParameter("email");
				q.setFilter("email == emailParam");
				q.declareParameters("String emailParam");
				try {
					List<Usuario> administradores = (List<Usuario>)q.execute(email);
					pm.deletePersistent(administradores.get(0));
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
				break;
			
			case "borrarCliente":
				email = req.getParameter("email");
				q.setFilter("email == emailParam");
				q.declareParameters("String emailParam");
				try {
					List<Usuario> clientes = (List<Usuario>)q.execute(email);
					pm.deletePersistent(clientes.get(0));
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exitoNormal.jsp");
				} catch (Exception e) {
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
				}
				break;
				
			default :
			 	mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/opciones_admin.jsp");	
			break;
			}
			mandar.forward(req, resp);
			pm.close();
	}
}