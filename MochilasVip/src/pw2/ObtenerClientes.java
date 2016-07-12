package pw2;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



@SuppressWarnings("serial")
public class ObtenerClientes extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		PersistenceManager pm = PMF.get().getPersistenceManager();
			try{
				Query q = pm.newQuery(Usuario.class);
				@SuppressWarnings("unchecked")
				List<Usuario> cliente = (List<Usuario>) q.execute();
				req.setAttribute("lista", cliente);
				System.out.println("good");
				RequestDispatcher rd = getServletContext().getRequestDispatcher("/WEB-INF/jsp/registroClientes.jsp");
				rd.forward(req, resp);
			}catch(Exception e){
				System.out.println(e);
				System.out.println("aasd  ");
			}
		}	

	}

