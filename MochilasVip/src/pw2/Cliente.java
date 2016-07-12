package pw2;
import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Cliente extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws IOException, ServletException {
		RequestDispatcher mandar = null ;
		HttpSession session = req.getSession();
		PersistenceManager pm = PMF.get().getPersistenceManager();
		
			String rest=req.getParameter("rest");
			System.out.println(rest);
			
			switch (rest){
			case "filtroTodos":
				
				Query qp2=pm.newQuery(Paquete.class);
				List<Paquete> listaPaquete=(List<Paquete>)qp2.execute();
				req.setAttribute("lista", listaPaquete);
				System.out.println("listarPaquete");
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/mostrarPaquetesFiltro.jsp");
				
				
				break;
			
			case "filtroTipo":
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/filtroTipo.jsp");
				break;
				
                case "buscarPaqueteTipo":
                	String tipo = req.getParameter("tipo");
                	Query q3=pm.newQuery(Paquete.class);
                	q3.setFilter("tipo == tipoParam");
    				q3.declareParameters("String tipoParam");
    				List<Paquete> paquetes2 = (List<Paquete>)q3.execute(tipo);
    				req.setAttribute("lista", paquetes2);
    				System.out.println("listarPaquete");
    				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/mostrarPaquetesFiltro.jsp");
    				
    				System.out.println("listarPaquete");
    				break;
				
                case "filtroCosto":
    				
    				Query q8=pm.newQuery(Paquete.class);
    				List<Paquete> listaPaquetes=(List<Paquete>)q8.execute();
    				q8.setOrdering("precio ascending");
    				req.setAttribute("lista", listaPaquetes);
    				System.out.println("listarPaquete");
    				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/mostrarPaquetesFiltro.jsp");
    				
    				
    				break;
				
			case "filtroCiudad":
				Query q6=pm.newQuery(Ciudad.class);
				List<Ciudad> listaCiudades=(List<Ciudad>)q6.execute();
				req.setAttribute("lista", listaCiudades);
				System.out.println("listarasdf");
				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/filtroCiudad.jsp");
				break;
			 case "buscarPaqueteCiudad":
	               	String ciudad = req.getParameter("ciudad");
	               	System.out.println(ciudad);
	               	Query q7=pm.newQuery(Paquete.class);
	               	q7.setFilter("ciudad == ciudadParam");
	   				q7.declareParameters("String ciudadParam");
	   				List<Paquete> paquetesFiltro = (List<Paquete>)q7.execute(ciudad);
	   				req.setAttribute("lista", paquetesFiltro);
	   				System.out.println("listarPaquete");
	   				mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/mostrarPaquetesFiltro.jsp");
	   				
	   				System.out.println("listarPaquete");
	   				break;
				
			
			
			default :
			 	mandar=getServletContext().getRequestDispatcher("/WEB-INF/jsp/error.jsp");	
			break;
			}
			mandar.forward(req, resp);
	}
}