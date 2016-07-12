package pw2;

import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

//import com.google.storage.onestore.v3.OnestoreEntity.User;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

@SuppressWarnings("serial")
public class IniciarSesion extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Query q = pm.newQuery(Usuario.class);
		RequestDispatcher mandar = null ;
		HttpSession sesion = req.getSession();	
		//		String email = req.getParameter("email");
		//		String pass = req.getParameter("pass");
		UserService us = UserServiceFactory.getUserService();
		User user = us.getCurrentUser();
		
		if(user == null){
			resp.sendRedirect(us.createLoginURL(req.getRequestURI()));
		}else{

			String email = user.getEmail();
			q.setFilter("email == emailParam");
			q.declareParameters("String emailParam");

			try{
				@SuppressWarnings("unchecked")
				List<Usuario> cliente = (List<Usuario>) q.execute(email);
				if(cliente.size() == 0){
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/noExisteEmail.jsp");
				}
				//			else if(!cliente.get(0).getPass().equals(pass)){
				//				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/passIncorrecto.jsp");
				//			}
				else if(cliente.get(0).getBloqueado() == true){
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/cuentaBloqueada.jsp");
				}
				else {
					sesion.setAttribute("img", cliente.get(0).getImg());
					sesion.setAttribute("email", cliente.get(0).getEmail());
					sesion.setAttribute("nombre", cliente.get(0).getNombre());
					sesion.setAttribute("paterno", cliente.get(0).getPaterno());
					sesion.setAttribute("materno", cliente.get(0).getMaterno());
					sesion.setAttribute("admin", ""+cliente.get(0).getAdmin());
					System.out.println(cliente.get(0).getAdmin());
					cliente.get(0).getHistorial().add(new Historial ("Inicio Sesion", req.getRemoteAddr(), req.getRemoteHost()));
					mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/exito.jsp");
				}
			}catch(Exception e){
				System.out.println(e);
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");
			}finally{
				pm.close();
				mandar.forward(req, resp);
			}
		}
	}
}